import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown.tsx';

import  { userEvent, within} from '@storybook/test';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown', 
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the dropdown',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable dropdown',
    },
    initialVisibility: {
      control: 'boolean',
      description: 'Open or closed',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Assuming `Dropdown` has a test ID to target for the click action.
    await userEvent.click(canvas.getByTestId('Dropdown'));
    
    // Wait a moment for dropdown items to be available after opening.
    const dropdownItems = await canvas.findAllByTestId('DropdownItem', {}, {timeout: 1000});
    
    for (const item of dropdownItems) {
      await userEvent.hover(item);
    }
  }
};

export const disabled: StoryObj<typeof Dropdown> = {
  args: {
    disabled: true,
  },
};

export const closed: StoryObj<typeof Dropdown> = {
  args: {
    disabled: true,
    initialVisibility: false,
  },
};
  

export const open: StoryObj<typeof Dropdown> = {
  args: {
    disabled: true,
    initialVisibility: true,
  },
};
  
  
  

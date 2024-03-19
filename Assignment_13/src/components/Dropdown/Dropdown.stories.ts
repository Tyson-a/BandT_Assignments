import type { Meta, StoryObj } from '@storybook/react';

import  { userEvent, within, screen} from '@storybook/test';


import Dropdown from './Dropdown.tsx';

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
    const dropdownItems = screen.getAllByTestId('DropdownItem');
    
    await userEvent.click(canvas.getByTestId('Dropdown'));
    dropdownItems.forEach(async (item) => {

      await userEvent.hover(item);
    });
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
  
  
  

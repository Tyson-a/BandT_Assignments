import type { Meta, StoryObj } from '@storybook/react';

import DropdownItem from './DropdownItem.tsx';

const meta: Meta<typeof DropdownItem> = {
  title: 'Components/DropdownItem', 
  component: DropdownItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the DropdownItem',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable DropdownItem',
    },
    children: {
      control: 'string',
      description: 'Makes the Item Appear',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof DropdownItem> = {
  args: {
    disabled: false,
    children: "item"
  },
};

  
export const disabled: StoryObj<typeof DropdownItem> = {
  args: {
    disabled: true,
    children: "item"
  },
};
  
  

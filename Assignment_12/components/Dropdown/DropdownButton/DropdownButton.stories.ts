import type { Meta, StoryObj } from '@storybook/react';

import DropdownButton from './DropdownButton.tsx';

const meta: Meta<typeof DropdownButton> = {
  title: 'Components/DropdownButton', 
  component: DropdownButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isVisible: {
      control: 'boolean',
      description: 'Control visibility of DropdownButton',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the DropdownButton',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable DropdownButton interaction',
    },
    children: {
      control: 'string',
      description: 'Makes the Button Appear',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof DropdownButton> = {
  args: {
    disabled: false,
    isVisible: false,
    children: "☰",

  },
};

export const disabled: StoryObj<typeof DropdownButton> = {
  args: {
    disabled: true,
    isVisible: true,
    children: "X",
  },
};
  
  

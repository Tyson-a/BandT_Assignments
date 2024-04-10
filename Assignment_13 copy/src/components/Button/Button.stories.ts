import type { Meta, StoryObj } from '@storybook/react';

import MyButton from './Button.tsx';

const meta: Meta<typeof MyButton> = {
  title: 'Components/MyButton', 
  component: MyButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    children: {
      control: 'text',
      description: 'Button text',
    },
    backgroundcolor: {
      control: 'color',
      description: 'Background color of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof MyButton> = {
  args: {
    children: 'Click Me',
    disabled: false,
  },
};
  
export const Disabled: StoryObj<typeof MyButton> = {
  args: {
    children: 'Cannot click me',
    disabled: true,
  },
};

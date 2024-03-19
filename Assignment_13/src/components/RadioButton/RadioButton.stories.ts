import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './RadioButton.tsx';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton', 
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the RadioButton',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable RadioButton',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof RadioButton> = {
  args: {
    disabled: false,
    options: ['Banff', 'Jasper', 'Yoho'],
  },
};

export const disabled: StoryObj<typeof RadioButton> = {
  args: {
    disabled: true,
    options: ['Banff', 'Jasper', 'Yoho'],
  },
};
  
  

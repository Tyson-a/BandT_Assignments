import type { Meta, StoryObj } from '@storybook/react';

import LabelComponent from './Label.tsx';

const meta: Meta<typeof LabelComponent> = {
  title: 'Components/LabelComponent', 
  component: LabelComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the Label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable Label',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof LabelComponent> = {
  args: {
    disabled: false,
    fontFamily: "Arial",
    text: "View Portfolio",
    bold: true
  },
};

export const disabled: StoryObj<typeof LabelComponent> = {
  args: {
    disabled: true,
    text: "View Portfolio"
  },
};




  
  

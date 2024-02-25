import type { Meta, StoryObj } from '@storybook/react';

import TextComponent from './Text.tsx';

const meta: Meta<typeof TextComponent> = {
  title: 'Components/TextComponent', 
  component: TextComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the Text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable Text',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof TextComponent> = {
  args: {
    disabled: false,
    fontFamily: "Arial",
    text: "View Portfolio",
  },
};

export const disabled: StoryObj<typeof TextComponent> = {
  args: {
    disabled: true,
    text: "View Portfolio"
  },
};
  
  

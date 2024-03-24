import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card.tsx';

const meta: Meta<typeof Card> = {
  title: 'Components/Card', 
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundcolor: {
      control: 'color',
      description: 'Background color of the text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable Card',
    },
    color: {
      control: 'color',
      description: 'Text color of the card',
    },
    alwaysShowText: {
      control: 'boolean',
      description: 'text box can be switch for mobile',
    },

    
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof Card> = {
  args: {
    src: "./hero-card-complete.jpeg",
    text: " and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    disabled: false,
  },
};

export const disabled: StoryObj<typeof Card> = {
  args: {
    src: "./hero-card-complete.jpeg",
    text: " and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    disabled: true,
  },
};

export const Mobile: StoryObj<typeof Card> = {
  args: {
    src: "./hero-card-complete.jpeg",
    text: " and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    disabled: false,
    alwaysShowText: true,
  },
};
  
  

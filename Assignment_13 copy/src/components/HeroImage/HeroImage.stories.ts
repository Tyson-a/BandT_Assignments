import type { Meta, StoryObj } from '@storybook/react';

import HeroImage from './HeroImage.tsx';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage', 
  component: HeroImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundcolor: {
      control: 'color',
      description: 'Background color of the Nav in HeroImage',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable whole HeroImage',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof HeroImage> = {
  args: {
    disabled: false,
  },
};

export const disabled: StoryObj<typeof HeroImage> = {
  args: {
    disabled: true,
  },
};
  
  

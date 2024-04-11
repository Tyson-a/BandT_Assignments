import type { Meta, StoryObj } from '@storybook/react';

import AboutMe from './AboutMe.tsx';


const meta: Meta<typeof AboutMe> = {
  title: 'Components/AboutMe', // Update the title to point to AboutMe
  component: AboutMe,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the Table',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable Table',
    },
    labelText: {
      control: 'text',
      description: 'Text for the About Me label',
    },
    aboutText: {
      control: 'text',
      description: 'Description for the About Me section',
    },
    starsHTML: {
      control: {
        type: 'range',
        min: 0,
        max: 5, // Ensures the maximum value is 5
        step: 1, // Each step should increase by 1
      },
      description: 'Number of stars for HTML skill level',
    },
    starsCSS: {
      control: {
        type: 'range',
        min: 0,
        max: 5, // Ensures the maximum value is 5
        step: 1, // Each step should increase by 1
      },
      description: 'Number of stars for CSS skill level',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof AboutMe> = {
  args: {
    labelText: 'What I can do.',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    starsHTML: 3,
    starsCSS: 3,
  },
};

export const disabled: StoryObj<typeof AboutMe> = {
  args: {
    starsHTML: 3,
    starsCSS: 4,
    disabled: true,
  },
};



  
  

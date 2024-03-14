import type { Meta, StoryObj } from '@storybook/react';

import Table from './table.tsx';


const meta: Meta<typeof Table> = {
  title: 'Components/Table', 
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
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
    starsHTML: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0,
      },
      description: 'Number of stars for HTML cell (0-5)',
    },
    starsCSS: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0,
      },
      description: 'Number of stars for CSS cell (0-5)',
    },
    children: {
      control: 'text',
      description: 'Number of filled stars',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof Table> = {
  args: {
    starsHTML: 1,
    starsCSS: 2,
    disabled: false,
    children: 'Header'
    
  },
};

export const disabled: StoryObj<typeof Table> = {
  args: {
    starsHTML: 3,
    starsCSS: 4,
    disabled: true,
    children: 'Header'
  },
};



  
  

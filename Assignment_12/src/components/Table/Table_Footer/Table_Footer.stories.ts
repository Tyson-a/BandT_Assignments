import type { Meta, StoryObj } from '@storybook/react';

import TableFooter from './Table_Footer.tsx';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter', 
  component: TableFooter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the dropdown',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable dropdown',
    },
    children: {
      control: 'text',
      description: 'Number of filled stars',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof TableFooter> = {
  args: {
    disabled: false,
    children: 'Footer'
  },
};

export const disabled: StoryObj<typeof TableFooter> = {
  args: {
    disabled: true,
    children: 'Footer'
  },
};
  
  

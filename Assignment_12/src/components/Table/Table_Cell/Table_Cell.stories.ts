import type { Meta, StoryObj } from '@storybook/react';

import TableCell from './Table_Cell.tsx';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell', 
  component: TableCell,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the TableCell',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable TableCell',
    },
    stars: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Number of filled stars',
    },
    children: {
      control: 'text',
      description: 'Number of filled stars',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof TableCell> = {
  args: {
    disabled: false,
    stars: 0,
  },
};

export const Disabled: StoryObj<typeof TableCell> = {
  args: {
    disabled: true,
    stars: 0,
  },
};

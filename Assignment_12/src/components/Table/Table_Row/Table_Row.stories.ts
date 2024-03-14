import type { Meta, StoryObj } from '@storybook/react';

import TableRow from './Table_Row.tsx';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow', 
  component: TableRow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the TableRow',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable TableRow',
    },
    children: {
      control: 'text',
      description: 'Number of filled stars',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof TableRow> = {
  args: {
    disabled: false,
  },
};

export const disabled: StoryObj<typeof TableRow> = {
  args: {
    disabled: true,
  },
};
  
  

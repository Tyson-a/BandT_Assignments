import type { Meta, StoryObj } from '@storybook/react';

import TableHeader from './Table_Header.tsx';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader', 
  component: TableHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the TableHeader',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable TableHeader',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof TableHeader> = {
  args: {
    disabled: false,
  },
};

export const disabled: StoryObj<typeof TableHeader> = {
  args: {
    disabled: true,
  },
};
  
  

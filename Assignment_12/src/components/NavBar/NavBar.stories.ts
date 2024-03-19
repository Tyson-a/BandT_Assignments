import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar'; // Ensure the import path matches your file structure

const meta: Meta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the NavBar',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable interaction with the NavBar',
    },
    // Assuming other props might be here, but removed items as per instruction
  },
};

export default meta;

// Default state story
export const Default: StoryObj<typeof NavBar> = {
  args: {
    backgroundColor: 'lightgray', // Example default color
    disabled: false,
  },
};

// Disabled state story
export const Disabled: StoryObj<typeof NavBar> = {
  args: {
    backgroundColor: 'lightgray',
    disabled: true,
  },
};

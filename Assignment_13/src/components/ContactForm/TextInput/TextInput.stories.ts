import type { Meta, StoryObj } from '@storybook/react';
import TextInputComponent from './TextInput'; // Updated import to match the new component file

const meta: Meta<typeof TextInputComponent> = {
  title: 'Components/TextInput', // Updated title to reflect the new component
  component: TextInputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Updated argTypes to reflect TextInputComponent's props
  argTypes: {
    initialText: {
      control: 'text',
      description: 'Initial text value',
    },
    onTextChange: { action: 'valueChanged' }, // Updated action to match the prop function
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
  },
};

export default meta;

// Default state story for TextInputComponent
export const Default: StoryObj<typeof TextInputComponent> = {
  args: {
    initialText: 'Sample text', // Updated to show an example text
    disabled: false,
  },
};

// Disabled state story for TextInputComponent
export const Disabled: StoryObj<typeof TextInputComponent> = {
  args: {
    initialText: 'Sample text', // Kept consistent with the Default story
    disabled: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import NameInputComponent from './NameInput'; // Ensure the component import is correct

const meta: Meta<typeof NameInputComponent> = {
  title: 'Components/NameInput', // Updated title to reflect the new component
  component: NameInputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Updated argTypes to reflect NameInputComponent's props
  argTypes: {
    initialName: {
      control: 'text',
      description: 'Initial name value',
    },
    onNameChange: { action: 'nameChanged' }, // Updated action to match the prop function
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;

// Default state story for NameInputComponent
export const Default: StoryObj<typeof NameInputComponent> = {
  args: {
    initialName: 'John Doe', // Updated to show an example name
    disabled: false,
  },
};

// Disabled state story for NameInputComponent
export const Disabled: StoryObj<typeof NameInputComponent> = {
  args: {
    initialName: 'John Doe', // Kept consistent with the Default story
    disabled: true,
  },
};

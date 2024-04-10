import type { Meta, StoryObj } from '@storybook/react';
import EmailInputComponent from './EmailInput'; // Ensure the file name matches

const meta: Meta<typeof EmailInputComponent> = {
  title: 'Components/EmailInput', 
  component: EmailInputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Update argTypes to reflect EmailInputComponent's props
  argTypes: {
    initialEmail: {
      control: 'text',
      description: 'Initial email value',
    },
    onEmailChange: { action: 'emailChanged' },
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
  },
};

export default meta;

// Default state story for EmailInputComponent
export const Default: StoryObj<typeof EmailInputComponent> = {
  args: {
    initialEmail: 'example@example.com',
    disabled: false,
  },
};

// Disabled state story for EmailInputComponent
export const Disabled: StoryObj<typeof EmailInputComponent> = {
  args: {
    initialEmail: 'example@example.com',
    disabled: true,
  },
};

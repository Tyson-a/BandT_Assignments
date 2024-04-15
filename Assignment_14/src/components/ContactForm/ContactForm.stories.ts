// ContactForm.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    initialEmail: {
      control: 'text',
      description: 'Sets the initial email in the form'
    },
    initialBudget: {
      control: 'number',
      description: 'Sets the initial budget in the form'
    },
    initialMessage: {
      control: 'text',
      description: 'Sets the initial message in the form'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all inputs in the form'
    }
  }
};

export default meta;

// Default story: Empty form
export const Default: StoryObj<typeof ContactForm> = {
  args: {}
};

// Pre-filled story: Form with initial values
export const Prefilled: StoryObj<typeof ContactForm> = {
  args: {
    initialEmail: 'example@example.com',
    initialBudget: 500,
    initialMessage: 'Hello, I am interested in your services.'
  }
};

// Disabled state story: Form in disabled state
export const Disabled: StoryObj<typeof ContactForm> = {
  args: {
    initialEmail: 'disabled@example.com',
    initialBudget: 100,
    initialMessage: 'This is a disabled form.',
    disabled: true
  }
};

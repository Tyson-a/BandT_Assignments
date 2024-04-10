import type { Meta, StoryObj } from '@storybook/react';
import BudgetInputComponent from './BudgetInput.tsx';

const meta: Meta<typeof BudgetInputComponent> = {
  title: 'Components/BudgetInput', 
  component: BudgetInputComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialBudget: {
      control: 'number',
      description: 'Initial budget value',
    },
    onBudgetChange: { action: 'budgetChanged' },
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
  },
} 

export default meta;

// Default state story

export const Default: StoryObj<typeof BudgetInputComponent> = {
  args: {
    initialBudget: 100,
    disabled: false,
  },
};

export const disabled: StoryObj<typeof BudgetInputComponent> = {
  args: {
    initialBudget: 100,
    disabled: true,

  },
};


import type { Meta, StoryObj } from '@storybook/react';

import DropdownContent from './DropdownContent.tsx';

const meta: Meta<typeof DropdownContent> = {
  title: 'Components/DropdownContent', 
  component: DropdownContent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    isVisible: {
      control: 'boolean',
      description: 'Control visibility of DropdownContent',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the DropdownContent',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable DropdownContent interaction',
    },
    children: {
      control: 'text',
      description: 'Makes the Button Appear',
    },
    isPositionedAbsolutely: {
      control: 'boolean',
      description: 'Makes the Button Appear',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof DropdownContent> = {
  args: {
    disabled: false,
    isVisible: true,
    children: "This would be content",
    isPositionedAbsolutely: false,
    
  },
};

export const disabled: StoryObj<typeof DropdownContent> = {
  args: {
    disabled: true,
    isVisible: true,
    children: "This would be content",
    isPositionedAbsolutely: false,
  },
};
  
  

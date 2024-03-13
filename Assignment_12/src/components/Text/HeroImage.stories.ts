import type { Meta, StoryObj } from '@storybook/react';
import TextComponent from './Text.tsx';

const meta: Meta<typeof TextComponent> = {
  title: 'Components/TextComponent', 
  component: TextComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define the controls for your component's properties
    backgroundColor: {
      control: 'color',
      description: 'Background color of the Text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable Text',
    },
  },
};

export default meta;

// Default state story

export const Default: StoryObj<typeof TextComponent> = {
  args: {
    disabled: false,
    fontFamily: "Arial",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const disabled: StoryObj<typeof TextComponent> = {
  args: {
    disabled: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    fontFamily: "Abril-Fatface-Regular", 
  },
};


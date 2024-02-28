import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img'; // Adjust the path as necessary


const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Source of the image',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    width: {
      control: 'text',
      description: 'Width of the image',
    },
    height: {
      control: 'text',
      description: 'Height of the image',
    },
    quality: {
      control: 'number',
      description: 'Quality of the image',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the image',
    },
    disabled: {
      control: 'boolean',
      description: 'Grayscales the image if true',
    },
  },
};

export default meta;

// Example Story for Default Image
export const Default: StoryObj<typeof Img> = {
  args: {
    src: './OldMan.jpg', // Use the imported image as the source
    alt: 'An old man',
    width: '250px',
    height: '250px',
    quality: 75,
    backgroundColor: '#FFFFFF',
    disabled: false,
  },
};

// Additional Story to demonstrate the disabled state
export const Disabled: StoryObj<typeof Img> = {
  args: {
    src: './OldMan.jpg', 
    alt: 'An old man',
    width: '250px',
    height: '250px',
    quality: 75,
    backgroundColor: '#FFFFFF',
    disabled: true,
  },
};
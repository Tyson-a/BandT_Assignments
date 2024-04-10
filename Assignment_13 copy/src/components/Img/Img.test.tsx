import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img'; // Adjust the import path as necessary

describe('Img Component', () => {
  // Test default state
  it('renders without grayscale by default', () => {
    render(<Img width ="100%" height ="100%" src="test.jpg" alt="Test image" />);
    const imageContainer = screen.getByTestId('image-container'); // You need to add this data-testid to your ImageContainer
    expect(imageContainer).toHaveStyle('filter: none');
  });

  // Test disabled state
  it('applies grayscale filter when disabled', () => {
    render(<Img width ="100%" height ="100%" src="test.jpg" alt="Test image" disabled />);
    const imageContainer = screen.getByTestId('image-container');
    expect(imageContainer).toHaveStyle('filter: grayscale(100%)');
  });

  // Test image quality affects rendering
  it('renders with pixelated quality for low-quality images', () => {
    render(<Img width ="100%" height ="100%" src="low-quality-image.jpg" alt="Low Quality Image" quality={50} />);
    const imageElement = screen.getByRole('img', { name: /low quality image/i });
    expect(imageElement).toHaveStyle('image-rendering: pixelated');
  });

  // Test for Hero Image
  it('renders correctly as a Hero Image', () => {
    const heroSize = { width: '100%', height: '500px' }; // Example hero image size
    render(
      <Img
        src="hero-image.jpg"
        alt="Hero Image"
        width={heroSize.width}
        height={heroSize.height}
      />
    );
    const imageElement = screen.getByRole('img', { name: /hero image/i });
    expect(imageElement).toHaveAttribute('width', heroSize.width);
    expect(imageElement).toHaveAttribute('height', heroSize.height);
  });

  // Test for Grid Image
  it('renders correctly as a Grid Image', () => {
    const gridSize = { width: '200px', height: '200px' }; // Example grid image size
    render(
      <Img
        src="grid-image.jpg"
        alt="Grid Image"
        width={gridSize.width}
        height={gridSize.height}
      />
    );
    const imageElement = screen.getByRole('img', { name: /grid image/i });
    expect(imageElement).toHaveAttribute('width', gridSize.width);
    expect(imageElement).toHaveAttribute('height', gridSize.height);
  });
});

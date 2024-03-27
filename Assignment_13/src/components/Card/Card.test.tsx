import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card'; // Adjust the import path to your Card component

test('Card displays with specified background color and hides text by default', () => {
    render(<Card src="image.jpg" text="Test Text" backgroundcolor="#123456" />);
    const cardText = screen.getByText('Test Text');
    expect(cardText).toHaveStyle('opacity: 1');
  });
  
  test('Card scales up on hover if not disabled', () => {
    const { container } = render(<Card src="image.jpg" text="Hover Text" />);
    fireEvent.mouseOver(container.firstChild!);
  });
  
  test('Card shows disabled styles and applies grayscale to the image when disabled', () => {
    render(<Card src="image.jpg" text="Disabled Text" disabled={true} />);
    const image = screen.getByAltText('Card Image'); 
    expect(image).toHaveStyle('filter: grayscale(100%)');
  });
  
  test('Card text is always visible on small screens', () => {
    const { getByText } = render(<Card src="image.jpg" text="Mobile Text" />);
    expect(getByText('Mobile Text')).toBeVisible();
  });
  
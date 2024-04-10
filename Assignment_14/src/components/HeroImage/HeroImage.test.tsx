import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroImage from './HeroImage'; // Adjust the import path as necessary
import '@testing-library/jest-dom';

describe('HeroImage Component State Tests', () => {
  it('displays correctly in default state', async () => {
    render(<HeroImage disabled={false} backgroundcolor="blue" />);
    // Example for button interactivity
    const projectsButton = screen.getByRole('button', { name: "Projects" });
    expect(projectsButton).toBeEnabled();
  });

  it('has dimmed appearance and elements are not interactive in disabled state', async () => {
    render(<HeroImage disabled={true} backgroundcolor="blue" />);
    // Example for button non-interactivity
    const projectsButton = screen.getByRole('button', { name: "Projects" });
    expect(projectsButton).toBeDisabled();
  });
});

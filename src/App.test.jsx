// App.test.jsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders correct main heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 }));
  });

  it('renders the General Information heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 2, name: /Personal Information/i })
    ).toBeInTheDocument();
  });

  it('renders the three Education headings', () => {
    render(<App />);
    const educationHeadings = screen.getAllByRole('heading', {
      level: 2,
      name: /Education/i,
    });
    expect(educationHeadings.length).toBe(3);
  });

  it('renders the three Work Experience headings', () => {
    render(<App />);
    const workHeadings = screen.getAllByRole('heading', {
      level: 2,
      name: /Work Experience/i,
    });
    expect(workHeadings.length).toBe(3);
  });

  it('renders two Skills headings', () => {
    render(<App />);
    const skillHeadings = screen.getAllByRole('heading', {
      level: 2,
      name: /Skills/i,
    });
    expect(skillHeadings.length).toBe(2);
  });
});

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
      screen.getByRole('heading', { level: 2, name: /General Information/i })
    ).toBeInTheDocument();
  });

  it('renders the two Education headings', () => {
    render(<App />);
    const skillHeadings = screen.getAllByRole('heading', {
      level: 2,
      name: /Education/i,
    });
    expect(skillHeadings.length).toBe(2);
  });

  it('renders the two Work Experience headings', () => {
    render(<App />);
    const skillHeadings = screen.getAllByRole('heading', {
      level: 2,
      name: /Work Experience/i,
    });
    expect(skillHeadings.length).toBe(2);
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

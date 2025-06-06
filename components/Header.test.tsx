import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders the header with logo', () => {
    render(<Header />);

    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders all navigation menu items', () => {
    render(<Header />);

    expect(screen.getByTestId('nav-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-3')).toBeInTheDocument();
  });

  it('has correct header structure and styling', () => {
    render(<Header />);

    const header = screen.getByTestId('header');
    expect(header).toHaveAttribute('id', 'top');
    expect(header).toHaveClass('bg-blue-500');
  });

  it('renders navigation list with correct structure', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation');
    const list = nav.querySelector('ul');
    const listItems = nav.querySelectorAll('li');

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(4);
  });
});

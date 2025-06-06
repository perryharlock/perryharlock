import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders footer with correct structure', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('id', 'contact');
  });

  it('renders social media links', () => {
    render(<Footer />);

    const linkedinLink = screen.getByTestId('linkedin-link');
    const githubLink = screen.getByTestId('github-link');

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://uk.linkedin.com/pub/perry-harlock/12/1b7/170',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'me noreferrer');

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/perryharlock',
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'me noreferrer');
  });

  it('renders copyright with current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyright = screen.getByTestId('copyright');
    expect(copyright).toHaveTextContent(`© ${currentYear} Perry Harlock`);
  });

  it('renders back to top link', () => {
    render(<Footer />);

    const backToTopLink = screen.getByTestId('back-to-top');

    expect(backToTopLink).toHaveAttribute('href', '#top');
  });

  it('has accessible screen reader text for social links', () => {
    render(<Footer />);

    const linkedinScreenReader = screen.getByTestId('linkedin-link-sr');
    const githubScreenReader = screen.getByTestId('github-link-sr');

    expect(linkedinScreenReader).toBeInTheDocument();
    expect(githubScreenReader).toBeInTheDocument();
  });
});

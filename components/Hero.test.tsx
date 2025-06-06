import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
const mockUseInView = require('../hooks/useInView').useInView;

// Mock the useInView hook
jest.mock('../hooks/useInView', () => ({
  useInView: jest.fn(),
}));

describe('Hero', () => {
  const mockRef = { current: null };
  mockUseInView.mockReturnValue({ ref: mockRef, isInView: true });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders the main heading with Perry highlighted', () => {
    render(<Hero />);

    expect(screen.getByTestId('hero-heading')).toBeInTheDocument();
    expect(screen.getByText('Perry')).toHaveClass('text-yellow-500');
  });

  it('renders the subtitle with UI Developer role', () => {
    render(<Hero />);

    expect(screen.getByTestId('hero-sub-heading')).toBeInTheDocument();
  });

  it('renders highlighted skills in the description', () => {
    render(<Hero />);

    expect(screen.getByText('UI Developer')).toHaveClass('text-yellow-500');
    expect(screen.getByText('design')).toHaveClass('text-yellow-500');
    expect(screen.getByText('develop')).toHaveClass('text-yellow-500');
    screen.getAllByText('CSS').forEach((element) => {
      expect(element).toHaveClass('text-yellow-500');
    });
    expect(screen.getByText('HTML')).toHaveClass('text-yellow-500');
    expect(screen.getByText('Responsive Design.')).toHaveClass(
      'text-yellow-500',
    );
  });

  it('renders Perry image with correct attributes', () => {
    render(<Hero />);

    const image = screen.getByAltText('A smiling Perry Harlock!');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/perry.webp');
    expect(image).toHaveAttribute('width', '689');
    expect(image).toHaveAttribute('height', '674');
  });

  it('renders scroll down link with accessibility text', () => {
    render(<Hero />);

    const scrollLink = screen.getByTestId('scroll-down-link');
    const scrollLinkA11yText = screen.getByTestId('scroll-down-link-sr');
    expect(scrollLinkA11yText).toHaveTextContent(
      'Click to jump to the portfolio section',
    );
    expect(scrollLink).toHaveAttribute('href', '#portfolio');
  });
});

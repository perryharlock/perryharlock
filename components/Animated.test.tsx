import { render, screen } from '@testing-library/react';
import { AnimatedElement } from './Animated';
const mockUseInView = require('../hooks/useInView').useInView;

// Mock the useInView hook
jest.mock('../hooks/useInView', () => ({
  useInView: jest.fn(),
}));

describe('AnimatedElement', () => {
  const mockRef = { current: null };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children correctly', () => {
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: false });

    render(<AnimatedElement>Test content</AnimatedElement>);

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default div element', () => {
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: false });

    const { container } = render(
      <AnimatedElement>Test content</AnimatedElement>,
    );

    expect(screen.getByTestId('animated-element').nodeName).toBe('DIV');
  });

  it('renders with custom element', () => {
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: false });

    const { container } = render(
      <AnimatedElement element="section">Test content</AnimatedElement>,
    );

    expect(screen.getByTestId('animated-element').nodeName).toBe('SECTION');
  });

  it('applies default animation class when in view', () => {
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: true });

    const { container } = render(
      <AnimatedElement>Test content</AnimatedElement>,
    );

    expect(screen.getByTestId('animated-element')).toHaveClass('fade-9');
  });

  it('applies custom animation class when in view', () => {
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: true });

    const { container } = render(
      <AnimatedElement animationClass="custom-animation">
        Test content
      </AnimatedElement>,
    );

    expect(screen.getByTestId('animated-element')).toHaveClass(
      'custom-animation',
    );
  });

  it('does not apply animation class when not in view', () => {
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: false });

    const { container } = render(
      <AnimatedElement>Test content</AnimatedElement>,
    );

    expect(screen.getByTestId('animated-element')).not.toHaveClass('fade-9');
    expect(screen.getByTestId('animated-element')).toHaveClass('will-animate');
  });

  it('applies additional classes', () => {
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: false });

    const { container } = render(
      <AnimatedElement classes="custom-class">Test content</AnimatedElement>,
    );

    expect(screen.getByTestId('animated-element')).toHaveClass(
      'custom-class',
      'will-animate',
    );
  });

  it('removes no-js class from body on mount', () => {
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: false });

    render(<AnimatedElement>Test content</AnimatedElement>);

    expect(document.body).not.toHaveClass('no-js');
  });

  it('only animates once when in view', () => {
    const { rerender } = render(
      <AnimatedElement>Test content</AnimatedElement>,
    );

    // First render - not in view
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: false });
    rerender(<AnimatedElement>Test content</AnimatedElement>);

    // Second render - in view
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: true });
    rerender(<AnimatedElement>Test content</AnimatedElement>);

    // Third render - out of view again
    mockUseInView.mockReturnValue({ ref: mockRef, isInView: false });
    rerender(<AnimatedElement>Test content</AnimatedElement>);

    // Should still have animation class
    expect(screen.getByText('Test content')).toHaveClass('fade-9');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestimonialItem } from './TestimonialItem';
import { useInView } from '../hooks/useInView';

// Mock the useInView hook
jest.mock('../hooks/useInView', () => ({
  useInView: jest.fn(),
}));

describe('TestimonialItem', () => {
  const mockRef = { current: null };
  const mockUseInView = useInView as jest.MockedFunction<typeof useInView>;
  mockUseInView.mockReturnValue({ ref: mockRef, isInView: true });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockProps = {
    index: 0,
    text: ['First line', 'Second line', 'Third line'],
  };

  it('renders testimonial text correctly', () => {
    render(<TestimonialItem {...mockProps} />);

    expect(
      screen.getByText((content) => content.includes('First line')),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('Second line')),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('Third line')),
    ).toBeInTheDocument();
  });

  it('adds line breaks between text segments except for the last one', () => {
    const { container } = render(<TestimonialItem {...mockProps} />);

    const h4Element = container.querySelector('h4');
    expect(h4Element).toBeInTheDocument();

    const brElements = container.querySelectorAll('br');
    expect(brElements).toHaveLength(2); // Should have 2 br tags for 3 text segments
  });

  it('applies correct animation class for odd index (left animation)', () => {
    const { container } = render(<TestimonialItem index={0} text={['Test']} />);

    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('md:fade-in-left-11-delay-2');
  });

  it('applies correct animation class for even index (right animation)', () => {
    const { container } = render(<TestimonialItem index={1} text={['Test']} />);

    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('md:fade-in-right-11');
  });

  it('renders as a list item element', () => {
    const { container } = render(<TestimonialItem {...mockProps} />);

    expect(container.firstChild?.nodeName).toBe('LI');
  });

  it('applies all required CSS classes', () => {
    const { container } = render(<TestimonialItem {...mockProps} />);

    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('fade-9');
    expect(listItem).toHaveClass('bg-white');
    expect(listItem).toHaveClass('relative');
  });

  it('handles single text item without line breaks', () => {
    const { container } = render(
      <TestimonialItem index={0} text={['Single line']} />,
    );

    expect(screen.getByText('Single line')).toBeInTheDocument();

    const brElements = container.querySelectorAll('br');
    expect(brElements).toHaveLength(0);
  });

  it('handles empty text array', () => {
    const { container } = render(<TestimonialItem index={0} text={[]} />);

    const h4Element = container.querySelector('h4');
    expect(h4Element).toBeInTheDocument();
    expect(h4Element?.textContent).toBe('');
  });
});

import { render, screen } from '@testing-library/react';
import { CVItem } from './CVItem';
import { useInView } from '../hooks/useInView';

// Mock the useInView hook
jest.mock('../hooks/useInView', () => ({
  useInView: jest.fn(),
}));

const mockProps = {
  index: 0,
  employer: 'Test Company',
  role: 'Software Engineer',
  date: '2020 - 2023',
  linkUrl: 'https://test.com',
  linkText: 'Visit Website',
  description: ['First description', 'Second description'],
};

describe('CVItem', () => {
  const mockRef = { current: null };
  const mockUseInView = useInView as jest.MockedFunction<typeof useInView>;
  mockUseInView.mockReturnValue({ ref: mockRef, isInView: true });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders all content correctly', () => {
    render(<CVItem {...mockProps} />);

    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getAllByText('Software Engineer')).toHaveLength(2); // Mobile and desktop versions
    expect(screen.getAllByText('2020 - 2023')).toHaveLength(2); // Mobile and desktop versions
    expect(screen.getAllByText('Visit Website')).toHaveLength(2); // Mobile and desktop versions
    expect(screen.getByText('First description')).toBeInTheDocument();
    expect(screen.getByText('Second description')).toBeInTheDocument();
  });

  it('applies correct styling for first item', () => {
    const { container } = render(<CVItem {...mockProps} index={0} />);
    const listItem = container.querySelector('li');

    expect(listItem).toHaveClass('mt-0', 'md:mt-0');
  });

  it('applies correct styling for last item', () => {
    const { container } = render(<CVItem {...mockProps} isLast />);
    const listItem = container.querySelector('li');

    expect(listItem).toHaveClass('!mb-0');
  });

  it('applies odd item styling correctly', () => {
    const { container } = render(<CVItem {...mockProps} index={1} />);

    const contentElement = container.querySelector('[class*="md:col-start-7"]');
    expect(contentElement).toBeInTheDocument();
  });

  it('applies even item styling correctly', () => {
    const { container } = render(<CVItem {...mockProps} index={0} />);

    const contentElement = container.querySelector(
      '[class*="md:col-span-6"]:not([class*="md:col-start-7"])',
    );
    expect(contentElement).toBeInTheDocument();
  });

  it('renders external links with correct attributes', () => {
    render(<CVItem {...mockProps} />);

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://test.com');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });

  it('renders multiple description paragraphs', () => {
    const multipleDescriptions = ['First para', 'Second para', 'Third para'];
    render(<CVItem {...mockProps} description={multipleDescriptions} />);

    expect(screen.getByText('First para')).toBeInTheDocument();
    expect(screen.getByText('Second para')).toBeInTheDocument();
    expect(screen.getByText('Third para')).toBeInTheDocument();
  });

  it('renders diamond indicator element', () => {
    const { container } = render(<CVItem {...mockProps} />);

    const diamond = container.querySelector(
      '.rotate-45.w-\\[50px\\].h-\\[50px\\]',
    );
    expect(diamond).toBeInTheDocument();
  });
});

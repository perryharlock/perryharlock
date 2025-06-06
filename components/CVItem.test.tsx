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
    render(<CVItem {...mockProps} index={0} />);
    const listItem = screen.getByTestId('cv-item-0');

    expect(listItem).toHaveClass('mt-0', 'md:mt-0');
  });

  it('applies correct styling for last item', () => {
    render(<CVItem {...mockProps} isLast />);
    const listItem = screen.getByTestId('cv-item-0');

    expect(listItem).toHaveClass('!mb-0');
  });

  it('applies odd item styling correctly', () => {
    render(<CVItem {...mockProps} index={1} />);
    const content = screen.getByTestId('cv-item-content-1');
    expect(content).toHaveClass('md:col-start-7');
  });

  it('applies even item styling correctly', () => {
    render(<CVItem {...mockProps} index={0} />);
    const content = screen.getByTestId('cv-item-content-0');
    expect(content).not.toHaveClass('md:col-start-7');
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
    render(<CVItem {...mockProps} />);

    const diamond = screen.getByTestId('diamond');
    expect(diamond).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { PortfolioItem } from './PortfolioItem';
import { useInView } from '../hooks/useInView';

// Mock the useInView hook
jest.mock('../hooks/useInView', () => ({
  useInView: jest.fn(),
}));

const mockProps = {
  index: 0,
  title: 'Test Project',
  description: 'Test Description',
  linkUrl: 'https://example.com',
  linkText: 'View Project',
  skills: ['React', 'TypeScript', 'Jest'],
  imageSrc: '/test-image.jpg',
  imageAlt: 'Test Image',
  imageWidth: 800,
  imageHeight: 600,
};

describe('PortfolioItem', () => {
  const mockRef = { current: null };
  const mockUseInView = useInView as jest.MockedFunction<typeof useInView>;
  mockUseInView.mockReturnValue({ ref: mockRef, isInView: true });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders the portfolio item with all props', () => {
    render(<PortfolioItem {...mockProps} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('View Project')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('applies first item styles when index is 0', () => {
    const { container } = render(<PortfolioItem {...mockProps} />);
    const listItem = container.querySelector('li');

    expect(listItem).toHaveClass('pt-[30px]');
  });

  it('applies odd item styles to odd position elements', () => {
    const { container } = render(<PortfolioItem {...mockProps} index={1} />);
    const listItem = container.querySelector('li');

    expect(listItem).toHaveClass('bg-grey-100');
    expect(listItem).toHaveClass('text-right');
  });

  it('applies before content styles when not first item', () => {
    const { container } = render(<PortfolioItem {...mockProps} index={1} />);
    const listItem = container.querySelector('li');

    expect(listItem).toHaveClass("before:content-['']");
    expect(listItem).toHaveClass('before:block');
  });

  it('renders skills list correctly', () => {
    render(<PortfolioItem {...mockProps} />);

    const skillsList = screen.getByRole('list');
    const skillItems = screen.getAllByRole('listitem');

    expect(skillsList).toBeInTheDocument();
    expect(skillItems).toHaveLength(4); // 3 skills + 1 main li
  });

  it('passes correct animation classes for even elements', () => {
    render(<PortfolioItem {...mockProps} index={0} />);

    const animatedElements = screen.getAllByTestId('animated-element');
    expect(animatedElements[0]).toHaveClass('fade-9 lg:fade-in-left');
    expect(animatedElements[1]).toHaveClass('fade-9 lg:fade-in-right');
  });

  it('passes correct animation classes for odd elements', () => {
    render(<PortfolioItem {...mockProps} index={1} />);

    const animatedElements = screen.getAllByTestId('animated-element');
    expect(animatedElements[0]).toHaveClass('fade-9 lg:fade-in-right');
    expect(animatedElements[1]).toHaveClass('fade-9 lg:fade-in-left');
  });

  it('renders image with correct props', () => {
    render(<PortfolioItem {...mockProps} />);

    const image = screen.getByAltText('Test Image');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('width', '800');
    expect(image).toHaveAttribute('height', '600');
  });
});

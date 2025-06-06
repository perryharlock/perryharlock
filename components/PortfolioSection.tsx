import { PortfolioItem } from './PortfolioItem';
import { Section } from './Section';
import portfolioItems from '../data/portfolio.json';

export const PortfolioSection = () => {
  return (
    <Section id="portfolio" title="Portfolio" classNames="print:hidden">
      <ul>
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...{ ...item, index }} />
        ))}
      </ul>
    </Section>
  );
};

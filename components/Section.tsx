interface SectionProps {
  title: string;
  id?: string;
  children: React.ReactNode;
  classNames?: string;
}

export const Section = ({ title, children, id, classNames }: SectionProps) => {
  return (
    <section data-testid="section" id={id} className={classNames}>
      <div className="container-auto">
        <h3 className="font-bold text-[50px] leading-[50px] my-[30px] mx-0 text-center md:text-[104px] md:leading-[104px] md:mt-[60px] md:mb-[90px]">
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
};

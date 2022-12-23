import classNames from 'classnames';
import { ReactNode } from 'react';

interface SectionProps {
  sectionId: string;
  sectionTitle?: string;
  noPadding?: boolean;
  className?: string;
  children?: ReactNode
}

function Section({ sectionId, sectionTitle, noPadding, className, children }: SectionProps) {
  return (
    <section className={classNames(className, {'px-8 sm:px-16 py-16': !noPadding})} id={sectionId}>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>
        {children}
      </div>
    </section>
  )
}

export default Section;
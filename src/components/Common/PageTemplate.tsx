import React, { ReactNode } from 'react';
import Header from './Header';

type PageTemplateProps = {
  children: ReactNode;
}

const PageTemplate = ({
  children,
}: PageTemplateProps): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default PageTemplate;
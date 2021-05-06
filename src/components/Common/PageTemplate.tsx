import { Fragment, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type PageTemplateProps = {
  children: ReactNode;
}

const PageTemplate = ({
  children,
}: PageTemplateProps): JSX.Element => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}

export default PageTemplate;
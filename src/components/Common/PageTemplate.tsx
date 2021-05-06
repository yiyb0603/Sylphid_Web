import { Fragment, ReactNode } from 'react';
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
      {/* <Footer /> */}
    </Fragment>
  );
}

export default PageTemplate;
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
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
      <div css={pageChildren}>
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

const pageChildren: SerializedStyles = css`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
`;

export default PageTemplate;
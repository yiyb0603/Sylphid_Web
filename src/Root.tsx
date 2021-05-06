import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from 'components/App';

const Root = (): JSX.Element => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Root;
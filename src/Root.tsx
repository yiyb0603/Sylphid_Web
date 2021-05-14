import { StrictMode } from 'react';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { historySingleton } from 'lib/singleton/history';
import App from 'components/App';

const Root = (): JSX.Element => {
  return (
    <RecoilRoot>
      <Router history={historySingleton}>
        <StrictMode>
          <App />
        </StrictMode>
      </Router>
    </RecoilRoot>
  );
};

export default Root;
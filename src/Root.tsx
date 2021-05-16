import { StrictMode, Suspense } from 'react';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { historySingleton } from 'lib/singleton/history';
import App from 'components/App';

const Root = (): JSX.Element => {
  return (
    <RecoilRoot>
      <Router history={historySingleton}>
        <Suspense fallback={null}>
          <StrictMode>
            <App />
          </StrictMode>
        </Suspense>
      </Router>
    </RecoilRoot>
  );
};

export default Root;
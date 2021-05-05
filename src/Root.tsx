import { StrictMode } from 'react';
import App from 'components/App';

const Root = (): JSX.Element => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export default Root;
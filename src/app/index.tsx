import { render } from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/theme';
import { ErrorBoundary as ErrorBoundaryProvider } from './providers/ErrorBoundaryProvider';
import App from 'app/App';

import 'shared/i18n/config';

render(
  <Suspense fallback="Загрузка...">
    <ErrorBoundaryProvider>
      <BrowserRouter basename="/">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundaryProvider>
  </Suspense>,
  document.getElementById('root')
);

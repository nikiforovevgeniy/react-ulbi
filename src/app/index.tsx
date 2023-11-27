import { render } from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/theme';
import App from 'app/App';

import 'shared/i18n/config';

render(
  <Suspense fallback="Загрузка...">
    <BrowserRouter basename="/">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);

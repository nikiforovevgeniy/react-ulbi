import { lazy } from 'react';

export const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error
        import('./MainPage').then(resolve);
      }, 1500);
    })
);

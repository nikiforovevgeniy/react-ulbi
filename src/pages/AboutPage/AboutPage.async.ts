import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () =>
    await new Promise(resolve => {
      setTimeout(() => {
        // @ts-expect-error
        import('./AboutPage').then(resolve);
      }, 1500);
    })
);

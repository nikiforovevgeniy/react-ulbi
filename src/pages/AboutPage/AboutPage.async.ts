import { lazy } from 'react';

export default lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        import('./AboutPage').then(resolve);
      }, 1500);
    })
);

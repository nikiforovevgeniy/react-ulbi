import { lazy } from 'react';

export default lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        import('./MainPage').then(resolve);
      }, 1500);
    })
);

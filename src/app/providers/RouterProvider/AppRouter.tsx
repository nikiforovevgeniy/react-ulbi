import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './routes';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routerConfig.map((route, i) => {
            return <Route key={i} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

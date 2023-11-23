import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './routes';

export const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback="Загрузка...">
        <Routes>
          {routerConfig.map((route, i) => {
            return <Route key={i} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

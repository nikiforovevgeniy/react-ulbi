import cls from './PageLoader.module.scss';
import { FC } from 'react';
import { classNames } from 'shared/helpers';
import { Loader } from 'shared/ui/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

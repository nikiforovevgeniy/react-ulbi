/* eslint-disable i18next/no-literal-string */
import cls from './PageError.module.scss';
import { FC } from 'react';
import { classNames } from 'shared/helpers';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div>Проризошла непредвиденная ошибка, попробуйте перезагрузить страницу</div>
      <button onClick={reloadPage}>Перезагрузить страницу</button>
    </div>
  );
};

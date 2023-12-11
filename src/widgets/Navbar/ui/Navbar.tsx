import cls from './Navbar.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers';
import { AppLink } from 'shared/ui/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className, children }) => {
  const { t } = useTranslation('menu');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div>{children}</div>
      <div className={cls.links}>
        <AppLink to="/">{t('Главная')}</AppLink>
        <AppLink to="/about">{t('О нас')}</AppLink>
      </div>
    </div>
  );
};

import cls from './Navbar.module.scss';
import { FC } from 'react';
import { classNames } from 'shared/helpers';
import { AppLink } from 'shared/ui/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className, children }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div>{children}</div>
      <div className={cls.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};

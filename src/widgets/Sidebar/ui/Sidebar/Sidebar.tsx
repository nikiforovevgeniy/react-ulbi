import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { FC, useState } from 'react';
import { classNames } from 'shared/helpers';
import { LangSwitcher } from 'shared/i18n';
import { ThemeSwitcher } from 'shared/theme';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation('translation');

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={toggleCollapse}>{t('Перевести')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

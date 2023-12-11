import { FC } from 'react';
import { classNames } from 'shared/helpers';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button className={classNames('', {}, [className])} onClick={toggleLang}>
      {t('Язык')}
    </Button>
  );
};

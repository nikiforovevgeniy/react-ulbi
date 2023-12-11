/* eslint-disable i18next/no-literal-string */
import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/helpers';

interface BugButtonProps {
  className?: string;
}

export const BugButton: FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button className={classNames('', {}, [className])} onClick={onThrow}>
      Пробросить ошибку
    </button>
  );
};

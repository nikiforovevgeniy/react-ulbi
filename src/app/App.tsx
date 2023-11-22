import './styles/index.scss';
import { classNames } from 'shared/helpers';
import { useTheme } from 'shared/theme';
import { AppRouter } from './providers/RouterProvider';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar>
        <ThemeSwitcher />
      </Navbar>
      <AppRouter />
    </div>
  );
};

export default App;

import './styles/index.scss';
import { classNames } from 'shared/helpers';
import { useTheme } from 'shared/theme';
import { AppRouter } from './providers/RouterProvider';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};

export default App;

import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/helpers';
import { useTheme } from 'shared/theme';
import { AppRouter } from './providers/RouterProvider';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>

      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>

      <AppRouter />
    </div>
  );
};

export default App;

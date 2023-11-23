import './styles/index.scss';
import { classNames } from 'shared/helpers';
import { useTheme } from 'shared/theme';
import { AppRouter } from './providers/RouterProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;

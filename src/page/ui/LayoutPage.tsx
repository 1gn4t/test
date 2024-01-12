import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/Header';

export const LayoutPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

import { Header } from '@components/Header';
import { Route, Routes } from 'react-router-dom';
import { ROUTES_ITEMS } from '@data/routesItems';
import './styles.css';

export const CommonPage = () => {
  return (
    <div className="commonPageContainer">
      <Header />
      <Routes>
        {ROUTES_ITEMS.map((item) => (
          <Route key={item.title} path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
};

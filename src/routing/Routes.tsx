import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from 'src/app/layout/Layout';
import { AppRoute } from './AppRoutes.enum';
import { Home } from 'src/app/home/Home';
import { Login } from 'src/app/login/Login';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<Layout />}>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={'*'} element={<h1>not found</h1>} />
    </Route>,
  ),
);

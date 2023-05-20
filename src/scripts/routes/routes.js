import Home from '../views/pages/home';
import Favorite from '../views/pages/favorites';
import Detail from '../views/pages/detail-restaurant';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/restaurant/:id': Detail,
};

export default routes;

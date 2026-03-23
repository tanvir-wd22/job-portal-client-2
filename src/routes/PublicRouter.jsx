import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Signin from '../pages/Signin';

let PublicRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
    ],
  },
]);

export default PublicRouter;

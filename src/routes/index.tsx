import Home from './Home';
import About from './About';
import Contact from './Contact';

interface IRoute {
  path: string;
  element: JSX.Element;
}

const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

export default routes;

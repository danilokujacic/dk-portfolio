import './styles/globals.css';
import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';
import Routes from './routes';
import Layout from './components/Layout';
import { DeviceContext } from './shared/screenSize';
import { useEffect, useState } from 'react';

const App = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        setScreenSize(window.innerWidth)
      },500)
    })
  }, [])
  
  return (
    <DeviceContext.Provider value={{screenSize, isMobile: screenSize < 768}}>
      <BrowserRouter>
        <Layout>
          <DOMRoutes>
            {Routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </DOMRoutes>
        </Layout>
      </BrowserRouter>
    </DeviceContext.Provider>
  );
};

export default App;

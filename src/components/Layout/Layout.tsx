import { FunctionComponent } from 'react';
import Header from './Header';


const Layout: FunctionComponent<{ children: JSX.Element }> = ({ children }) => {
 
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

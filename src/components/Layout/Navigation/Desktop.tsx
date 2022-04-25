import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import links from './links';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className='p-0 flex space-x-2 list-none'>
        {links.map((link) => (
          <li key={link.to}>
            <Link
              className={`block ${
                location.pathname === link.to ? 'text-blue-400' : ''
              } relative px-4 text-center text-l transition-colors duration-75 font-semibold hover:text-gray-500`}
              to={link.to}>
              {link.label}
              {location.pathname === link.to ? (
                <motion.div
                  className={`bg-blue-400 ${styles['underline']} rounded-sm`}
                  layoutId='underline'
                />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

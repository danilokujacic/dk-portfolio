import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import links from './links';
const variants = {
  fadeIn: {
    opacity: 1,
    width: '100%',
    height: '100%',
  },
  fadeOut: {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  },
};

const Navigation: FunctionComponent = () => {
  const location = useLocation();
  const [display, setDisplay] = useState<boolean>(false);

  const handleClose = () => {
    setDisplay(false);
  };
  const handleOpen = () => {
    setDisplay(true);
  };
  return (
    <div>
      <button onClick={handleOpen}>
        <FontAwesomeIcon size='2x' className="text-black hover:text-gray-500" icon={faBars} />
      </button>
      <AnimatePresence exitBeforeEnter>
        {display && (
          <motion.nav
            initial='fadeOut'
            animate='fadeIn'
            exit='fadeOut'
            variants={variants}
            className='fixed z-40 top-0 overflow-hidden left-0 right-0 bottom-0 bg-blue-300'>
            <button
              onClick={handleClose}
              className='absolute right-4 top-4 text-white'>
              <FontAwesomeIcon size='3x' icon={faClose} />
            </button>
            <ul className='p-0 flex flex-col space-y-6 list-none absolute w-2/4 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'>
              {links.map((link) => (
                <motion.li key={link.to}>
                  <Link
                    className={`block px-4 ${!display ? 'opacity-0' : ''} ${
                      location.pathname === link.to
                        ? 'scale-150 text-white'
                        : 'text-yellow-300'
                    } transition-all hover:scale-150 text-center text-3xl  duration-75 font-semibold  hover:text-white`}
                    to={link.to}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;

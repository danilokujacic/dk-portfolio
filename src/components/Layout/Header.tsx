import { FunctionComponent, useEffect, useRef} from 'react';
import { useScreen } from '../../shared/screenSize';
import NavigationDesktop from './Navigation/Desktop';
import NavigationMobile from './Navigation/Mobile';

const Header: FunctionComponent = () => {
    const { screenSize } = useScreen();
    const headerReference = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const scrollEvent = () => {
            const {current} = headerReference;
            if(!current){
                return;
            }
            if(window.scrollY >= 100){
                current.classList.remove('scale-y-1');
                current.classList.add('scale-y-0')
            }
            
            if(window.scrollY < 100){
                current.classList.remove('scale-y-0');
                current.classList.add('scale-y-1')
            }
        }
        window.addEventListener('scroll', scrollEvent);
    },[]);
    return <header ref={headerReference} className='w-full z-50 bg-white box-border transition-all fixed top-0 left-0 px-5 py-7 flex overflow-hidden justify-between origin-top'>
            <div className=''>Logo</div>
            {screenSize >= 768 ? (
                <NavigationDesktop />
            ) : (
                <NavigationMobile />
            )}
        </header>
}

export default Header
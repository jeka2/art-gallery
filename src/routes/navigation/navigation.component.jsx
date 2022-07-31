import './navigation.styles.scss';

import { Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return(
      <>
        <div className='navigation-container'>
            <div className='navigation-section logo-section'>
                LOGO
            </div>
            <div className='navigation-section links-section'>
                <span className='home-link navigation-link'>HOME</span>
                <span className='browse-link navigation-link'>BROWSE</span>
                <span className='about-link navigation-link'>ABOUT</span>
                <span className='contact-link navigation-link'>CONTACT</span>
            </div>
            <div className='navigation-section media-links-section'>
                HELLO
            </div>
        </div>
        <Outlet />
      </>
    )
}

export default Navigation;
import './navigation.styles.scss';

import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return(
      <>
        <div className='navigation-container'>
            <div className='navigation-section logo-section'>
                LOGO
            </div>
            <div className='navigation-section links-section'>
                <Link className='home-link navigation-link' to='/'>HOME</Link>
                <Link className='browse-link navigation-link' to='/browse'>BROWSE</Link>
                <Link className='about-link navigation-link' to='sign-in'>SIGN IN</Link>
                <Link className='contact-link navigation-link' to='checkout'>CHECKOUT</Link>
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
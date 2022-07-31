import './home.styles.scss';

import homeSplash from '../../images/home-splash.jpg'

const Home = () => {
    return(
        <>
            <img src={homeSplash} alt='home-spash' className='home-image' />
            <div className='home-container'>
                <h1>HOME</h1>
            </div>
        </>
    )
}

export default Home;
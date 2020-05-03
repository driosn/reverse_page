import React from 'react';
import './styles/HomePage.css';
import ReverseLogo from '../../assets/images/reverse_icon.png';
import Directory from './components/directory/directory.component';

const HomePage = () => {
    return(
    <div className="backview">
        <div className="homeview">     
            <div id="padre" className="padre">
                <img src={ReverseLogo} className='log' alt="LogoPage"/>
                <h5 className="subtitle">Conquista el mundo con tus habilidades</h5>
            </div> 
            <Directory/>
    </div>
    </div>
    );
}
export default HomePage;
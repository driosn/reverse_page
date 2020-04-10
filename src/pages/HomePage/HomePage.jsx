import React from 'react';

import './styles/HomePage.css';

import Logo from '../../assets/images/logo.png';
import Cripto from '../../assets/images/lock3.png';
import Estegano from '../../assets/images/stenography.png';
import Sql from '../../assets/images/sql.png';
import Analisis from '../../assets/images/analisis_forense.png';

const HomePage = () => {
    return(
    <div className="backview">
        <div className="homeview">     
            <div id="padre" className="padre">
                <img src={Logo} className='log' alt="LogoPage"/>
                <h2 className="title">Reverse</h2>
                <h5 className="subtitle">Conquista el mundo con tus habilidades</h5>
            </div> 
         <center>
            <div className="row m-0 justify-content-center aling-items-center">
                
                
            <a id="link" href="/criptografia" target="">
                <div className="column">
                    <img className='border' src={Cripto} alt="Analisis de Trafico"/>
                    <h6 className="kTitle">Criptografia</h6>    
                    </div>
            </a>

            <a id="link" href="/esteganografia" target="">
                <div className="column">
                    <img className='border' src={Estegano}  alt="Analisis de Trafico"/>
                    <h6 className="kTitle">Esteganografia</h6>      
                </div>
            </a>

            <a id="link" href="/analisisdetrafico" target="">
                <div className="column">
                    <img className='border' src={Analisis}  alt="Analisis de Trafico"/>
                    <h6 className="kTitle">Analisis<br/>de Tráfico</h6>                
                </div> 
            </a>
            
            <a id="link" href="/sqlIngection" target="">
                <div className="column">
                    <img className='border' src={Sql}  alt="Analisis de Trafico"/>
                    <h6 className="kTitle">SQL<br/>Injection</h6>
        
                </div> 
            </a>
                </div>
        </center>                                            
    </div>
    </div>
    );
}
export default HomePage;
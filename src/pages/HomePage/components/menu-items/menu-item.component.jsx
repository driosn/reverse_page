import React from 'react';
import './menu-item.style.css';
import Cripto from '../../../../assets/images/lock3.png';
const MenuItem = ({id, title, linkUrl, imageUrl}) => (
    <a id={id} href={linkUrl} target="">
        <div className="column">
            <img className='border' src={imageUrl} alt="Analisis de Trafico"/>
            <h6 className="kTitle">{title}</h6>    
        </div>
    </a>
);
export default MenuItem;
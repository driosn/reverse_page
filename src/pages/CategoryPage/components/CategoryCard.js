import React from 'react';

import '../styles/CategoryCard.css';

import Lock from '../../../assets/images/lock3.png';

class CategoryCard extends React.Component {

    render() {
        return(
            <a href="#" className="link-card">
                <div className="card-shape px-4 py-4">
                    <div className="img-container">
                        <img id="category-img" src={Lock}/>
                    </div>
                    <div className="text-container ml-4">
                        <span id="category-title"><h4>Criptografia</h4></span>
                        <span id="small-description"><h5>Encripta o desencripta datos</h5></span>
                        <span id="problems-quantity"><h5>100 Problemas</h5></span>
                    </div>
                </div>
            </a>
        );
    }

}

export default CategoryCard;
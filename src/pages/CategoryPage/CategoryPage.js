import React from 'react';

import './styles/CategoryPage.css';

import ReverseTitle from '../../components/ReverseTitle';
import CategoryCard from './components/CategoryCard';

class CategoryPage extends React.Component {

    render() {
        return(
            <div>
                <div className="container py-4">
                    <div className="row">
                        <div className="col mr-auto">
                            <ReverseTitle titleName="Categorias"/>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col card-container"><CategoryCard/></div>
                        <div className="col card-container"><CategoryCard/></div>
                        <div className="col card-container"><CategoryCard/></div>
                        <div className="col card-container"><CategoryCard/></div>    
                    </div>        
                </div>            
            </div>
        );
    }

}

export default CategoryPage;


import React from 'react';

import './styles/NavbarItem.css';

class NavbarItem extends React.Component { 
    render() {
        return(
            <div className="container navbar-item ml-auto">
                <h5>{this.props.itemName}</h5>
                <img src={this.props.itemIcon} alt=""/>
            </div>        
        );
    }
}

export default NavbarItem;
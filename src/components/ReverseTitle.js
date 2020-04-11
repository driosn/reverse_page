import React from 'react';

import './styles/ReverseTitle.css';

class ReverseTitle extends React.Component {

    render() {
        return(
            <div>
                <h1 className="title-name">{this.props.titleName}</h1>
            </div>
        );
    }

}

export default ReverseTitle;
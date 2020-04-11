import React from 'react';

class ReverseDropdown extends React.Component {

    render() {
        return(
            <div class="dropdown show">
                <a class="btn btn-secondary dropdown-toggle reverse-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        );  
    }

}

export default ReverseDropdown;
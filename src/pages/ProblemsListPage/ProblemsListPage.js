import React from 'react';

import ReverseDropdown from '../../components/ReverseDropdown';

import './styles/ProblemsListPage.css';
import ProblemsTable from './components/ProblemsTable';

class ProblemsListPage extends React.Component {

    render() {
        return(
            <div className="main">
                <div className="container py-5">
                    <div className="row top-options">
                        <div className="col">
                            <h1 className="category-name">Criptografia</h1>
                        </div>
                        <div className="col">
                            <ReverseDropdown/>
                        </div>
                        <div className="col">
                            <ReverseDropdown/>
                        </div>
                    </div>

                    <div className="problems-list">
                        <ProblemsTable/>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProblemsListPage;
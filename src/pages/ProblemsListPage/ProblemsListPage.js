import React from 'react';

import './styles/ProblemsListPage.css';

import ReverseDropdown from '../../components/ReverseDropdown';
import ProblemsTable from './components/ProblemsTable';
import ReverseTitle from '../../components/ReverseTitle';

class ProblemsListPage extends React.Component {

    render() {
        return(
            <div className="main">
                <div className="container py-5">
                    <div className="row top-options">
                        <div className="col">
                            <ReverseTitle titleName="Criptografía"/>
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
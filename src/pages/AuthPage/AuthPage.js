import React from 'react';
import './styles/AuthPage.css';

import ReverseLogo from '../../assets/images/reverse_icon_light.svg';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

class AuthPage extends React.Component {

    render() {
        return (
            <div className="main-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 reverse-info">
                            <div className="main-info">
                                <img src={ReverseLogo} alt="Reverse CTF Page"/>
                                <h5>Conquista al mundo con tus habilidades</h5>
                                <ul className="mt-3 category-list">
                                    <li>Criptografia</li>
                                    <li>Estenografia</li>
                                    <li>Análisis Forense</li>
                                    <li>SQL Injection</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 form-container">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthPage;
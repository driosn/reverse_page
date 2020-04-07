import React from 'react';

import './styles/Navbar.css';

import reverseLogo from '../images/reverse_icon_horizontal.svg';
import menuIcon from '../images/menu_icon.svg';
import challengesIcon from '../images/challenge_icon.svg';
import toolsIcon from '../images/tools_icon.svg';
import newChallengeIcon from '../images/new_challenge_icon.svg';
import avatarExampleImg from '../images/avatar_image.svg';


import NavbarItem from './NavbarItem.js';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-main">
                    <nav className="navbar navbar-dark">
                        <button className="navbar-toggler menu-icon-btn" type="button" data-toggle="collapse" data-target="#menu-actions" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img className="menu-icon-img" src={menuIcon} alt=""/>
                        </button>

                        <a className="navbar-brand mr-auto ml-4"  href="#">
                            <img src={reverseLogo} alt="Reverse CTF Page"/>
                        </a>

                        <div className="avatar-container">
                            <button className="avatar-container-btn" type="button" data-toggle="collapse" data-target="#avatar-actions" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <img className="rounded-circle avatar-image" src={avatarExampleImg} alt="Profile"/>
                                <a href="#"><span className="avatar-username">Nombre de usuario</span></a>
                            </button>
                        </div>
                    </nav>

                    <div className="actions-container">
                        <div className="collapse" id="menu-actions">
                          <div className="p-4 navbar-nav-container">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavbarItem itemName="Retos" itemIcon={challengesIcon}/>
                                </li>
                                <li className="nav-item">
                                    <NavbarItem itemName="Herramientas" itemIcon={toolsIcon}/>
                                </li>
                                <li className="nav-item">
                                    <NavbarItem itemName="Crear Reto" itemIcon={newChallengeIcon}/>
                                </li>
                            </ul>
                          </div>
                        </div> 

                        <div className="sizedbox ml-auto mr-auto"></div>

                        <div className="collapse" id="avatar-actions">
                          <div className="p-4 navbar-nav-container">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavbarItem itemName="Perfil" itemIcon={challengesIcon}/>
                                </li>
                                <li className="nav-item">
                                    <NavbarItem itemName="Cerrar Sesión" itemIcon={toolsIcon}/>
                                </li>
                            </ul>
                          </div>
                        </div> 
                    </div>


                
            </div>
        );
    }
}

export default Navbar;
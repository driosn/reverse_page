import React from 'react';

import '../styles/CustomForm.css';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: true,
            
                name: '',
                lastname: '',
                username: '',
                saga: '',
                email: '',
                password: '',
            
        
        }
    }

    handleChangeToRegister = () => {
        this.setState({
            isLogin: false
        })
    }

    handleChangeToLogin = () => {
        this.setState({
            isLogin: true
        })
    }

    render() {

        var isLogin = this.state.isLogin;

        console.log(isLogin);

        if(isLogin === true) {
            return( <div className="custom-form-container p-4">
                                <form>
                                    <div class="form-group">
                                      <label for="userNameInput">Nombre de usuario</label>
                                      <input type="text" class="form-control" id="userNameInput" aria-describedby="emailHelp"/>
                                    </div>
                                    <div class="form-group">
                                      <label for="passwordInput">Contraseña</label>
                                      <input type="password" class="form-control" id="passwordInput"/>
                                    </div>
                                    {/* <button type="submit" class="btn btn-primary">Ingresar</button> */}
                                    <a  class="btn btn-primary" href="/home">Ingresar</a>
                                </form>
                                <button type="button" class="btn btn-primary mt-4" onClick={this.handleChangeToRegister}>Crear una cuenta</button>
                            </div> );
        } else {
            return ( <div className="custom-form-container p-4">
                                <form>
                                    <div className="fullName-container">
                                        <div class="form-group">
                                          <label for="firstNameInput">Nombre</label>
                                          <input name="name" type="text" class="form-control" id="firstNameInput" aria-describedby="emailHelp" onChange={this.handleChangeForm}/>
                                        </div>
                                        <div class="form-group ml-3">
                                          <label for="lastNameInput">Apellido</label>
                                          <input name="lastname" type="text" class="form-control" id="lastNameInput" onChange={this.handleChangeForm}/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                      <label for="userNameInput">Nombre de usuario</label>
                                      <input name="username" type="text" class="form-control" id="userNameInput" onChange={this.handleChangeForm}/>
                                    </div>
                                    <div class="form-group">
                                      <label for="sagaCodeInput">Codigo SAGA</label>
                                      <input name="saga" type="text" class="form-control" id="sagaCodeInput" onChange={this.handleChangeForm}/>
                                    </div>
                                    <div class="form-group">
                                      <label for="emailInput">Correo</label>
                                      <input name="email" type="email" class="form-control" id="emailInput" onChange={this.handleChangeForm}/>
                                    </div>
                                    <div class="form-group">
                                      <label for="passwordInput">Contraseña</label>
                                      <input name="password" type="password" class="form-control" id="passwordInput" onChange={this.handleChangeForm}/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Registrar usuario</button>
                                </form>
                                <button type="button" class="btn btn-primary mt-4" onClick={this.handleChangeToLogin}>Ya tienes cuenta? Inicia sesion</button>
                            </div> );
        }

    }

}

export default LoginForm;
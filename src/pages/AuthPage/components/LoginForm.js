import React from 'react';

import '../styles/CustomForm.css';

class LoginForm extends React.Component {

    render() {
        return (
            <div className="custom-form-container p-4">
                <form>
                    <div class="form-group">
                      <label for="userNameInput">Nombre de usuario</label>
                      <input type="text" class="form-control" id="userNameInput" aria-describedby="emailHelp"/>
                    </div>
                    <div class="form-group">
                      <label for="passwordInput">Contraseña</label>
                      <input type="password" class="form-control" id="passwordInput"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Ingresar</button>
                </form>
            </div>
        );
    }

}

export default LoginForm;
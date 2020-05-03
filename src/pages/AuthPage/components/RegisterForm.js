import React from 'react';

import '../styles/CustomForm.css';

class RegisterForm extends React.Component {

    render() {
        return (
            <div className="custom-form-container p-4">
                <form>
                    <div className="fullName-container">
                        <div class="form-group">
                          <label for="firstNameInput">Nombre</label>
                          <input type="text" class="form-control" id="firstNameInput" aria-describedby="emailHelp"/>
                        </div>
                        <div class="form-group ml-3">
                          <label for="lastNameInput">Apellido</label>
                          <input type="text" class="form-control" id="lastNameInput"/>
                        </div>
                    </div>
                    <div class="form-group">
                      <label for="userNameInput">Nombre de usuario</label>
                      <input type="text" class="form-control" id="userNameInput"/>
                    </div>
                    <div class="form-group">
                      <label for="sagaCodeInput">Codigo SAGA</label>
                      <input type="text" class="form-control" id="sagaCodeInput"/>
                    </div>
                    <div class="form-group">
                      <label for="emailInput">Correo</label>
                      <input type="email" class="form-control" id="emailInput"/>
                    </div>
                    <div class="form-group">
                      <label for="passwordInput">Contraseña</label>
                      <input type="password" class="form-control" id="passwordInput"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Registrar usuario</button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;
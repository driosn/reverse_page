import React from 'react';

import '../styles/ProblemModal.css';

class ProblemModal extends React.Component {

    render() {
        return(
            <div className="problem-modal">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Soy el nombre del reto :v</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="problem-description px-4 py-4">
                        <h5 id="description-lbl">Descripcion</h5>
                        <h6 id="description-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet rutrum diam,
                            ut vehicula purus. Sed id vehicula odio, eget pulvinar metus.
                            Nam tempor laoreet scelerisque. Mauris placerat ante eget posuere fringilla.
                            Suspendisse potenti. Nam scelerisque maximus sollicitudin.
                            Sed consequat eleifend pulvinar. Ut aliquam dolor ut nisl consectetur,
                            pretium posuere mauris auctor. Maecenas pharetra lacinia ipsum dictum interdum.
                        </h6>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="container">
                          <div className="row">
                              <div className="col">
                                  <button type="button" class="btn btn-secondary">Pista</button>
                              </div>
                              <div className="col ml-auto">
                                <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Flag" aria-label="Flag" aria-describedby="basic-addon2"/>
                                  <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">Enviar</button>
                                  </div>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }

}

export default ProblemModal;
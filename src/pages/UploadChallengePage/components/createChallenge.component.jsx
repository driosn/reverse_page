import React from 'react';
import './style.css';
class CreateChallenge extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
            flag:'',
            cofirmflag:''
        }
    }

    handleSubmit = event => {
        event.prenvetDefault();
        this.setState({
            title:'',
            description:'',
            flag:'',
            cofirmflag:''
        })
    }

    handleChange = event =>{
        const{value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className= 'newch' >
            <form onSubmit={this.handleSubmit}>
                <div className="pos">
                <label className="sel">Seleccionar Categoria</label>
                <select class="form-control">
                    <option>Criptografia</option>
                    <option>Esteganografia</option>
                    <option>Trafico de Datos</option>
                    <option>Sql Injection</option>
                </select>
                </div>   
                <div className="pos"></div>
                <br/>
                <div className="pos1">
                <label className="sel">Titulo:</label>
                <input 
                    className="form-control"
                    name = "title" 
                    placeholder="Escribe el titulo de tu reto"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                /><br/>
                <label className="sel">Descripcion:</label>
                <textarea 
                    className="form-control"
                    placeholder="Escribe el enunciado de tu reto"
                    name = "description" 
                    rows="4"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                />
                <br/>
                </div>
                <div className="pos1">
                <label className="sel">Flag / Respuesta </label>
                <input
                    className="form-control"
                    placeholder="Escribe la Flag correcta"
                    name = "flag" 
                    value={this.state.flag}
                    onChange={this.handleChange}
                    required
                />
                <br/>
                <label className="sel">Confirmar Flag</label>
                <input 
                    className="form-control"
                    placeholder="Confirmar Flag"
                    name = "confirmflag" 
                    value={this.state.cofirmflag}
                    onChange={this.handleChange}
                    required    
                />
                <br/>
                <input 
                    className="btn btn-primary"
                    type='submit'
                    value = 'Enviar'
                />
                </div>
            </form>
            </div>
        )
    }
}

export default CreateChallenge;
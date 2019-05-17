import React, {Component} from 'react';


class Formulario extends Component{
    // Creando Refs
    CiudadRef = React.createRef();
    PaisRef = React.createRef();


    // Metodo de Form onSubmit
    buscarClima = (e) =>{
        // Prevent Default
        e.preventDefault();

        // Leer Refs y creacion de objeto
        const respuesta = {
            Ciudad: this.CiudadRef.current.value,
            Pais: this.PaisRef.current.value
        }
        //console.log(respuesta);

        // Enviar por props
        this.props.datosConsulta(respuesta);

    }

    render(){
        return(
            <div className= "contenedor-form">
                <div className="container">
                    <div className="row">
                    <form onSubmit = {this.buscarClima}>
                        <div className = "input-field col s12 m8 l4 offset-m2">
                            <input ref = {this.CiudadRef} id= "ciudad" type="text" />
                            <label htmlFor="ciudad">Ciudad:</label>
                        </div>
                        <div className = "input-field col s12 m8 l4 offset-m2">
                            <select ref = {this.PaisRef}>
                                <option value = "" defaultValue>Elige un Pais</option>
                                <option value = "AR">Argentina</option>
                                <option value = "CO">Colombia</option>
                                <option value = "CR">Costa Rica</option>
                                <option value = "ES">España</option>
                                <option value = "US">Estados Unidos</option>
                                <option value = "MX">Mexico</option>
                                <option value = "PE">Peru</option>
                            </select>
                            <label htmlFor="pais">Pais</label>
                        </div>
                        <div className = "input-field col s12 m8 l4 offset-2 buscador">
                            <input type = "submit" className = "waves-effect waves-light btn-large custom-yellow-button accent-4" value = "Buscar" />
                        </div>

                        
                    </form>

                    </div>
                </div>
            </div>
        )
    }     
}

export default Formulario;


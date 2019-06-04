import React, {useState} from 'react';


//2/recibimos la funcion de app datosConsulta por distructuring
function Formulario({datosConsulta}){

    // uso de USESTATE, la funcion devuelve dos variables que las obtenemos por destructuring, incluiimos como parametros ciudad y pais
    const [busqueda,guardarBusqueda] = useState({
        ciudad:'',
        pais:''
    })

    const handleChange = (e) =>{
        //Cambiando el state de esta funcion (aproach de hooks)
        // 1--> Tomamos una copia del state, en este caso tiene el nombre de "busqueda"  y luego sobreescribimos el elemento
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
        
    }
    //3/ Metodo que creamos para conectar todo con el componente principal  y es el que activa el onSubmit, se incluye la funcion que viene del padre datosConsulta() con el parametro busqueda el cual es el estado y se resume en la busqueda que hace el usuario
    const consultarClima = (e) =>{
        e.preventDefault();
        datosConsulta(busqueda);
    }

    return(
        <form onSubmit={consultarClima}>
            <div className= "input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id= "ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="Ciudad"> Ciudad:</label> 
            </div>

            <div className= "input-field col s12">
                <select onChange={handleChange} name= "pais">
                    <option value ="">Selecciona un Pais</option>
                    <option value = "US">Estados Unidos</option>
                    <option value = "MX">Mexico</option>
                    <option value = "AR">Argentina</option>
                    <option value = "CO">Colombia</option>
                    <option value = "CR">Costa Rica</option>
                    <option value = "PE">Peru</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type = "submit" className = "waves-efect btn-large btn-block yellow accent-4" value = "Buscar Clima"/>
            </div>
        </form>
    )
};
    

export default Formulario;


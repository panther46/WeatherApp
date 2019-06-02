import React from 'react';


function Formulario(){

    const handleChange = (e) =>{
        //Cambiando el state de esta funcion (aproach de hooks)
    }

    return(
        <form>
            <div className= "input-field col s12">
                <input
                    type="text"
                    name="Ciudad"
                    id= "Ciudad"
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
            <div className="input-field" col s12>
                <input type = "submit" className = "waves-efect btn-large btn-block yellow accent-4" value = "Buscar Clima"/>
            </div>
        </form>
    )
};
    

export default Formulario;


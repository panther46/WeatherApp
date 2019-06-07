import React, {useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';



function App () {

  // State principal por piezas, dividimos usando usestate
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [error,setError] = useState(false);

  // 1)datos que el usuario quiere consultar, creamos un metodo y luego lo pasamos como prop por el formulario
  const datosConsulta = (datos) =>{
    // Validacion de los datos que llegan aqui, que ambos campos esten
   if (datos.ciudad === ''  || datos.pais === ''){
     setError(true);
      return
      //error
    }    
    // Ambos campos son llenados, se agregan al state
    setCiudad(datos.ciudad);
    setPais(datos.pais);
    setError(false);
    
  };

  // Cargamos un componente de manera condicional, aqui hacemos la logica para renderizar el componente Error, le pasamos un mensaje como parametro y usamos la variable COMPONENTE que declaramos para retornarla debidamente maquetada posteriormente.
  let componente;

  if (error){
    componente = <Error mensaje = "Ambos campos estan vacios"/>

  }
  else{
    componente = null;
  }


    return (
    <div>
        <Header 
        titulo= "Otra APP de React con HOOKS"
         />
      <div className = "contenedor-form">
        <div className = "container">
          <div className = "row">
            <div className = "col s12 m6">
              <Formulario
              datosConsulta = {datosConsulta}
              />
            </div>
            <div className = "col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
        
  );
}

export default App;

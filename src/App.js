import React, {useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';



function App () {

  // State principal por piezas, dividimos usando usestate
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');

  // 1)datos que el usuario quiere consultar, creamos un metodo y luego lo pasamos como prop por el formulario
  const datosConsulta = (datos) =>{
    // Validacion de los datos que llegan aqui, que ambos campos esten
   if (datos.ciudad === ''  || datos.pais === ''){
      return
      //error
    }    
    // Ambos campos son llenados, se agregan al state
    setCiudad(datos.ciudad);
    setPais(datos.pais);
  };


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
          </div>
        </div>
      </div>
    </div>
        
  );
}

export default App;

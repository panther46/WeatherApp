import React, {useState, useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';



function App () {

  // State principal por piezas, dividimos usando usestate
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [error,setError] = useState(false);
  const [resultado, setResultado] = useState({});

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

  // useEffect toma el lugar de component didmount y component didupdate
  useEffect (() => {
    // prevenimos primera ejecucion del metodo consultarAPI() para evitar errores 404, not found.
    if (ciudad === '') return;

    // Incluimos el metodo de consulta de API dentro del UseEffect
    // Metodo para la consulta de la API, opteniendo objetos en formato JSON.
  const consultarAPI = async () =>{

    // La Key proporcionada por la API
    const appId = '560661190727bf4b592da1703744076a';
    // La url para llamar a la api
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    // consultar la URL

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    setResultado(resultado);

  
  }

  consultarAPI();
  }, [ciudad, pais] );

  

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

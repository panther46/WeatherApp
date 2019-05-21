import React, {Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ErrorAlert from './componentes/Error';
import Clima from './componentes/Clima';


class App extends Component {

  //Creamos un state 
  state ={
    error: ''
  }
 // se llama el metodo de consulta de API dentro de este ciclo
  componentDidUpdate(prevProps, prevState){
    if (prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }

  }

  // Con metodos de react creamos el estado inicial del error (cuando carga el componente)
  componentDidMount(){
    this.setState({
      error: false,
      consulta: {},
      resultado: {}
    }

    )
  }

  // Consultando API
  consultarApi = () =>{
    const {Ciudad,Pais} = this.state.consulta;
    if (!Ciudad || !Pais) return null;

    const appID = '2577bcad489b505877b595b923f728f1';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${Ciudad},${Pais}&appid=${appID}`;
    
    // Query con fetch api
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos =>{
        this.setState({
          resultado: datos
        })
      } )
      

    // leer la url y agregar el API key

    // Consultar con fetch
  }

  // Recibiendo la respuesta de Formulario
  datosConsulta = (respuesta) => {
    if (respuesta.Ciudad === '' || respuesta.Pais === '' ){
      this.setState({
        error:true
      });
    } else{
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
  }

  render(){
    // Logica para alerta (Error), el else quedo pendiente porque era necesario primero conectar con API.
    // Declaramos una constante con la llamada a error dentro del state
    const error = this.state.error;
    // declaramos una variable resultado
    let resultado;
    // Si el error es true, llama al componente ErrorAlert. (Posteriormente se llama a la constante en el return como {error})
    if (error){
      resultado = <ErrorAlert mensajeError= "Ambos campos son obligatorios"/>
     } else{
       resultado = <Clima resultado= {this.state.resultado}/>

     }

    
    
    return (
      <div className="App">
        <Header
        titulo = "Clima React"
        />
        <Formulario
        datosConsulta = {this.datosConsulta}
        />
        {resultado}
      
      </div>
  );
}
}

export default App;

import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';



function App () {
    return (
      <div>
        <Header 
        titulo= "Otra APP de React con HOOKS"
      />
      <div className = "contenedor-form">
        <div className = "container">
          <div className = "row">
            <div className = "col s12 m6">
              <Formulario/>
            </div>
          </div>
        </div>
      </div>
      </div>
        
  )
};

export default App;

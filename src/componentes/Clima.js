import React, {Component} from 'react';


function Clima({resultado}) {
    

    //Extrayendo los valores del objeto "resultado"
        const {name,main} = resultado;
        // Si no hay un nombre retorna null
        if(!name) return null;

        // restar grados Kelvin

        const kelvin = 273.15;

        return (
            <div className = "row">
                <div className = "resultado col s12 m8 l6 offset-m2 offset-13">
                    <div className = "card-panel light-blue align-center">
                        <span className = "white-text">
                            <h2>Resultado Clima de: {name}</h2>
                            <p className = "temperatura">
                                {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                            </p>
                            <p>Temperatura máxima: {parseInt(main.temp_max - kelvin, 10)} &#x2103; </p>
                            <p>Temperatura minima: {parseInt(main.temp_min - kelvin, 10)} &#x2103; </p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }


export default Clima;
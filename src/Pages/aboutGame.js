import React from 'react';

const aboutGame = () => {
    return (
    <div class= "col-lg-6 offset-lg-3">    

        <div class="card" >
            <div class="card-body">
                <h1 class="card-title">¡Quien quiere ser Millonario!</h1>
                <h5 class="card-subtitle mb-2 text-muted">¿Como Jugar?</h5>
                <p class="card-text">
                    <ul>
                        <li>
                            <h6>Primero tendras que darle clic en el boton de jugar</h6>
                        </li>
                        <li>
                            <h6>Despues te saldra una pregunta en la parte superior de la pantalla</h6>
                        </li>
                        <li>
                            <h6>Tendras que elegir entre las 4 opciones donde solo una respuesta sera la correcta</h6>
                        </li>
                        <li>
                            <h6>Si tu respuesta es correcta, se te sumara el dinero que vas acumulando</h6>
                        </li>
                        <li>
                            <h6>Si fallas una de las respuestas se acabo el juego y se te arrojara cuanto dinero reuniste</h6>
                        </li>
                        <h1>BUENA SUERTE</h1>

                    </ul>
                </p>
            </div>
        </div>
    </div>   
         
    );
};

export default aboutGame;  
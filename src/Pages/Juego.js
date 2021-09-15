import React from 'react';


const Juego = () => {

    return (
    <div>
      
      <div class= "col-lg-6 offset-lg-3">
        <h1>Bienvenido a la seccion de Quien quiere ser millonario donde podras granar dinero cada que aciertes una respuesta. Oprime clic en jugar y podras comenzar con la primera pregunta </h1>
        <a 
            type="submit" 
            class="btn btn-primary"
            href="Pregunta1">jugar
            </a>
      </div>

      
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item ">
            <a class="page-link" href="Jugar" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="Pregunta1">1</a></li>
          <li class="page-item">
            <a class="page-link" href="Pregunta2">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="Pregunta3">3</a></li>
          <li class="page-item">
            <a class="page-link" href="Pregunta1">Next</a>
          </li>
        </ul>
      </nav>
      </div>
    

    );
};

export default Juego;
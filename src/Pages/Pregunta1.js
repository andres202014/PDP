import React from 'react';
import Preguntas from '../Components/Preguntas';




const Pregunta1 = () => {
    return (
        <div>
          
            <div>
              
                <h1>Preguntas</h1>
                <Preguntas/>
            </div>
            













            <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item ">
            <a class="page-link" href="Jugar" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="Pregunta1">1</a></li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="Pregunta3">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

      
        </div>
        
    );
};

export default Pregunta1;
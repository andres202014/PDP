import Preguntas from './Components/Preguntas';
import AppRouter from './router/AppRouter';
import './styles/fondo.css'

function App() {
  return (
    <div className="imagenfondo">
      
      <AppRouter/>
      <Preguntas/>
      
    </div>
  );
}

export default App;

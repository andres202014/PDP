import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import aboutGame from '../Pages/aboutGame';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import Juego from '../Pages/Juego';
import login from '../Pages/login';
import Navbar from '../Components/Navbar';
import Pregunta1 from '../Pages/Pregunta1';
import Pregunta2 from '../Pages/Pregunta2';
import Pregunta3 from '../Pages/Pregunta3';


const AppRouter = () => {
    return (

        <div>
            


        <Router>
     

            <Navbar/>
            <Switch>        
                <Route exact path ="/login" component ={login} />   
                <Route exact path ="/jugar" component ={Juego}/>    
                <Route exact path ="/acerca-del-juego" component ={aboutGame}/>
                <Route exact path ="/Pregunta1" component ={Pregunta1} />
                <Route exact path ="/Pregunta2" component ={Pregunta2} />
                <Route exact path ="/Pregunta3" component ={Pregunta3} />
                <Route exact path ="/" component ={HomePage}/>
                <Route exact path ="/*" component ={ErrorPage}/> 
            </Switch>
        </Router>
        </div>
    );
};

export default AppRouter;
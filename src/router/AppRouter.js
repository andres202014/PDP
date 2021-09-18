import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import aboutGame from '../Pages/aboutGame';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import Juego from '../Pages/Juego';
import login from '../Pages/login';
import Navbar from '../Components/Navbar';
import Pregunta1 from '../Pages/Pregunta1';



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
                <Route exact path ="/" component ={HomePage}/>
                <Route exact path ="/*" component ={ErrorPage}/> 
            </Switch>
        </Router>
        </div>
    );
};

export default AppRouter;
import { useEffect, useState } from "react";
import React from 'react'
import Pregunta1 from "../Pages/Pregunta1";

const Preguntas = () => {

    
    const [preguntas,setPreguntas]= useState([])
    

useEffect(()=>{

    obtenerDatos()
    
},[])


const obtenerDatos = async () => {
    const data =await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    const users = await data.json().then((datos)=>setPreguntas(datos.results))
    console.log(users);

}



const cont=0;


    return (
    <div>
            
            
            <ul>
                {
                   preguntas.map(item  =>(
                       <li key={item.category}><h3>{item.question}</h3>
                       <li><a type="submit" class="btn btn-primary">{item.incorrect_answers}</a>-<a type="submit" class="btn btn-primary" >{item.correct_answer}</a></li>
                       
                       </li>
                       
                   ))
                }
            </ul>
            
           
    </div>
    );
};


export default Preguntas;
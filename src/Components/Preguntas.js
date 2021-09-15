import { useEffect, useState } from "react";
import React from 'react'

const Preguntas = () => {

    
    const [preguntas,setPreguntas]= useState([])
    

useEffect(()=>{

    obtenerDatos()
    
},[])

const obtenerDatos = async()=>{
    const data =await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    const users = await data.json()
    setPreguntas(users)
}




    return (
    <div>
            
            <h1>Preguntas</h1>
            <ul>
                {
                   preguntas.map(item  =>(
                       <li key="item.id">{item.category}-{item.question}</li>
                   ))
                }
            </ul>
    </div>
    );
};


export default Preguntas;
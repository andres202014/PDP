import { useEffect, useState } from "react";
import React from 'react'
import { useAlert } from 'react-alert'

const Preguntas = () => {

    const [preguntas,setPreguntas]= useState([])
    const [suma,setSuma] = useState(0)
    const alert = useAlert()

useEffect(()=>{

    obtenerDatos()
    
},[])


const obtenerDatos = async () => {
    const data =await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    const users = await data.json().then((datos)=>setPreguntas(datos.results))
    console.log(users);

}

const alerta = () =>{

    if(suma>=2500){
        alert.show(`Felicidades, Haz ganado: ${suma}$ Dolares`)
    }else{
        alert.show(`Aun puedes ganar mas dinero, Llevas un acumulado de: ${suma}$ Dolares`)
    }

}



    return (
    <div>
            
            
            <ul>
                {
                   preguntas.map(item  =>(
                       <li key={item.category}><h3>{item.question}</h3>
                       <li><a type="submit" class="btn btn-primary">{item.incorrect_answers}</a>-<a type="submit" class="btn btn-primary" onClick={()=>setSuma(suma+500)} >{item.correct_answer}</a></li>
                       </li>
                       
                       
                   ))
                }
            </ul>
           {/* <h1>Acumulado:{suma}$</h1> */}
           
           <button className="btn btn-success"onClick={()=>alerta()}>Resultado</button>
    



            
            
            
           
    </div>
    );
};


export default Preguntas;
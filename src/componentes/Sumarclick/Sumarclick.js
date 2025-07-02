import { useState } from "react";

export const Sumarclick=() =>{
   // estado para mostar el number
    const [number, SetNumber]=useState(0);
            // metodo o funcion para sumar
            const sumar=()=>{
            // para sumar mas 1
            SetNumber(number+1);
            }
            const restar=()=>{
                SetNumber(number-1);
            }
        
return (
<div className="">
    <h1> Suma Automatica</h1>
    <p>Se Sumara la hacer click en un button sumar</p>
    <h2> {number} </h2>

<button className="btn btn-primary" onClick={sumar} >Sumar</button> <br></br><br></br>
<button className="btn btn-success"  onClick={restar} >Restar</button>
</div>

)
}
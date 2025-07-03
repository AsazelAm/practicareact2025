//Importacion del HOOK
import { useState } from "react"; //importa el hook useState para manejar estado

export const Sumarclick=() =>{
   // estado para mostar el number
    /*useState(0):inicializa el estado con el valor 0
    Retorna un array con [valorActual,funcionParaCambiarValor] */
    const [number, SetNumber]=useState(0);
    //number:variable q contiene el valor actual del contador
    //setNumber: funcion para actualizar el valor de 'number'

            // metodo o funcion para sumar
            const sumar=()=>{
            // para sumar mas 1
            //SetNumber actualiza el estado 
            SetNumber(number+1);
            //ESTO causara q el componente se vuelva a renderizar mostrando el nuevo valor en la intefaz
            }
            const restar=()=>{
                SetNumber(number-1);
            }
        
return (
    //Renderizado el componente
<div className="">
    <h1> Suma Automatica</h1>
    <p>Se Sumara la hacer click en un button sumar</p>
    <h2> {number} </h2> {/*number es una expresion q muestra el valor del estado */}

<button className="btn btn-primary" onClick={sumar} >Sumar</button> {/*Asigna al funcion sumar al evento clik */}
<br></br><br></br>
<button className="btn btn-success"  onClick={restar} >Restar</button>
</div>

)
}
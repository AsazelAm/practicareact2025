import { Card } from '../Card/Card';
//Importaciones con llaves {} :Porq esos componentes usa esport const
//../ significa subir un nivel en la carpeta 
import { Contacto } from '../Contacto/Contacto';
import { Sumarclick } from '../Sumarclick/Sumarclick';

const Home = () => ( //Arrow function sin llaves, Cuando una arrow function retorna inmediatamente, no nesecita return explicito osea sin llaves como en Blog.js
    <div className="App">
        <div className='row'>
            <div className='col-md-6'>
                <Card/>
            </div>
            <div className='col-md-6'>
                <Contacto/>
            </div>
        </div>
        <Sumarclick/>
    </div>
)
//Diferencia entre tipos de exportacion 
//export default: se puede importar con cualquier nombre
//export const Card=()=>{}:Exportacion con nombre SE DEBE IMPORTAR CONEL NOMBRE EXACTO ENTRE LLAVES
export default Home //Exporta como exportacion por defecto
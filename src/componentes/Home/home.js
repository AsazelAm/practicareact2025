import { Card } from '../Card/Card';
import { Contacto } from '../Contacto/Contacto';
import { Sumarclick } from '../Sumarclick/Sumarclick';

const Home = () => (
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

export default Home
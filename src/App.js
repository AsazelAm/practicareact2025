import './App.css';
import { Blog } from './componentes/Blog/Blog'; //el componente Blog se conecta a traves del import
import Features from './componentes/Features/features';
import Home from './componentes/Home/home';
//import Navbar from './componentes/Navbar/Navbar';
import Navbar  from './componentes/Navbar/Navbar';

import { //se importan todos los componentes q se van usar en las diferentes rutas
  BrowserRouter as Router,//Es el componente principal que habilita el enrutamiento
  Routes,//contenedor q agrupa todas las rutas
  Route //define una ruta especifica con su componente q se van a usar
} from "react-router-dom"

function App(){

return(
  <Router> {/*Envuelve toda la aplicacion para habilitar el enrutamiento */}
    <Navbar />    {/* Se coloca AFUERA de <Routes>, por eso aparece en todas las paginas */}
    <Routes> {/*Contenedor de todas las rutas */}
      <Route path="/features" element={<Features />} />
      {/* Cada <Route> tiene: path: La url que activara ese componente, element: El componente q se renderizara */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/" element={<Home />} /> {/*Se muestra esto primero por q en path ="/":Esta es la ruta raiz. la pagina principal por eso home es la pagina de inicio por defecto por q esta asosiada con la ruta raiz "/" */}
    </Routes> 
    {/* El navbar esta afuera React lo renderiza siempre, solo el contenido dentro de Routes Cambia */}
  </Router>
);

}
export default App;

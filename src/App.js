import './App.css';
import { Blog } from './componentes/Blog/Blog';
import Features from './componentes/Features/features';
import Home from './componentes/Home/home';
//import Navbar from './componentes/Navbar/Navbar';
import Navbar  from './componentes/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App(){

return(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/features" element={<Features />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/" element={<Home />} />
    </Routes>    
  </Router>
);

}
export default App;

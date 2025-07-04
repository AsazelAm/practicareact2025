import "./features.css";
import imagen1 from './imgFeatures/img-1.jpeg';
import imagen2 from './imgFeatures/img-2.jpeg';
import imagen3 from './imgFeatures/img-3.jpeg';


const Features = () => (
    <div className="container">
        <div className="date-bar"> 
            Tuesday, july 30, 2024
        </div>
        <div className="nyt-logo">The New York Times</div>
        <nav className="navbar navbar-expand-lg navbar-light border-top border-bottom py-1">
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link px-3" href="#">U.S</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#">World</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#">Bussines</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#">Arts</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#">Lifesstyle</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#">Games</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#">Cooking</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#">The Athletic</a></li>
                </ul>
            </div>
        </nav>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <p className="text-muted">41- ago</p>
                    <div className="headline">Israel Strikes Suburs, targeind he hezbollah Comander</div>
                    <p className="summary">The isreeli military daue is airstrike killed teh head of thele Lebanese millitant group figt againt israel over tehe past year Ofificilas gaben t condfimed the claim</p>
                    <img src={imagen1} className="img-fluid mt-2" alt="Imgen Buena"></img>
                    <small className="text-muted">The scene in suburnan beirut, lebanon after israel said it carriedout a retalatory airstrike, (NYT)</small>
                </div>
                <div className="col-md-6">
                    <img src={imagen2} className="img-fluid" alt="Imagen buena 2"></img>
                    <div className="headline mt-2">After Days Lost at lea, They Needed aPastramei Sandwick</div>
                    <p className="summary">A pair os scuba divers were dramatically rescued rom the gildfof mexico They knew what the frist strod affrer theodeal would be</p>
                    <p className="text-muted">4 MIN READ</p>
                </div>
            </div>
        </div>
            
    </div>
);

export default Features
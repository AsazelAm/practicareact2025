import "./Blog.css"; //Importa los estilos css especificos
import imagen1 from './Img/default.jpg';//importa las imagenes como modulos.React las trata como variables, no como rutas de texto
import imagen2 from './Img/Screenshot_20241108_110412.jpg';

export const Blog=()=>{ //El componente Blog es esportado desde Blog.js
    return(
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <h1>Hola</h1>
                    <div className="">
                        <p><b>Soy Estudiante de la carrera de Sistemas Informaticos,Me gustaria trabajar en el rubro de Diseño Web</b></p>
                    </div>
                    <h4>Facebook</h4>
                    <div className="border border-2 p-3 w-75">
                        <h5 className="bg-info"><b className="text-white">Facebook</b></h5>
                        <img src={imagen1} alt="Imagen 1"></img> {/*Usa la variable importada no una ruta de texto */}
                        <div className="txtP"> 
                            <p className="text-muted">Nombre:</p>
                            <p className="text-black">Asaf Guillermo Ajoruro Mullisaca</p>    
                        </div> 
                    </div> 
                </div>
                <div className="col-md-8">
                    <h2><b>Cerrando Etapas</b></h2>
                    <div>
                        <img src={imagen2} alt="Imagen 2" ></img>
                    </div>
                    <div className="my-4">
                        <p>Siempre es preciso saber cuando se acaba una etapa de la vida. Si insistes en permanecer en ella mas alla del tiempo nesesario pierdes la alegria y el sentido del resto.
                        Cerrando circuitos o cerrando puertas o cerradno capitulos .Como quieres llamrlo , lo importante es porder cerralos, dejas ir momentos de la vida que se van clausurando
                        </p>
                        <p>¿Termino con su trabajo?, ¿Se acabo la relacion?, ¿Ua no vive mas enesta casa?, ¿Debe irse de viaje?, ¿La amistad se acabo?, ¿Ya no eres un Niño?</p>
                        <p>Puedes pasarte algun tiempo de su presente "Repasando" los "Porques", reboninando la cinta para tratar de entender por que sucedio tal o cual hecho </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
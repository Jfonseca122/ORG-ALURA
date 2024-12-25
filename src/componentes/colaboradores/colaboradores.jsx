import './colaboradores.css';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Colaboradores = ({ datos,colorFondo,eliminarColaboradorDos,like }) => {
    const { foto, nombre, puesto,id ,fav} = datos; // Desestructuración del objeto datos
   
  
   


    const favorito = ()=>{
           like(id)
          
    }

   

    return (
        <div className='colaborador'>
           
           <i onClick={()=> eliminarColaboradorDos(id)} className="bi bi-x-lg eliminar"></i>
            <div className='encabezado' style={{backgroundColor:colorFondo} }>
                <img src={foto} alt={`Imagen de ${nombre}`} />
            </div>
            <div className='info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <i className="bi bi-suit-heart" onClick={favorito}></i> :  <i className="bi bi-suit-heart-fill" color='red' onClick={favorito}></i>}

               
               
            </div>
        </div>
    );
};

Colaboradores.propTypes = {
    datos: PropTypes.shape({
        foto: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        puesto: PropTypes.string.isRequired,
        id:PropTypes.string,
        fav:PropTypes.bool
    }).isRequired,
    colorFondo: PropTypes.string,
    eliminarColaboradorDos:PropTypes.func,
    like:PropTypes.func

};

export default Colaboradores;

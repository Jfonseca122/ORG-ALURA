import './listaopciones.css';
import PropTypes from 'prop-types';

const ListaOpciones = (props) => {
    

    const manejarCambio = (e)=>{
        props.setvalor(e.target.value)

    }

    return (
        <div className='contenedorOpciones'>
            <label htmlFor="equipos">Equipos</label>
            <select id="equipos" value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue='' hidden >Seleccionar</option>
                {props.datosOpciones.map((opcion, index) => (
                    
                    <option  key={index}>{opcion}</option>
                ))}
            </select>
        </div>
    );
};

ListaOpciones.propTypes = {
    valor:PropTypes.string,
    setvalor: PropTypes.func,
    datosOpciones:PropTypes.array
    
};

export default ListaOpciones;

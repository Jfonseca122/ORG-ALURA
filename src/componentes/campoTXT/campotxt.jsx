
import './campotxt.css';
import PropTypes from 'prop-types';

const CampoTXT = (props) => {
    const tipoInput = 'text'
    const valorInput = props.tipo ? props.tipo : tipoInput
    const manejarCambio = (e)=>{
        props.setValor(e.target.value)
    }
    const idCampo = props.titulo.toLowerCase().replace(/ /g, '-'); // Crear un id único basado en el título

    return (
        <div className="contenedorCampotxt" >
            <label htmlFor={idCampo}>{props.titulo}</label>
            <input
                id={idCampo}
                type={valorInput} // Verificar si `tipo` está definido, de lo contrario usar 'text'
                placeholder={props.placeholder || `Ingresar ${props.titulo.toLowerCase()}`}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                className={valorInput}
            />
        </div>
    );
};

CampoTXT.propTypes = {
    titulo: PropTypes.string.isRequired,  // Título del campo (obligatorio)
    placeholder: PropTypes.string,        // Placeholder opcional
    required: PropTypes.bool.isRequired,  // Si el campo es obligatorio (obligatorio)
    valor:PropTypes.string,
    tipo:PropTypes.string,

    setValor:PropTypes.func
};

export default CampoTXT;

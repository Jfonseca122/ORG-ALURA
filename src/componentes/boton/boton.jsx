import './boton.css'
import PropTypes from 'prop-types';

const Boton = ({texto})=>{
    return <button className='btn'> {texto} </button>
}

Boton.propTypes = {
    texto: PropTypes.string.isRequired

}



export default Boton
import './miorg.css'
import PropTypes from 'prop-types';
// import { useState } from 'react';

const MiORG = (props) => {
    // Estado hook
    // useState()
    // const [mostrarForm, MostrarFormulario] = useState(true)

    // const manejarClic = () =>{
    //     MostrarFormulario(!mostrarForm)
    // }
    
    // const EstadoFormulario = (valor)=>{
    //     valor = props.estadoVer
    //     console.log(valor)
    // }

    
    return <section className='orgSection'>
        <h3>{props.titulo}</h3>
        <i className={(props.estadoVer)?'bi bi-eye':'bi bi-eye-slash'} onClick={props.estado}></i>
       

    </section>
}

MiORG.propTypes = {
    titulo: PropTypes.string.isRequired,
    estado: PropTypes.func.isRequired,
    estadoVer :PropTypes.bool

}


export default MiORG
import './equipo.css';
import PropTypes from 'prop-types';
import Colaboradores from '../colaboradores/colaboradores';
import hexToRgba from 'hex-to-rgba';

const Equipo = ({ datos: { colorPrimario, titulo,id }, valorColaboradores,eliminarColaborador,colorInput,like }) => {
 
    const colaboradoresDelEquipo = valorColaboradores.filter(
        (colaborador) => colaborador.equipo === titulo
    );

    

      
    const manejarColor = (e)=>{
        colorInput(e.target.value,id)
    }

    
    return ( <>{ colaboradoresDelEquipo.length > 0 && 
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}>
            <input type="color" className='input-color' value={colorPrimario} onChange={manejarColor} />

            <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradoresDelEquipo.map((colaborador, index) => (
                        <Colaboradores
                            datos={colaborador}
                            key={index}
                            colorFondo={colorPrimario}
                            eliminarColaboradorDos={eliminarColaborador}
                            like={like}/>
                    ))
                }
            </div>
        </section>

    } </>
      
    );
};

Equipo.propTypes = {
    datos: PropTypes.shape({
        colorPrimario: PropTypes.string.isRequired,
        colorSegundario: PropTypes.string,
        titulo: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    valorColaboradores: PropTypes.array,
    eliminarColaborador: PropTypes.func,
    colorInput: PropTypes.func,
    like: PropTypes.func

    
};

export default Equipo;

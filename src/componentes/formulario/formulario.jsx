import { useState } from 'react';
import './formulario.css';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import CampoTXT from '../campoTXT/campotxt';
import ListaOpciones from '../listaopciones/listaopciones';
import Boton from '../boton/boton';

const Formulario = (props) => {
    
    const [Nombre, setNombre] = useState('')
    const [Puesto, setPuesto] = useState('')
    const [Foto, setFoto] = useState('')
    const [Equipo, setEquipo] = useState('')
    const [Titulo, setTitulo] = useState('')
    const [Color, setColor] = useState('')

    const AccionBtn = (event)=>{
        event.preventDefault()
        let datosEnviar = {
            id:uuid(),
            nombre:Nombre,
            puesto:Puesto,
            foto:Foto,
            equipo: Equipo,
            fav:true
        }

       
        props.datosColaborador(datosEnviar)
       
    }

    
    const ClicBotonDos = (event)=>{
        event.preventDefault()

        let datosNuevoEquipo = {
            titulo:Titulo,
            colorPrimario: Color
        }

        props.datosNuevoEquipo(datosNuevoEquipo)

    }
    return (
        <section className="sectionForm">
            <form className="form" onSubmit={AccionBtn}>
                <h2 className="tituloForm">
                    Rellena el formulario para crear el colaborador
                </h2>
                <CampoTXT titulo='Nombre' required valor={Nombre} setValor={setNombre} />
                <CampoTXT titulo='Puesto' required valor={Puesto} setValor={setPuesto} />
                <CampoTXT titulo='Foto' placeholder={'Enlace de la foto'} required valor={Foto} setValor={setFoto} />
                <ListaOpciones valor={Equipo} setvalor={setEquipo} datosOpciones={props.datoTituloOpciones}></ListaOpciones>

                <Boton texto={'Crear'}></Boton>

                
              
            </form>
            <form className="form" onSubmit={ClicBotonDos}>
                <h2 className="tituloForm">
                    Rellena el formulario para crear el Equipo
                </h2>
                <CampoTXT titulo='Titulo' required valor={Titulo} setValor={setTitulo} />
                <CampoTXT tipo={'color'} titulo='Color' placeholder={'Ingresar el color hex'} required valor={Color} setValor={setColor} />
                <Boton texto={'Registrar'}></Boton>

                
              
            </form>
        </section>
    );
};

Formulario.propTypes = {
   datoTituloOpciones : PropTypes.array,
   datosColaborador: PropTypes.func,
   datosNuevoEquipo: PropTypes.func
};



export default Formulario;

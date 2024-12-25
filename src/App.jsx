import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Header from './componentes/header/header'
import Formulario from './componentes/formulario/formulario'
import MiORG from './componentes/miORG/miorg'
import Equipo from './componentes/Equipo/equipo'
import Footer from './componentes/footer/footer'




function App() {
   
  const [ManejarEstadoFormulario, EstadoFormulario] = useState(false)
  const [ManejarEstadoDeDatos, setManejarEstadoDeDatos] = useState([{
    id:uuidv4(),
    nombre:'Julian Fonseca',
    puesto:'Desarrollador web',
    foto:'./img/me.jpg',
    equipo:'Front End',
    fav:false
  }])
  const [opcionesEquipo,setOpcionesEquipo] = useState([
    {   
        id:uuidv4(),
        titulo: 'Programación',
        colorPrimario: '#57C278',
        colorSegundario: '#D9F7E9'
    },
    {
        id:uuidv4(),
        titulo: 'Front End',
        colorPrimario: '#82CFFA', // Corregido el color
        colorSegundario: '#E8F8FF'
    },
    {
        id:uuidv4(),
        titulo: 'UX y Diseño',
        colorPrimario: '#DB6EBF',
        colorSegundario: '#FAE9F5'
    },
    {   
        id:uuidv4(),
        titulo: 'Data Science',
        colorPrimario: '#A6D157',
        colorSegundario: '#F0F8E2'
    },
    {
        id:uuidv4(),
        titulo: 'DevOps',
        colorPrimario: '#E06B69',
        colorSegundario: '#FDE7E8'
    },
    {
        id:uuidv4(),
        titulo: 'Móvil',
        colorPrimario: '#FFBA05',
        colorSegundario: '#FFF5D9'
    },
    {
        id:uuidv4(),
        titulo: 'Innovación',
        colorPrimario: '#FF8A29',
        colorSegundario: '#FFEEDF'
    }
  ])

  const CambiarEstado = () =>{
    EstadoFormulario(!ManejarEstadoFormulario)
    
  }


  
  const NuevoEquipo = (datosNuevoEquipo)=>{
    setOpcionesEquipo([...opcionesEquipo,{...datosNuevoEquipo, id: uuidv4()} ])
    
  }
  
  const ColorInput = (valor,id)=>{
   
   
    
    let valorColor = opcionesEquipo.map((equipo)=>{
       if (id === equipo.id) {
          equipo.colorPrimario = valor 

       }
       return equipo
    })

    setOpcionesEquipo(valorColor)
  }
  
  const EliminarColaborador = (id)=>{
   
    const NuevosColaboradores = ManejarEstadoDeDatos.filter((colaborador) => colaborador.id !== id )

    setManejarEstadoDeDatos(NuevosColaboradores)

  }
 
  const DatosDeFormulario = (colaborador) =>{
    setManejarEstadoDeDatos([...ManejarEstadoDeDatos, colaborador])
  }

  const like =  (id) =>{
      const Favorito = ManejarEstadoDeDatos.map((colaborador)=>{
        if( colaborador.id === id ){
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })

      setManejarEstadoDeDatos(Favorito)
  }

  

  return (
    <>
      <div className='cabecera'>

        <Header></Header>
        <MiORG titulo={'Mi Organizacion'}   estado={CambiarEstado} estadoVer={ManejarEstadoFormulario} ></MiORG>
        {ManejarEstadoFormulario  ? <Formulario datosColaborador={DatosDeFormulario} datosNuevoEquipo={NuevoEquipo} datoTituloOpciones={opcionesEquipo.map( (equipo)=> equipo.titulo )} />: <></> }
        {
          opcionesEquipo.map( (equipo)=> {
           
            return <Equipo 
                    valorColaboradores={ManejarEstadoDeDatos}
                    datos={equipo}
                    key={equipo.titulo}
                    eliminarColaborador={EliminarColaborador}
                    colorInput={ColorInput}
                    like={like}></Equipo>
          } )
        }

        <Footer></Footer>
        

      </div>
    
    </>
  )
}

export default App

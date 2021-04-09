import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import LinksMaterias from '../LinksMaterias'
import MatematicaBasica from './MatematicaBasica'

const Matematica = () => {
  const materias = [
    {
      nome:"Matematica Básica",
      id:"MatematicaBasica"
    },
    {
      nome:"Funções",
      id:"funcoes"
    },
    {
      nome:"Trigonometria",
      id:"Trigonometria"
    }
  ]

  return (
    <div className='containerHome'  style={{minHeight:'30vw'}}>
      <Link to='/Disciplinas/Matematica' ><h1>MateMática</h1></Link>
      <Routes>
        <Route path='' element={<LinksMaterias Disciplina='Matematica' materias={materias}/>}/>
        <Route path='/MatematicaBasica/*' element={<MatematicaBasica/>}/>
      </Routes>
    </div>
  )
}

export default Matematica

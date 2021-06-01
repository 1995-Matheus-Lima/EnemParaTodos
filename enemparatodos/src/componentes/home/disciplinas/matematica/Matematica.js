import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import LinksMaterias from '../LinksMaterias'
import Funcoes from './Funcoes'
import MatematicaBasica from './MatematicaBasica'
import Logaritmos from './Logaritmos'
import Trigonometria from './Trigonometria'
import SequenciasMatrizesDeterminantesESistemas from './SequenciasMatrizesDeterminantesESistemas'
import AnaliseCombinatoria from './AnaliseCombinatoria'
import ComplexosEPolinomios from './ComplexosEPolinomios'
import GeometriaAnalitica from './GeometriaAnalitica'
const Matematica = () => {
  const title = document.querySelector('title')
  title.innerText = 'E.P.T | MATEMÁTICA'
  const materias = [
    {
      nome:"matematica Básica",
      id:"MatematicaBasica"
    },
    {
      nome:"Funções e Conjuntos",
      id:"Funcoes"
    },
    {
      nome:"exponencial e Logaritmo",
      id:"Logaritmos"
    },
    {
      nome:"Trigonometria",
      id:"Trigonometria"
    },
    {
      nome:"Sequencias, Matrizes, Determinantes E Sistemas",
      id:"SequenciasMatrizesDeterminantesESistemas"
    },
    {
      nome:"Análise Combinatória",
      id:"AnaliseCombinatoria"
    },
    {
      nome:"Números Complexos E Polinômios",
      id:"ComplexosEPolinomios"
    },
    {
      nome:"Geometria Analítica",
      id:"GeometriaAnalitica"
    },  
  ]

  return (
    <div className='containerHome'  style={{minHeight:'30vw'}}>
      <Link to='/Disciplinas/Matematica' ><h1>MateMática</h1></Link>
      <Routes>
        <Route path='' element={<LinksMaterias Disciplina='Matematica' materias={materias}/>}/>
        <Route path='/MatematicaBasica/*' element={<MatematicaBasica/>}/>
        <Route path='/Funcoes/*' element={<Funcoes/>}/>Trigonometria
        <Route path='/Logaritmos/*' element={<Logaritmos/>}/>
        <Route path='/Trigonometria/*' element={<Trigonometria/>}/>
        <Route path='/SequenciasMatrizesDeterminantesESistemas/*' element={<SequenciasMatrizesDeterminantesESistemas/>}/>
        <Route path='/AnaliseCombinatoria/*' element={<AnaliseCombinatoria/>}/>
        <Route path='/ComplexosEPolinomios/*' element={<ComplexosEPolinomios/>}/>
        <Route path='/GeometriaAnalitica/*' element={<GeometriaAnalitica/>}/>
      </Routes>
    </div>
  )
}

export default Matematica

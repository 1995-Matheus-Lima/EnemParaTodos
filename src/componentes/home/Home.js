import React from 'react'
import Simulador from './simulador/Simulador'
import ConhecimentoDeMundo from './conhecimentoDeMundo/ConhecimentoDeMundo'
import DicasDeEstudos from './dicasDeEstudo/DicasDeEstudos'
import Disciplinas from './disciplinas/Disciplinas'
import MinisteriodaEducacao from './mec/MinisteriodaEducacao'

const Home = () => {
  const title = document.querySelector('title')
  title.innerText = 'E.P.T | HOME'
  return (
    <div>
      <Disciplinas/>
      <MinisteriodaEducacao/>
      <ConhecimentoDeMundo/>
      <DicasDeEstudos/>
      <Simulador />
    </div>
  )
}

export default Home

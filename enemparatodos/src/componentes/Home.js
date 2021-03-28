import React from 'react'
import Calculator from './Calculator'
import ConhecimentoDeMundo from './ConhecimentoDeMundo'
import DicasDeEstudos from './DicasDeEstudos'
import Disciplinas from './Disciplinas'
import MinisteriodaEducacao from './MinisteriodaEducacao'

const Home = () => {
  const title = document.querySelector('title')
  title.innerText = 'E.P.T | HOME'
  return (
    <div>
      <Disciplinas/>
      <MinisteriodaEducacao/>
      <ConhecimentoDeMundo/>
      <DicasDeEstudos/>
      <Calculator />
    </div>
  )
}

export default Home

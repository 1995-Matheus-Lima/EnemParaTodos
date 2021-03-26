import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from './Calculator'
import DicasDeEstudos from './DicasDeEstudos'
import MinisteriodaEducacao from './MinisteriodaEducacao'

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route/>
      </Routes>
      <MinisteriodaEducacao/>
      <DicasDeEstudos/>
      <Calculator />
    </BrowserRouter>
  )
}

export default Home

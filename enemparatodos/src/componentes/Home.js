import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from './Calculator'

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route/>
      </Routes>
      <Calculator />
    </BrowserRouter>
  )
}

export default Home

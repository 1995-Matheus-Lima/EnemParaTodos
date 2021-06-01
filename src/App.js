import React from 'react'
import Footer from './componentes/home/footer/Footer';
import Header from './componentes/home/header/Header';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/home/Home';
import PaginaNaoEncontrada from './componentes/fallback/PaginaNaoEncontrada';
import Matematica from './componentes/home/disciplinas/matematica/Matematica';


const App = () => {
  return (
    <div className="principal">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/Disciplinas/Matematica/*' element={<Matematica/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<PaginaNaoEncontrada/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

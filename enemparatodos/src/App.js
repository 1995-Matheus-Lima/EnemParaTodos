import React from 'react'
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/Home';
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada';


const App = () => {
  return (
    <div className="principal">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<PaginaNaoEncontrada/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App

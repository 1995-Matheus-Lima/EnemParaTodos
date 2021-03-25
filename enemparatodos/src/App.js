import React from 'react'
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home';
import './index.css';

const App = () => {
  return (
    <div className="principal">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App

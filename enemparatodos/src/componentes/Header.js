import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const VoltarHome = (event) => {
    event.target.innerText = "Voltar Para Home"
  }
  const HandleOut = (event) =>{
    event.target.innerText = "Enem Para Todos"
  }
  return (
    <>
      <div className="HeaderMenu" >
       <Link to='/' onMouseOut={(event) => HandleOut(event)} onMouseEnter={(event) => VoltarHome(event)}><h1>Enem para todos</h1></Link>
      </div>
    </>
  )
}

export default Header

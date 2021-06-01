import React from 'react'

const PaginaNaoEncontrada = () => {
  const title = document.querySelector('title')
  title.innerText = 'E.P.T | Erro 404'
  return (
    <div className='containerHome'>
      <h1>Erro 404 : Página não encontrada</h1>
    </div>
  )
}

export default PaginaNaoEncontrada

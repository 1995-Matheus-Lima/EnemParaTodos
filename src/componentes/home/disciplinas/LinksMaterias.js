import React from 'react'
import { Link } from 'react-router-dom'

const LinksMaterias = ({ materias, Disciplina }) => {
  return (
    <nav className='linksInternosCss' >
      {materias.map(({id,nome}) => <Link key={id} to={`/Disciplinas/${Disciplina}/${id}`}>{nome}</Link>)}
    </nav>
  )
}

export default LinksMaterias

import React from 'react'
import { Link } from 'react-router-dom'

const LinkDisciplinas = ({disciplinas}) => {
  return (
    <nav className='linksInternosCss'>
      {disciplinas.map(({id,nome}) => <Link key={id} to={`Disciplinas/${id}`}>{nome}</Link>)}
    </nav>
  )
}

export default LinkDisciplinas

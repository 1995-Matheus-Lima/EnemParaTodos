import React from 'react'
import LinkDisciplinas from './LinkDisciplinas'

const Disciplinas = () => {
  const disciplinas = [
    {nome:'Biologia',
     id:'Biologia', 
    },
    {nome:'Filosofia',
    id:'Filosofia', 
    },
    {nome:'Física',
    id:'Fisica', 
    },
    {nome:'Geografia',
    id:'Geografia', 
   },
   {nome:'História',
   id:'Historia', 
   },
   {nome:'História da arte',
   id:'HistoriaDaArte', 
   },
   {nome:'Linguagens',
   id:'Linguagens', 
   },
   {nome:'Matemática',
   id:'Matematica', 
   },
   {nome:'Química',
   id:'Quimica', 
   },
   {nome:'Redação',
   id:'Redacao', 
   },
   {nome:'Resolução Enem',
   id:'ResolucaoEnem', 
   },
   {nome:'Sociologia',
   id:'Sociologia', 
   },
  ]
 
  return (
    <div className='containerHome'>
      <h1>Disciplinas</h1>
      <LinkDisciplinas disciplinas={disciplinas}/>
    </div>
  )
}

export default Disciplinas

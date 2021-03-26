import React from 'react'
import LinksExternosHome from './LinksExternosHome'

const MinisteriodaEducacao = () => {
  const elementos = [ 
    {nome:"Site Oficial",
     link:"https://www.gov.br/mec/pt-br"    
    },
    {
      nome:"Facebook",
      link:"https://www.facebook.com/ministeriodaeducacao"
    },
    {
      nome:"Twitter",
      link:"https://twitter.com/mec_comunicacao"
    },
    {
      nome:"Instagram",
      link:"https://www.instagram.com/mineducacao/"
    },
    {
      nome:"Página do Participante",
      link:"https://enem.inep.gov.br/participante/#!/"
    },
    {
      nome:"Provas Antigas",
      link:"http://portal.inep.gov.br/provas-e-gabaritos"
    }
  ]
  return (
    <div className='containerHome' >
      <h1>Ministério da Educação</h1>
      <LinksExternosHome elementos={elementos}/>
    </div>
  )
}

export default MinisteriodaEducacao

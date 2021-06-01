import React from 'react'
import LinksExternosHome from '../LinksExternosHome'

const ConhecimentoDeMundo = () => {
  const elementos = [
    {
      nome:"BBC News Brasil",
      link:"https://www.youtube.com/user/BBCBrasil"
    },
    {
      nome:"Jornalismo TV Cultura",
      link:"https://www.youtube.com/user/jornaldacultura"
    },
    {
      nome:"Manual do Mundo",
      link:"https://www.youtube.com/user/iberethenorio"
    },
    {
      nome:"mimimidias",
      link:"https://www.youtube.com/channel/UCg0CfiR_iKjBOYgeHps17BA"
    },
    {
      nome:"Nerdologia",
      link:"https://www.youtube.com/user/nerdologia"
    },
    {
      nome:"Território Conhecimento",
      link:"https://www.youtube.com/channel/UCLtgh-Q-yHkYjeiY7NSPieA"
    }
  ]
  return (
    <div className='containerHome'>
      <h1>Repertório SocioCultural</h1>
      <LinksExternosHome elementos={elementos}/>
    </div>
  )
}

export default ConhecimentoDeMundo

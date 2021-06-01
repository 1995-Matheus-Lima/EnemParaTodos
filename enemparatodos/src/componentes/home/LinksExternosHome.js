import React from 'react'

const LinksExternosHome = ({elementos}) => { 
  return(
    
    <div className="LinksExternosHomeCss">
      {// eslint-disable-next-line react/jsx-no-target-blank
      (elementos.map((elemento,index) => <a key={index } href={elemento.link} target="_blank"> {elemento.nome}</a>))}
    </div>
  )
}

export default LinksExternosHome

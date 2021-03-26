import React from 'react'
import LinksExternosHome from './LinksExternosHome'

const DicasDeEstudos = () => {
  const elementos = [
    {
      nome:"Carol Batista",
      link:"https://www.youtube.com/channel/UC6xjw2NnCbgZ4cpQdId5elw"
    },  {
      nome:"Débora  Aladin",
      link:"https://www.youtube.com/user/deboraaladim"
    },  {
      nome:"Felipe Araujo",
      link:"https://www.youtube.com/user/MrFeehAraujo"
    },  {
      nome:"Lucas Felpi",
      link:"https://www.youtube.com/channel/UCXo0OpedoMJG8WEvHLRVTEg"
    },  {
      nome:"Mediários",
      link:"https://www.youtube.com/channel/UC0o49ts5HZA0OERbIVedHyw"
    },  {
      nome:"Umberto Mannarino",
      link:"https://www.youtube.com/user/exatasexatas"
    },
  ] 
  return (
    <div className='containerHome'>
      <h1>Dicas De Estudos</h1>
      <LinksExternosHome elementos={elementos}/>
    </div>
  )
}

export default DicasDeEstudos

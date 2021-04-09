import React from 'react'
import { Link } from 'react-router-dom'

const ShowAulas = ({Aulas  , setVideos}) => {
  const DefineAulas = (conteudo) => {
    setVideos(conteudo)
  }

  return (
    <div className={"ShowAulas"}>
      {Aulas.map((aula,index)=>{
        return(
          <div key={aula + index}>
            <h3>{aula.Subtitulo}</h3>
            {aula.Conteudo.map((Conteudo, index) =>{
              return(
                
                  <Link key={index} to={`/Disciplinas/Matematica/MatematicaBasica/${Conteudo.id}`} onClick={()=>{DefineAulas(Conteudo)}}>{Conteudo.nome}</Link>
             
              )
            })}
          </div>
        )})
      }
    </div>
  )
}

export default ShowAulas

import React from 'react'

const ShowAulas = ({Aulas}) => {

  return (
    <div className={"ShowAulas"}>
      {Aulas.map((aula,index)=>{
        return(
          <div key={aula + index}>
            <h3>{aula.Subtitulo}</h3>
            {aula.Conteudo.map((Conteudo, index) =>{
              return(
                <p key={index}>
                  {<a>{Conteudo.nome}</a>}
                </p>
              )
            })}
          </div>
        )})
      }
    </div>
  )
}

export default ShowAulas

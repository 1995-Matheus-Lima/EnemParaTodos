import React from 'react'
import { Link, useLocation, useNavigate, } from 'react-router-dom'

const ShowAulas = ({Aulas  , setVideos, back}) => {
  const DefineAulas = (conteudo) => {
    setVideos(conteudo)
  }
  let local = useLocation();
  const navegacao = useNavigate()
 
  React.useEffect(() => {
    if (local.pathname !== back){
      navegacao(back)
    }
  }, [local.pathname, navegacao,back])
  console.log(back);
  return (
    <div className={"ShowAulas"}>
      {Aulas.map((aula,index)=>{
        return(
          <div key={aula + index}>
            <h3>{aula.Subtitulo}</h3>
            {aula.Conteudo.map((Conteudo, index) =>{
              return(
                <Link key={index} to={`${back}/${Conteudo.id}`} onClick={()=>{DefineAulas(Conteudo)}}>{Conteudo.name}</Link>
              )
            })}
          </div>
        )})
      }
    </div>
  )
}

export default ShowAulas

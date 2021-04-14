import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const Funcoes = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const teste = {
    Subtitulo:"teste",
    Conteudo:[{
      name:"teste",
      id:"teste",
      videos:[
        {
          name:"teste",
          acessKey:"Le8ZEFngkRo",
        },
        {
          name:"a",
          acessKey:"Le8ZEFngkRo",
        },
      ]
    },
    {
      name:"a",
      id:"Le8ZEFngkRo",
      videos:[
        {
          name:"a",
          acessKey:"Le8ZEFngkRo",
        },
        {
          name:"a",
          acessKey:"Le8ZEFngkRo",
        },
      ]
    }]
  }
 
  const Aulas = [teste];
  const back = '/Disciplinas/Matematica/Funcoes'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/Funcoes">
        <h2 className="h2ShowAula">Funções</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default Funcoes

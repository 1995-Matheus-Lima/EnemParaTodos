import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const GeometriaEspacial = () => {
  const [Videos, setVideos] = React.useState(null);
 
 
  const Primitiva = {
    Subtitulo:"noções e proposições primitivas",
    Conteudo:[
      {
        name:"noções e proposições primitivas",
        id:"Nocoes_Primitivas",
        videos:[
          {
            name:"Professor Paulo Pereira: Conceitos Primitivos e Definições iniciais",
            acessKey:"XAK7m6SRLPw",
          },
          {
            name:"Professor warlisson: Noções primitivas",
            acessKey:"Y9M4E1f90E8",
          },   {
            name:"Estudo em Série: Postulados e Noções Primitivas",
            acessKey:"cN2w1FeW-qo",
          },
          {
            name:"Desenho Geométrico:  Noções e Proposições Primitivas",
            acessKey:"BTCA5apSc6Q",
           },
        ]
      },
    ]
  }

  const Aulas = [Primitiva];
  const back = '/Disciplinas/matematica/GeometriaEspacial'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/GeometriaEspacial">
        <h2 className="h2ShowAula">Geometria Espacial</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default GeometriaEspacial;

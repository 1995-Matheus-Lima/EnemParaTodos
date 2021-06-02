import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const GeometriaPlana = () => {
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
  const SegmentoDeReta = {
    Subtitulo:"Segmento De Reta",
    Conteudo:[
      {
        name:"Segmento De Reta",
        id:"Segmento_De_Reta",
        videos:[
          {
            name:"Professora Gis: Reta, semirreta e segmento de reta",
            acessKey:"FG0lcfR6-Cg",
          },
          {
            name:"Professora Gis: SEGMENTOS de RETA: CONGRUENTES, CONSECUTIVOS, COLINEARES e ADJACENTES",
            acessKey:"CeoJyYENKcY",
          },
          {
            name:"Professora Angela: Você sabe a diferença entre: RETA, SEMIRRETA e SEGMENTO DE RETA",
            acessKey:"DLSYKM6wFXU",
          },
          {
            name:"Professor Ítalo Benfica: Reta, semirreta e segmento de reta",
            acessKey:"5eCsLGsrjJA",
          },
          {
            name:"Professor Marcos Paulo: Segmento de reta",
            acessKey:"B-6zWcW5tYw",
          },
          {
            name:"Professora Gisele Ramos: Segmentos consecutivos e colineares",
            acessKey:"GTd4-GJDkyw",
          },
        ]
      },
    ]
  }

  const Aulas = [Primitiva,SegmentoDeReta];
  const back = '/Disciplinas/matematica/GeometriaPlana'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/GeometriaPlana">
        <h2 className="h2ShowAula">GeometriaPlana</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default GeometriaPlana;

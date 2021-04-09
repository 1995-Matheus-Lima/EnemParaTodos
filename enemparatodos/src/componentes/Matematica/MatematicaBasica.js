import React from 'react'
import { Route, Routes } from 'react-router';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const MatematicaBasica = () => {
  const [Videos, setVideos] = React.useState({});
  const Algebra = {
    Subtitulo:"Álgebra",
    Conteudo:[{
      nome:"Adição",
      id:"Adicao",
      videos:[
        {
          nome:"Professor Ferreto: Adição",
          acessoKey:"az6OYFS7AUA",
          href:"https://www.youtube.com/watch?v=az6OYFS7AUA&t=6s"
        },
        {
          nome:"Professor Marcos Aba: Adição para crianças",
          acessoKey:"HdbZqAXQm3o",
          href:"https://youtu.be/HdbZqAXQm3o"
        },
      ]
    },
    {
      nome:"Subtração",
      id:"Subtracao",
      videos:[
        {
          nome:"Professor Ferreto: Adição",
          acessoKey:"az6OYFS7AUA",
          href:"https://www.youtube.com/watch?v=az6OYFS7AUA&t=6s"
        },
        {
          nome:"Professor Marcos Aba: Adição para crianças",
          acessoKey:"HdbZqAXQm3o",
          href:"https://youtu.be/HdbZqAXQm3o"
        },
      ]
    }]
  }
  const Geometria = {
    Subtitulo:"Geometria",
    Conteudo:[{
      nome:"Adição",
      id:"Adicao",
      videos:[
        {
          nome:"Professor Ferreto: Adição",
          acessoKey:"az6OYFS7AUA"
        },
        {
          nome:"Professor Marcos Aba: Adição para crianças",
          acessoKey:"HdbZqAXQm3o",
        },
      ]
    },
    {
      nome:"Subtração",
      id:"Subtracao",
      videos:[
        {
          nome:"Professor Ferreto: Adição",
          acessoKey:"az6OYFS7AUA"
        },
        {
          nome:"Professor Marcos Aba: Adição para crianças",
          acessoKey:"HdbZqAXQm3o",
        },
      ]
    }]
  }
  const Aulas = [Algebra,Geometria];
  return (
    <div>
      <h2 className="h2ShowAula">Matemática Básica </h2>
      <Routes>
       <Route path='' element={<ShowAulas Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={<ShowVideos Videos = {Videos}/>}/>
      </Routes>
    </div>
  )
}

export default MatematicaBasica

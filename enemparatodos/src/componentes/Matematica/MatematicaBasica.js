import React from 'react'
import ShowAulas from '../ShowAulas';

const MatematicaBasica = () => {
  const [mostrarAulas, setmostrarAulas] = React.useState(true)
  const Algebra = {
    Subtitulo:"Álgebra",
    Conteudo:[{
      nome:"Adição",
      id:"Adicao",
      videos:[
        {
          nome:"Professor Ferreto: Adição",
          href:"https://www.youtube.com/watch?v=az6OYFS7AUA"
        },
        {
          nome:"Professor Marcos Aba: Adição para crianças",
          href:"https://www.youtube.com/watch?v=HdbZqAXQm3o",
        },
      ]
    },
    {
      nome:"Subtração",
      id:"Subtracao",
      videos:[
        {
          nome:"Professor Ferreto: Adição",
          href:"https://www.youtube.com/watch?v=az6OYFS7AUA"
        },
        {
          nome:"Professor Marcos Aba: Adição para crianças",
          href:"https://www.youtube.com/watch?v=HdbZqAXQm3o",
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
          href:"https://www.youtube.com/watch?v=az6OYFS7AUA"
        },
        {
          nome:"Professor Marcos Aba: Adição para crianças",
          href:"https://www.youtube.com/watch?v=HdbZqAXQm3o",
        },
      ]
    },
    {
      nome:"Subtração",
      id:"Subtracao",
      videos:[
        {
          nome:"Professor Ferreto: Adição",
          href:"https://www.youtube.com/watch?v=az6OYFS7AUA"
        },
        {
          nome:"Professor Marcos Aba: Adição para crianças",
          href:"https://www.youtube.com/watch?v=HdbZqAXQm3o",
        },
      ]
    }]
  }
  const Aulas = [Algebra,Geometria];
  return (
    <div>
      <h2 className="h2ShowAula">Matemática Básica </h2>
      {mostrarAulas && <ShowAulas Aulas = {Aulas}/>}
    </div>
  )
}

export default MatematicaBasica

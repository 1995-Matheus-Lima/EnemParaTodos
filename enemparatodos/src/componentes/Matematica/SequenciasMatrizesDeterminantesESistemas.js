import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const SequenciasMatrizesDeterminantesESistemas = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const ArcoseAngulos = {
    Subtitulo:"Arcos e Angulos",
    Conteudo:[
      {
      name:"Arcos De circunferência",
      id:"Arcos_De_circunferencia",
      videos:[
        {
          name:"Professor Ferretto: Arco, ângulo e raio de uma circunferência ",
          acessKey:"wpXOmatuTKo",
        },
        {
          name:"Professora Gisele Ramos: Arco da circunferência e ângulo central",
          acessKey:"i1LjWiiurdw",
        },
        {
          name:"Professor Rafael Procopio: Arco da circunferência e ângulo central",
          acessKey:"rgOm_9P82j0",
        },
      ]
    },
    {
      name:"Ciclo trigronometrico",
      id:"Ciclo_trigronometrico",
      videos:[
        {
          name:"Professor Marcos Aba: Seno, Cosseno e tangente",
          acessKey:"a7Gu5GzGRgE",
        },
        {
          name:"Professor Gui: Ciclo Trigonométrico",
          acessKey:"PjqZMWZ6t9Q",
        },
        {
          name:"Professor Rafa Jesus: Ciclo Trigonométrico",
          acessKey:"eR9i5AJZMi0",
        },
        {
          name:"Professor Paulo Pereira: CIRCUNFERÊNCIA TRIGONOMÉTRICA",
          acessKey:"8gwCPpp_Ujo",
        },
      ]
    },
   ]
  }

  const Aulas = [ ArcoseAngulos,];
  const back = '/Disciplinas/Matematica/SequenciasMatrizesDeterminantesESistemas'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/SequenciasMatrizesDeterminantesESistemas">
        <h2 className="h2ShowAula">Sequencias, Matrizes, Determinantes E Sistemas</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default SequenciasMatrizesDeterminantesESistemas;

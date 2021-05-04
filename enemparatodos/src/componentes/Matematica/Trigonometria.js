import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const Funcoes = () => {
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
  const FuncoesCirculares = {
    Subtitulo:"Funções circulares",
    Conteudo:[
      {
      name:"Funções Periódicas",
      id:"Funcoes_Periodicas",
      videos:[
        {
          name:"Professora ROBERTA MASTROCHIRICO: Funções Periódicas",
          acessKey:"xQwHalxGYUU",
        },
        {
          name:"Professor Silvio freitas: Funções Periódicas",
          acessKey:"0JdLjJgBJaw",
        },
        {
          name:"Professora Gustavo adolfo soares: Funções Periódicas",
          acessKey:"8gjnKW7xiCI",
        },  
      ]
    },
    {
      name:"Função Seno",
      id:"Funcao_Seno",
      videos:[
        {
          name:"Professor Bruno: Função Seno",
          acessKey:"O1JCMiXfWY4",
        },
        {
          name:"Professor Silvio freitas: A Função Seno",
          acessKey:"ndz00gjrJVo",
        },
        {
          name:"Professora Gustavo adolfo soares: Funções Seno",
          acessKey:"LuE9INM3Bl4",
        },  
      ]
    },
    {
      name:"Função Cosseno",
      id:"Funcao_Cosseno",
      videos:[
        {
          name:"Professor Bruno: Função cosseno",
          acessKey:"8wVXd1TJsGM",
        },
        {
          name:"Professor Aquino: função Cosseno - Definição, Gráfico e Propriedades.",
          acessKey:"f-ERlwALrds",
        },
        {
          name:"Professora Gustavo adolfo soares: Função cosseno",
          acessKey:"wHzCJqlYqhQ",
        },  
      ]
    },
    {
      name:"Função Tangente",
      id:"Funcao_Tangente",
      videos:[
        {
          name:"Professor Bruno: Função Tangente",
          acessKey:"YnJE5CkGdy0",
        },
        {
          name:"Professor Aquino: Função Tangente - Definição, Gráfico e Propriedades",
          acessKey:"dRUPrNttQAM",
        },
        {
          name:"Professora Gustavo adolfo soares: A função tangente",
          acessKey:"3p1qtsUniCI",
        },  
      ]
    },
    {
      name:"Função Cotangente",
      id:"Funcao_Cotangente",
      videos:[
        {
          name:"Professora cris: Função cotangente",
          acessKey:"011MG9lP3ns",
        },
        {
          name:"Professor Aquino: Função Cotangente - Definição, Gráfico e Propriedades.",
          acessKey:"1sIEESB7U0U",
        },
        {
          name:"Professora Mário andré: Função cotangente",
          acessKey:"o-7jUNCHny0",
        },  
      ]
    },
    {
      name:"Função secante",
      id:"Funcao_Secante",
      videos:[
        {
          name:"Professor Aquino: Função Secante - Definição, Gráfico e Propriedades.",
          acessKey:"GYWlVcZfZ3M",
        },
        {
          name:"O kuadro: Função Secante",
          acessKey:"iZ13GqJQnQM",
        },
        {
          name:"Professora Gustavo Adolfo: Funções secante e cossecante",
          acessKey:"2oBpNUw7vIg",
        },  
      ]
    },
    {
      name:"Função Cossecante",
      id:"Funcao_Cossecante",
      videos:[
        {
          name:"Professor Aquino: Função cossecante - Definição, Gráfico e Propriedades.",
          acessKey:"3Sfin8LMSag",
        },
        {
          name:"O kuadro: Função cossecante",
          acessKey:"UX85QjO4bd8",
        },
        {
          name:"Professora Gustavo Adolfo: Funções secante e cossecante",
          acessKey:"2oBpNUw7vIg",
        },  
      ]
    },
   ]
  }
  
  
  const Aulas = [ ArcoseAngulos, FuncoesCirculares ];
  const back = '/Disciplinas/Matematica/Trigonometria'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/Trigonometria">
        <h2 className="h2ShowAula">Trigonometria</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default Funcoes

import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const AnaliseCombinatoria = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const AnaliseCombinatoriaAulas = {
    Subtitulo:"ANÁLISE COMBINATÓRIA",
    Conteudo:[
      {
      name:"ANÁLISE COMBINATÓRIA",
      id:"ANALISE_COMBINATORIA",
      videos:[
        {
          name:"Professora Angela: Introdução ao Curso de ANÁLISE COMBINATÓRIA",
          acessKey:"ihYehubzSsI",
        },
        {
          name:"Professora Angela: Princípio Fundamental da Contagem",
          acessKey:"3dm6pq6akQI",
        },
        {
          name:"Professora Angela: Fatorial de um Número e Permutações Simples",
          acessKey:"PS1owQf_pt8",
        },
        {
          name:"Professora Angela: Permutações com Repetição",
          acessKey:"JzpQzOaIh2M",
        },
        {
          name:"Professora Angela: Arranjos Simples",
          acessKey:"XbcuJk00iuw",
        },
        {
          name:"Professora Angela: Combinações Simples",
          acessKey:"O35Tcw3xAqE",
        },
        {
          name:"Professora Angela: Arranjos Simples e Combinações Simples",
          acessKey:"UxSsr803Hyo",
        },
        {
          name:"Professora Angela: Números Binomiais",
          acessKey:"OMrzGeJJ5iY",
        },
        {
          name:"Professora Angela: Triângulo de Pascal",
          acessKey:"qaMqPZjArpI",
        },
        {
          name:"Professora Angela: Binômio de Newton",
          acessKey:"iMse4MaJDns",
        },
      ]
    }
   ]
  }
  const BinomioDeNewton = {
    Subtitulo:"Binômio De Newton",
    Conteudo:[
      {
      name:"Binômio De Newton",
      id:"Binomio_De_Newton",
      videos:[
        {
          name:"Professor Paulo pereira: Números Binomiais",
          acessKey:"YPCemH1cCYw",
        },
        {
          name:"Professor Paulo pereira: Triângulo de Pascal",
          acessKey:"wfEakEAizMA",
        },
        {
          name:"Professor Paulo pereira: Desenvolvimento do BINÔMIO DE NEWTON",
          acessKey:"LiiMWZTKcnA",
        },
        {
          name:"Professor Paulo pereira: Termo Geral do BINÔMIO DE NEWTON",
          acessKey:"1O2gWAR609w",
        },
      ]
    }
   ]
  }
  const Probabilidade = {
    Subtitulo:"Probabilidade",
    Conteudo:[
      {
      name:"Probabilidade",
      id:"Probabilidade",
      videos:[
        {
          name:"Professor Paulo pereira: CONCEITOS BÁSICOS",
          acessKey:"8g571hUvgeo",
        },
        {
          name:"Professor Paulo pereira: CÁLCULO DE PROBABILIDADES",
          acessKey:"_AaYS_kTvps",
        },
        {
          name:"Professor Paulo pereira: PROBABILIDADE DA UNIÃO DE DOIS EVENTOS",
          acessKey:"QkO3HJgzTrA",
        },
        {
          name:"Professor Paulo pereira: PROBABILIDADE CONDICIONAL",
          acessKey:"uo16XTg2CIQ",
        },
        {
          name:"Professor Paulo pereira: PRODUTO DE PROBABILIDADES",
          acessKey:"VifuLscFmV0",
        },
        {
          name:"Professor Paulo pereira: PROBABILIDADE DO EVENTO COMPLEMENTAR",
          acessKey:"Fk8IfLvx7g0",
        },
        {
          name:"Professor Paulo pereira: PROBABILIDADE NA UERJ",
          acessKey:"kqV7SLlbgb8",
        },
        {
          name:"Professor Paulo pereira: ÁRVORE DE PROBABILIDADES",
          acessKey:"GwAhOeOz8gY",
        },
        {
          name:"Professor Paulo pereira: EXERCÍCIO - RESOLUÇÃO EXATAS",
          acessKey:"hlKUo3zcfYY",
        },
        {
          name:"Professor Paulo pereira: EXERCÍCIO - RESOLUÇÃO EXATAS 2",
          acessKey:"npbw4EsUV_E",
        },
      ]
    }
   ]
  }
  const Aulas = [AnaliseCombinatoriaAulas, BinomioDeNewton, Probabilidade];
  const back = '/Disciplinas/matematica/AnaliseCombinatoria'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/AnaliseCombinatoria">
        <h2 className="h2ShowAula">Análise Combinatória</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default AnaliseCombinatoria;

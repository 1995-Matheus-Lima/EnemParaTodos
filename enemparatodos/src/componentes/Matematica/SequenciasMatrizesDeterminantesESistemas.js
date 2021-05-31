import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const SequenciasMatrizesDeterminantesESistemas = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const ProgressaoAritmetica = {
    Subtitulo:"Progressão Aritmética",
    Conteudo:[
      {
      name:"Progressão Aritmética",
      id:"Progressao_Aritmetica",
      videos:[
        {
          name:"Professor Ferretto: Introdução",
          acessKey:"TC2HcZV3mGo",
        },
        {
          name:"Professor Ferretto: Termo Geral da PA",
          acessKey:"yfmhfoB0kVA",
        },
        {
          name:"Professor Ferretto: Termo Geral da PA  Exercícios",
          acessKey:"dzoloHN076c",
        },
        {
          name:"Professor Ferretto: Notações Especiais",
          acessKey:"qoX9HFbYbK4",
        },
        {
          name:"Professor Ferretto: Interpolação de Meios Aritmético",
          acessKey:"PGDk9ZHPudg",
        },
        {
          name:"Professor Ferretto: Soma dos Termos",
          acessKey:"vyJGTm6WvdU",
        },
      ]
    }
   ]
  }
  const ProgressaoGeometrica = {
    Subtitulo:"Progressão Geométrica",
    Conteudo:[
      {
      name:"Progressão Geométrica",
      id:"Progressao_Geometrica",
      videos:[
        {
          name:"Professor Ferretto: Introdução",
          acessKey:"Jad_XG9bDCE",
        },
        {
          name:"Professor Ferretto: Termo Geral da PG",
          acessKey:"0rRuhofRVuU",
        },
        {
          name:"Professor Ferretto: Termo Geral da PG  Exercícios",
          acessKey:"6ShsVLOtGQI",
        },
        {
          name:"Professor Ferretto: Notações Especiais",
          acessKey:"NM9H8__q4gU",
        },
        {
          name:"Professor Ferretto: Interpolação de de Meios Geométricos",
          acessKey:"Hsp10bhYQEs",
        },
        {
          name:"Professor Ferretto: Soma dos Termos de uma PG Finita ",
          acessKey:"CDZYMkxv2JA",
        },
        {
          name:"Professor Ferretto: Soma dos Termos de uma PG Infinita ",
          acessKey:"N_EatIhGANo",
        },
        {
          name:"Professor Ferretto: Exercícios de PA e PG Simultaneamente",
          acessKey:"ANwGhVVhs-s",
        },
      ]
    }
   ]
  }
  const Matrizes = {
    Subtitulo:"Matrizes",
    Conteudo:[
      {
      name:"Matrizes",
      id:"Matrizes",
      videos:[
        {
          name:"Professor Paulo Pereira: Conceitos Iniciais",
          acessKey:"lZ9onrdpusA",
        },
        {
          name:"Professor Paulo Pereira: Lei de Formação",
          acessKey:"k2ssH1Hx9Yg",
        },
        {
          name:"Professor Paulo Pereira: TRANSPOSTA, SIMÉTRICA E ANTISSIMÉTRICA",
          acessKey:"3hTlEWrGtf8",
        },
        {
          name:"Professor Paulo Pereira: IGUALDADE, MULTIPLICAÇÃO POR ESCALAR, ADIÇÃO E SUBTRAÇÃO",
          acessKey:"PCzXBP-TA-s",
        },
        {
          name:"Professor Paulo Pereira: MULTIPLICAÇÃO",
          acessKey:"eCmv6v53V88",
        },
        {
          name:"Professor Paulo Pereira: MATRIZ INVERSA",
          acessKey:"wfDoPGfo2fE",
        },
      ]
    }
   ]
  }
  const Determinantes = {
    Subtitulo:"Determinantes",
    Conteudo:[
      {
      name:"Determinantes",
      id:"Determinantes",
      videos:[
        {
          name:"Professor Paulo Pereira: ORDENS 1, 2 E 3 (REGRA DE SARRUS)",
          acessKey:"XaZZNxj26qU",
        },
        {
          name:"Professor Paulo Pereira: O TEOREMA DE LAPLACE",
          acessKey:"726AOpEEXrw",
        },
        {
          name:"Professor Paulo Pereira: PROPRIEDADES",
          acessKey:"939xOYVcJ2I",
        },
        {
          name:"Professor Paulo Pereira: TEOREMA DE JACOB",
          acessKey:"3DinmEi5ygQ",
        },
        {
          name:"Professor Paulo Pereira: REGRA DE CHIÓ",
          acessKey:"hKf9KktbvDI",
        },
        {
          name:"Professor Paulo Pereira: DETERMINANTE DE VANDERMONDE",
          acessKey:"iv8YNa_jXMQ",
        },
      ]
    }
   ]
  }
  const SistemasLineares = {
    Subtitulo:"Sistemas Lineares",
    Conteudo:[
      {
      name:"Sistemas Lineares",
      id:"Sistemas_Lineares",
      videos:[
        {
          name:"Professor Paulo Pereira: CONCEITOS BÁSICOS ",
          acessKey:"mw0mEZ4DBsk",
        },
        {
          name:"Professor Paulo Pereira: SISTEMAS 2x2 - RESOLUÇÃO (SUBSTITUIÇÃO, ADIÇÃO E COMPARAÇÃO)",
          acessKey:"uah0mHwCKps",
        },
        {
          name:"Professor Paulo Pereira: ESCALONAMENTO (SISTEMAS 3X3)",
          acessKey:"40LjiTXFuyY",
        },
        {
          name:"Professor Paulo Pereira:  REGRA DE CRAMER (SISTEMAS 3X3)",
          acessKey:"-tdj_vMekdg",
        },
        {
          name:"Professor Paulo Pereira: DISCUSSÃO E CLASSIFICAÇÃO DE UM SISTEMA",
          acessKey:"s958ELGm2ps",
        },
        {
          name:"Professor Paulo Pereira: DISCUSSÃO DE UM SISTEMA (3X3)",
          acessKey:"szDVO_TzWLM",
        },
      ]
    }
   ]
  }
  const Aulas = [ProgressaoAritmetica, ProgressaoGeometrica, Matrizes, Determinantes, SistemasLineares];
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

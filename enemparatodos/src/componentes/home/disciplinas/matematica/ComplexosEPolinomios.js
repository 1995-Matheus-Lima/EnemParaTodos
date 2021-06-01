import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const ComplexosEPolinomios = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const Complexos = {
    Subtitulo:"Números Complexos",
    Conteudo:[
      {
      name:"Números Complexos",
      id:"Numeros_Complexos",
      videos:[
        {
          name:"Professor Paulo pereira: INTRODUÇÃO, UNIDADE IMAGINÁRIA E EQUAÇÕES DO 2° GRAU",
          acessKey:"7E7mypyLyoM",
        },
        {
          name:"Professor Paulo pereira: POTÊNCIAS DE i (unidade imaginária) ",
          acessKey:"uqRy2bRkRTE",
        },
        {
          name:"Professor Paulo pereira: FORMA ALGÉBRICA, CLASSIFICAÇÃO E IGUALDADE",
          acessKey:"SeJ0eNKfxRg",
        },
        {
          name:"Professor Paulo pereira: OPERAÇÕES NA FORMA ALGÉBRICA (+, -, X)",
          acessKey:"va4iINd_Uic",
        },
        {
          name:"Professor Paulo pereira: DIVISÃO NA FORMA ALGÉBRICA ",
          acessKey:"AxMz26UaQjU",
        },
        {
          name:"Professor Paulo pereira: EXERCÍCIOS #1",
          acessKey:"O8c7EMWaJ4g",
        },
        {
          name:"Professor Paulo pereira: EXERCÍCIOS #2 (DIVISÃO)",
          acessKey:"I4rxfXDO89s",
        },
        {
          name:"Professor Paulo pereira: INTERPRETAÇÃO GEOMÉTRICA E MÓDULO",
          acessKey:"UsHiRL-Y6l0",
        },
        {
          name:"Professor Paulo pereira: ARGUMENTO",
          acessKey:"bLEe2FPQb-s",
        },
        {
          name:"Professor Paulo pereira: FORMA TRIGONOMÉTRICA (OU POLAR) ",
          acessKey:"txFdo3x3vGs",
        },
        {
          name:"Professor Paulo pereira: EXERCÍCIOS #3 FORMA TRIGONOMÉTRICA",
          acessKey:"m1w3CYu31zs",
        },
        {
          name:"Professor Paulo pereira: MULTIPLICAÇÃO E DIVISÃO NA FORMA TRIGONOMÉTRICA",
          acessKey:"_hDsF1b7nn8",
        },
        {
          name:"Professor Paulo pereira: POTENCIAÇÃO (1ª FÓRMULA DE MOIVRE)",
          acessKey:"A_fZaUU2qNo",
        },
        {
          name:"Professor Paulo pereira: RADICIAÇÃO (2ª FÓRMULA DE MOIVRE)",
          acessKey:"hvG_1MO9XlQ",
        },
      ]
    }
   ]
  }
  const Polinomios = {
    Subtitulo:"Polinômios",
    Conteudo:[
      {
      name:"Polinômios",
      id:"Polinomios",
      videos:[
        {
          name:"Professor Paulo pereira: INTRODUÇÃO (DEFINIÇÃO, COEFICIENTES E GRAU)",
          acessKey:"RevbMgyMQmg",
        },
        {
          name:"Professor Paulo pereira: VALOR NUMÉRICO, RAIZ E POLINÔMIO NULO",
          acessKey:"727OCYIFbNw",
        },
        {
          name:"Professor Paulo pereira: iDENTIDADES, ADIÇÃO E MULTIPLICAÇÃO",
          acessKey:"1nlFOsrUdK4",
        },
        {
          name:"Professor Paulo pereira: DIVISÃO DE POLINÔMIOS",
          acessKey:"WjmENMLiKbc",
        },
        {
          name:"Professor Paulo pereira: TEOREMA DO RESTO",
          acessKey:"yPWtUElC_YA",
        },
        {
          name:"Professor Paulo pereira: BRIOT RUFFINI - DIVISÃO DE POLINÔMIOS",
          acessKey:"wd8i0cxmS2c",
        },
        {
          name:"Professor Paulo pereira: DIVISÕES SUCESSIVAS (BRIOT RUFFINI)",
          acessKey:"F-Lr7b5-KQ8",
        },
        {
          name:"Professor Paulo pereira: T.F.A. E TEOREMA DA DECOMPOSIÇÃO ",
          acessKey:"4x44C0qbz0g",
        },
        {
          name:"Professor Paulo pereira: MULTIPLICIDADE DE UMA RAIZ OU RAÍZES MÚLTIPLAS",
          acessKey:"M0Qmvl6xcyY",
        },
        {
          name:"Professor Paulo pereira: RAÍZES COMPLEXAS",
          acessKey:"pvEXTNnfDKo",
        },
        {
          name:"Professor Paulo pereira:RELAÇÕES DE GIRARD",
          acessKey:"m2MSn45YCxY",
        },
        {
          name:"Professor Paulo pereira: COMO ENCONTRAR AS RAÍZES DE UM POLINÔMIO?",
          acessKey:"cf478CkcvqY",
        }
      ]
    }
   ]
  }

  const Aulas = [Complexos, Polinomios];
  const back = '/Disciplinas/matematica/ComplexosEPolinomios'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/ComplexosEPolinomios">
        <h2 className="h2ShowAula">Números Complexos E Polinômios</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default ComplexosEPolinomios;

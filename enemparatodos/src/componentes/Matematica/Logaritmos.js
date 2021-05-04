import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const Funcoes = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const PotenciasERaizes = {
    Subtitulo:"Potências E Raizes",
    Conteudo:[
      {
      name:"Potência de expoente Natual",
      id:"Potencia_de_expoente_Natual",
      videos:[
        {
          name:"Professora Angêla: Potenciação com números naturais ",
          acessKey:"gYD6iCMgcH0",
        },
        {
          name:"Professora Fernanda: Potência de expoente natural",
          acessKey:"uASfH38_j0U",
        },
        {
          name:"Professor Fernando: Potência de expoente natural",
          acessKey:"jaGJ2BUq5Hw",
        },
        {
          name:"Professora Denise Cristina: Potência com expoente natural",
          acessKey:"B9xFiIpiQ-o",
        },
      ]
    },
    {
      name:"Potência de expoente Inteiro Negativo",
      id:"Potencia_de_expoente_Inteiro_Negativo",
      videos:[
        {
          name:"Professora Angêla: Potenciação com base negativa e expoente negativo",
          acessKey:"uC0E2-GpsV4",
        },
        {
          name:"Professora Gis: POTÊNCIA COM EXPOENTE NEGATIVO",
          acessKey:"ols5_MRupOA",
        },
        {
          name:"Professora Kamila Maia: Potência com expoente inteiro",
          acessKey:"P56OlVLST3M",
        },
        {
          name:"Professor Rafael Procopio: Potência com Expoente Negativo ",
          acessKey:"cuJOTr741d0",
        },
      ]
    },
    {
      name:"Raiz Enéssima Aritmetica",
      id:"Raiz_Enessima_Aritmetica",
      videos:[
        {
          name:"Professora Lais: Raiz enésima de um número real",
          acessKey:"yXTL5ZoP4XU",
        },
        {
          name:"Matemática no papel: Raiz enésima",
          acessKey:"m8bpnn5VYKA",
        },
        {
          name:"Professor Alberto: Raiz Enésima de um [NÚMERO REAL] ",
          acessKey:"-rr5v7wzukU",
        },
      ]
    },
    {
      name:"Potência de expoente Racional",
      id:"Potencia_de_expoente_Racional",
      videos:[
        {
          name:"Professora Angela: Potenciação com Números Racionais",
          acessKey:"whsIgSYmZdU",
        },
        {
          name:"professora Gisele Ramos: Potenciação com expoente raciona ",
          acessKey:"LT97CFZniAk",
        },
        {
          name:"Vontade de aprender matemática: POTÊNCIA COM EXPOENTE RACIONAL",
          acessKey:"swgHCVez9D0",
        },
      ]
    },
    {
      name:"Potência de expoente Irracional",
      id:"Potencia_de_expoente_Irracional",
      videos:[
        {
          name:"Professor Walter coelho: Potência de expoente irracional",
          acessKey:"OfObj_lodAA",
        },
        {
          name:"Professor Aécio ferreira: Potência com expoente irracional",
          acessKey:"NjCqHPx6I4w",
        },
        {
          name:"professor fellipe Diniz: Potenciação com expoente racionais",
          acessKey:"ms5Vi1G1Yg8",
        },
      ]
    },
    {
      name:"Potência de expoente Real",
      id:"Potencia_de_expoente_Real",
      videos:[
        {
          name:"professora Suellen: Potenciação de Números Reais",
          acessKey:"25LSrOqKG6Q",
        },
        {
          name:"Professor Walter coelho: Potência de expoente Real",
          acessKey:"o614VXLOYOM",
        },
        {
          name:"Professor Aécio ferreira: Potência com expoente real",
          acessKey:"xj6DX-4-z_Q",
        },
      ]
    },
   ]
  }
  const funcaoExponencial = {
    Subtitulo:"Funcao Exponencial",
    Conteudo:[
      {
      name:"Funcao Exponencial",
      id:"Funcao_Exponencial",
      videos:[
        {
          name:"Professor ferretto: Revisão de Potenciação",
          acessKey:"n5NRv2cWQIg",
        },
        {
          name:"Professor ferretto: Introdução",
          acessKey:"9FGtZt84w6U",
        },
        {
          name:"Professor ferretto: Gráfico - Parte 1",
          acessKey:"SXkjJZHM5UU",
        },
        {
          name:"Professor ferretto: Gráfico - Parte 2",
          acessKey:"31N3orMcdVU",
        },
        {
          name:"Professor ferretto: Equações Exponenciais - Parte 1",
          acessKey:"3EXISt9iVqg",
        },
        {
          name:"Professor ferretto: Equações Exponenciais - Parte 2",
          acessKey:"NPBry6hE3NA",
        },
        {
          name:"Professor ferretto: Inequações Exponenciais",
          acessKey:"Y7gaJoRnLAY",
        },
      ]
    },
   ]
  }
  const Logaritmos = {
    Subtitulo:"Logaritmos",
    Conteudo:[
      {
      name:"Logaritmos",
      id:"Logaritmos",
      videos:[
        {
          name:"Professor ferretto: Introdução Parte 1",
          acessKey:"esdFuyG7zGs",
        },
        {
          name:"Professor ferretto: Introdução Parte 2 ",
          acessKey:"BzbzlRyaj2U",
        },
        {
          name:"Professor ferretto: Condição de Existência",
          acessKey:"3ennIevODaA",
        },
        {
          name:"Professor ferretto: Consequências da Definição",
          acessKey:"cjXN-cs5deo",
        },
        {
          name:"Professor ferretto: Propriedades Operatórias",
          acessKey:"3gNGS4vzM_o",
        },
        {
          name:"Professor ferretto: Propriedades Operatórias - Exercícios",
          acessKey:"BkNmuxmnvEc",
        },
        {
          name:"Professor ferretto: Cálculo de Logaritmos",
          acessKey:"E-upQwSS2Vw",
        },
        {
          name:"Professor ferretto: Mudança de Base",
          acessKey:"kZUCI3nFfwk",
        },
        {
          name:"Professor ferretto: Logaritmo e as Equações Exponenciais",
          acessKey:"y57lgKwsHsk",
        },
        {
          name:"Professor ferretto: Aplicações",
          acessKey:"IEDBi4x_zQE",
        },
        {
          name:"Professor ferretto: Função Logarítmica e Gráfico",
          acessKey:"MkgfW2MMnHc",
        },
        {
          name:"Professor ferretto: equações Logarítmicas - Parte 1",
          acessKey:"sapNhEkx_ZE",
        },
        {
          name:"Professor ferretto: Equações Logarítmicas - Parte 2",
          acessKey:"LkCvsZdJlD4",
        },
        {
          name:"Professor ferretto: Inequações Logarítmicas ",
          acessKey:"Fdbc8x0bUT0",
        },
      ]
    },
   ]
  }
  
  
  const Aulas = [PotenciasERaizes, funcaoExponencial, Logaritmos ];
  const back = '/Disciplinas/Matematica/Logaritmos'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/Logaritmos">
        <h2 className="h2ShowAula"> Exponencial e Logaritmos</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default Funcoes

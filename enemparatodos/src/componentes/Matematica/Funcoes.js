import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const Funcoes = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const Conjuntos = {
    Subtitulo:"Conjuntos",
    Conteudo:[{
      name:"Conjuntos",
      id:"Conjuntos",
      videos:[
        {
          name:"Professor Ferretto:  Introdução ",
          acessKey:"0aUEDxYjZg8",
        },
        {
          name:"Professor Ferretto: Subconjuntos e Conjunto das Partes ",
          acessKey:"Wxm3ugnq9Sw",
        },
        {
          name:"Professor Ferretto: União e Intersecção ",
          acessKey:"c5a99sX-Sq8",
        },
        {
          name:"Professor Ferretto: Diferença e Complementar",
          acessKey:"eZfFpnvudR0",
        },
      ]
    },
   ]
  }
  const ConjuntosNumericos = {
    Subtitulo:"Conjuntos Numericos",
    Conteudo:[{
      name:"Conjuntos dos números naturais",
      id:"Conjuntos_Dos_Numeros_Naturais",
      videos:[
        {
          name:"Professor Rafael Procopio: Conjunto dos Números Naturais ",
          acessKey:"nbbdLEJc0ao",
        },
        {
          name:"Professor Marcos ABA: NÚMEROS NATURAIS ",
          acessKey:"skUDTedMsjQ",
        },
        {
          name:"Professor Pedro Itallo vaz : Números Naturais ",
          acessKey:"kR2coFNP0_g",
        }
      ]
    },
    {
      name:"Conjuntos dos Números Inteiros",
      id:"Conjuntos_dos_Numeros_Inteiros",
      videos:[
        {
          name:"Professora Angela: O Conjunto dos Números Inteiros (Z)",
          acessKey:"fmiw3ksXOmk",
        },
        {
          name:"Professor Rafael Procopio: Conjunto dos Números Inteiro",
          acessKey:"XVKlC7v0ifU",
        },
        {
          name:"Professor Marcos ABA: NÚMEROS INTEIROS",
          acessKey:"YX0-FubBPto",
        }
      ]
    },
    {
      name:"Conjuntos dos números Racionais",
      id:"Conjuntos_Dos_Numeros_Racionais",
      videos:[
         {
          name:"Professora Angela: O Conjunto dos Números Racionais",
          acessKey:"1JT_0FyzPzA",
        },
        {
          name:"Professora Alê: Conjunto dos NÚMEROS RACIONAIS",
          acessKey:"uAUOigYXQkg",
        },
        {
          name:"Professor Rafael Procopio: Conjunto dos Números Racionais",
          acessKey:"3LQ2Tnjimcc",
        },
        {
          name:"Professor Marcos ABA: NÚMEROS RACIONAIS ",
          acessKey:"VlUSZL1Ybtk",
        },
        {
          name:"Professor Pedro Itallo vaz : Números Naturais ",
          acessKey:"kR2coFNP0_g",
        }
      ]
    },
    {
      name:"Conjuntos dos números IRRacionais",
      id:"Conjuntos_Dos_Numeros_IRRacionais",
      videos:[
        {
          name:"Professora Alê: Conjunto dos NÚMEROS IRRACIONAIS",
          acessKey:"rkRODwolM_k",
        },
        {
          name:"Professor Rafael Procopio: Conjunto dos Números IRRacionais",
          acessKey:"NASuQG2cO_g",
        },
        {
          name:"Professor Marcos ABA: NÚMEROS IRRACIONAIS ",
          acessKey:"ikBQxQXAfPo",
        },
        {
          name:"Professor Pedro Itallo vaz : Números IRRACIONAIS ",
          acessKey:"wP9K2zIdVsM",
        }
      ]
    },
    {
      name:"Conjuntos dos números Reais",
      id:"Conjuntos_Dos_Numeros_Reais",
      videos:[
        {
          name:"Professora Alê: Conjunto dos NÚMEROS Reais",
          acessKey:"_TAmueSDg6Q",
        },
        {
          name:"Professor Rafael Procopio: Conjunto dos Números Reais",
          acessKey:"UqFr1kNQjPM",
        },
        {
          name:"Professor Marcos ABA: NÚMEROS Reais ",
          acessKey:"wY951KyDJY4",
        }
      ]
    },
    {
      name:"Intervalos",
      id:"Intervalos",
      videos:[
        {
          name:"Professor Ferretto: Intervalos Reais, Operações e Propriedades",
          acessKey:"OPACJhL_mLY",
        },
        {
          name:"Professora Angela: Intervalos Reais",
          acessKey:"eLJXEUjUV8M",
        },
        {
          name:"Professor Rafael Procopio: Intervalos Reais",
          acessKey:"p4Ez-lxLzwU",
        },
        {
          name:"Professor Marcos ABA: INTERVALOS REAIS ",
          acessKey:"i2dCe9aYGjw",
        }
      ]
    }
   ]
  }
  const Relacoes = {
    Subtitulo:"Relações",
    Conteudo:[{
      name:"Par Ordenado",
      id:"Par_Ordenado",
      videos:[
        {
          name:"Professor Guilherme: Par ordenado",
          acessKey:"6OohsH3ENGc",
        },
        {
          name:"Professor Mário André: Par Ordenado",
          acessKey:"2jaUi6qFMxY",
        }
      ]
    },
    {
      name:"Plano Cartesiano",
      id:"Plano_Cartesiano",
      videos:[
        {
          name:"Professora Angela: Plano Cartesiano",
          acessKey:"-4J55d39QOg",
        },
        {
          name:"Professor Ferretto: Noções Básicas de Plano Cartesiano",
          acessKey:"iC4q1AGeN5A",
        },
        {
          name:"Professor Marcos ABA: PLANO CARTESIANO",
          acessKey:"00jYGdYKFls",
        },
        {
          name:"Professor Pedro itallo vaz: PLANO CARTESIANO",
          acessKey:"stGz9jipoaw",
        }
      ]
    },
    {
      name:"Produto Cartesiano",
      id:"Produto_Cartesiano",
      videos:[
        {
          name:"Professora Angela: Produto Cartesiano",
          acessKey:"g48NHyfhL-E",
        },
        {
          name:"Professor cadú: Produto Cartesiano",
          acessKey:"qt3nGeb6T3U",
        },
        {
          name:"Professor Warlisson: Produto cartesiano de dois conjuntos",
          acessKey:"FiY7RYZhDiI",
        },
      ]
    },
    {
      name:"Relação Binária",
      id:"Relacao_Binaria",
      videos:[
        {
          name:"Professor Hamilton: Relação binária",
          acessKey:"JfefNHqgVJY",
        },
        {
          name:"Professor Guilherme: Relação binária",
          acessKey:"PM2mTsUnHGA",
        },
        {
          name:"Professor Orestes: Relações Binárias e Produto Cartesiano",
          acessKey:"Uw24jbXmb7c",
        },
        {
          name:"estude matemática: Relações Binárias",
          acessKey:"yzCgrtQ-3tk",
        }
      ]
    }
   ]
  }
  const Funcoes = {
    Subtitulo:"Funções",
    Conteudo:[
      {
      name:"Conceito de Função",
      id:"Conceito_de_Funcao",
      videos:[
        {
          name:"MTM Matemática para Todos: Entenda o conceito de FUNÇÃO",
          acessKey:"DoyE0pgxRmY",
        },
        {
          name:"Matemática fácil: Funções - Definição",
          acessKey:"-tHIyqC2ifA",
        },
        {
          name:"Professor Diogo francisco: Conceito de Função",
          acessKey:"DoP4h4gEGc4",
        },
      ]
    },
    {
      name:"Notação das Funções",
      id:"Notacao_das_Funcoes",
      videos:[
        {
          name:"Professor Emani: FUNÇÕES - A NOTAÇÃO f(x)",
          acessKey:"DoP4h4gEGc4",
        },
        {
          name:"bate-papo:educação | Função e notação f(x)",
          acessKey:"tSPC-5hXYCI",
        },
        {
          name:"Bora passar: FUNÇÃO - Notação",
          acessKey:"F0IbvivVtnY",
        },
        {
          name:"Mat Fácil: Conceito de Função",
          acessKey:"smZgBUagkg8",
        },
      ]
    },
    {
      name:"Domínio Contradomínio e imagem",
      id:"Dominio_Contradominio_e_imagem",
      videos:[
        {
          name:"Professor Ferretto: Domínio, Contradomínio e Conjunto Imagem",
          acessKey:"G3zjNRYbDv8",
        },
        {
          name:"Professora Angela: Domínio, contradomínio e imagem de uma função",
          acessKey:"SGvCRsQsOtQ",
        },
        {
          name:"Professor Marcos Aba: DOMÍNIO, CONTRADOMÍNIO E IMAGEM DA FUNÇÃO Parte 01",
          acessKey:"fY3kFknl5Kg",
        },
        {
          name:"Professor Marcos Aba: DOMÍNIO, CONTRADOMÍNIO E IMAGEM DA FUNÇÃO Parte 02",
          acessKey:"ntTt-VFRTnw",
        },
       
        {
          name:"Professor Rafael Procopio: Domínio, Contradomínio, Imagem de uma Função",
          acessKey:"dPHzm5u8Nwc",
        }
      ]
    },
    {
      name:"Igualdade de Funções",
      id:"Igualdade_de_Funcoes",
      videos:[
        {
          name:"Professor Gustavo: Igualdade de Funções",
          acessKey:"lc6EoZAj7sQ",
        },
        {
          name:"Matemática com Rubão: Igualdade de funções",
          acessKey:"qOLDuEAVWSo",
        }
      ]
    },
   ]
  }
  const Funcoes1grau = {
    Subtitulo:"Funções do 1° Grau",
    Conteudo:[
      {
      name:"Função Constante",
      id:"Funcao_Constante",
      videos:[
        {
          name:"Professora Danielle nunes: d_K4yFmN2nQ",
          acessKey:"d_K4yFmN2nQ",
        },
        {
          name:"Professor Rafael Procopio: Função Constante",
          acessKey:"ivRjk7T6AXw",
        },
      ]
    },
    {
      name:"Função Identidade",
      id:"Funcao_Identidade",
      videos:[
        {
          name:"Professor: warlisson: Função identidade",
          acessKey:"ie3vEkIZ9b8",
        },
        {
          name:"Professor Fernando Rocha: Função Identidade",
          acessKey:"iqk8sD95D8A",
        },
      ]
    },
    {
      name:"Função Linear",
      id:"Funcao_Linear",
      videos:[
        /* Continuar desta linha!!!! */
        {
          name:"Professor: warlisson: Função identidade",
          acessKey:"ie3vEkIZ9b8",
        },
        {
          name:"Professor Fernando Rocha: Função Identidade",
          acessKey:"iqk8sD95D8A",
        },
      ]
    },
   ]
  }
  const Aulas = [Conjuntos, ConjuntosNumericos, Relacoes, Funcoes, Funcoes1grau];
  const back = '/Disciplinas/Matematica/Funcoes'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/Funcoes">
        <h2 className="h2ShowAula">Funções e conjuntos</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default Funcoes

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
          name:"Professor warlisson: Função identidade",
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
        {
          name:"Professor warlisson: Função linear",
          acessKey:"BoF4aGzFH1g",
        },
        {
          name:"Professora Edna Mendes: Função linear",
          acessKey:"mkVStUhqnJ8",
        },
      ]
    },
    {
      name:"Função Afim",
      id:"Funcao_Afim",
      videos:[
        {
          name:"Professor Ferretto: Conceitos Iniciais",
          acessKey:"hdMFlAv5GkU",
        },
        {
          name:"Professor Ferretto:Determinando a Função",
          acessKey:"-EnodYhcQw4",
        },
        {
          name:"Professor Ferretto: Exercícios",
          acessKey:"yTfNuU2xrrc",
        },
        {
          name:"Professor Ferretto: Gráfico",
          acessKey:"2KWDWpmDZwQ",
        },
        {
          name:"Professor Ferretto: Coeficiente Angular e Coeficiente Linear",
          acessKey:"xDTd2a4NJ40",
        },
        {
          name:"Professor Ferretto: Exercícios",
          acessKey:"Bs2Ylb4x2V8",
        },
        {
          name:"Professor Ferretto: Casos Particulares",
          acessKey:"567sWGTnf5Q",
        },
        {
          name:"Professor Ferretto: Zero ou Raiz da Função",
          acessKey:"PgOLmJ00KPQ",
        },
        {
          name:"Professor Ferretto: Estudo do Sinal",
          acessKey:"5FpSn7-k2sk",
        },
      ]
    },
    {
      name:"Inequação do 1° Grau",
      id:"Inequacoes_do_primeiro_grau",
      videos:[
        {
          name:"Professor Ferretto: Conceitos Iniciais",
          acessKey:"LsX-0I5w9UE",
        },
        {
          name:"Professor Ferretto: Inequações Simultâneas",
          acessKey:"q1dYyoDKVs4",
        },
        {
          name:"Professor Ferretto: Inequação Produto",
          acessKey:"pxkS0gN0gN0",
        },
        {
          name:"Professor Ferretto: Inequação Quociente",
          acessKey:"HBkSpbVoYW4",
        },
      ]
    },
   ]
  }
  const Funcoes2grau = {
    Subtitulo:"Funções Quadrática",
    Conteudo:[
      {
      name:"Funções do 2° grau",
      id:"Funcoes_do_2_grau",
      videos:[
        {
          name:"Professor Ferretto: Conceitos Iniciais",
          acessKey:"Z5aVW_Zgifk",
        },
        {
          name:"Professor Ferretto: Zeros, Raízes e Fórmula de Bhaskara ",
          acessKey:"CNqeTO2tCuI",
        },
        {
          name:"Professor Ferretto: Quantidade de Raízes Reais",
          acessKey:"4d48gLFe3F0",
        },
        {
          name:"Professor Ferretto:  Exercícios",
          acessKey:"oPLsPe94q8Y",
        },
        {
          name:"Professor Ferretto: Gráfico Parábola aula 1",
          acessKey:"ZnxMdyN4Xp8",
        },
        {
          name:"Professor Ferretto: Gráfico Parábola aula 2",
          acessKey:"U9I1LFFcUkw",
        },
        {
          name:"Professor Ferretto: Exercícios sobre Gráfico parte 1",
          acessKey:"-iMToBhO2i8",
        },
        {
          name:"Professor Ferretto: Exercícios sobre Gráfico parte 2",
          acessKey:"yihH524OkeA",
        },
        {
          name:"Professor Ferretto: Estudo do Sinal Gráfico Parábola",
          acessKey:"SggGwu1VV3s",
        },
      ]
    },
    {
    name:"inequações do 2° grau",
      id:"inequacoes_do_2_grau",
      videos:[
        {
          name:"Professor Ferretto: Conceitos Iniciais",
          acessKey:"UKgRWYwrzd0",
        },
        {
          name:"Professor Ferretto: Inequações Simultâneas",
          acessKey:"C50Um6OjmTg",
        },
        {
          name:"Professor Ferretto: Inequação Produto",
          acessKey:"Rh99ZjA2NuU",
        },
        {
          name:"Professor Ferretto: Inequação Quociente",
          acessKey:"u1zvLoATa-8",
        },  
      ]
    } 
   ]
  }
  const FuncaosModulares = {
    Subtitulo:"Função Modular",
    Conteudo:[
      {
      name:"Função Modular",
      id:"Funcao_Modular",
      videos:[
        {
          name:"Professor Ferretto: Módulo de um Número Real",
          acessKey:"sXFdCZXzRT8",
        },
        {
          name:"Professor Ferretto: Propriedades do Módulo",
          acessKey:"WHaqx5VxXVc",
        },
        {
          name:"Professor Ferretto: Gráfico",
          acessKey:"HMEBmYNncuQ",
        },
        {
          name:"Professor Ferretto: Equações Modulares",
          acessKey:"2fFnD5vgE5Q",
        },
        {
          name:"Professor Ferretto: Inequações Modulares",
          acessKey:"jnEskZaPah0",
        },
      ]
    },
    
   ]
  }
  const OutrasFuncoes = {
    Subtitulo:"Outras Funções",
    Conteudo:[
      {
        name:"Função f(x) = x³",
        id:"Funcao_f(x)=x_elevado_a_3",
        videos:[
          {
            name:"rugamath: Función f(x) = x^3",
            acessKey:"IiQy_QfKiFE",
          },
        ]
      },
      {
        name:"Função recíproca",
        id:"Funcao_reciproca",
        videos:[
          {
            name:"Professor Thalles Abreu Mezencio:  Função recíproca",
            acessKey:"IiQy_QfKiFE",
          },
          {
            name:"Ômega Matemática:  Função recíproca",
            acessKey:"IWLYSsR_FZI",
          },
          {
            name:"Professor Francisco Magalhães Gomes:  Função recíproca",
            acessKey:"q2uCUrig_kI",
          },
        ]
      },
      {
        name:"Função máximo inteiro",
        id:"Funcao_Maximo_inteiro",
        videos:[
          {
            name:"Inter Mat: Função Máximo Inteiro",
            acessKey:"BuJJGEXqbn4",
          },
        ]
      },
      {
        name:"Função Composta",
        id:"Funcao_Composta",
        videos:[
          {
            name:"Professor Ferretto:  Função Composta ",
            acessKey:"V9yhPL87lGs",
          },
          {
            name:"Professor  Marcos Aba:  Função Composta ",
            acessKey:"s5ZIGMVzMY8",
          },
          {
            name:"Professor  Paulo Pereira:  Função Composta ",
            acessKey:"EBRXQpXbXio",
          },
        ]
      },
      {
        name:"Função Sobrejetora",
        id:"Funcao_Sobrejetora",
        videos:[
          {
            name:"Professor Ferretto: Função Sobrejetora",
            acessKey:"057CkKna7kM",
          },
          {
            name:"Professor Rafael Procopio: Função Sobrejetora ou Função Sobrejetiva",
            acessKey:"rkapkXaTDoE",
          },
          {
            name:"Estude Matemática: Função Sobrejetora",
            acessKey:"845SQu5O3ws",
          },
        ]
      },
      {
        name:"Função Injetora",
        id:"Funcao_Injetora",
        videos:[
          {
            name:"Professor Ferretto:  Função Injetora",
            acessKey:"OMvGmAB96do",
          },
          {
            name:"Professor Rafael Procopio: Função Injetora ou Função Injetiva",
            acessKey:"JS9AL_UfZ6s",
          },
          {
            name:"Estude Matemática: Função  Injetora",
            acessKey:"S0fJfPP792o",
          },
        ]
      },
      {
        name:"Função Bijetora",
        id:"Funcao_bijetora",
        videos:[
          {
            name:"Professor Ferretto:  Função Bijetora",
            acessKey:"B8TtvV_vKQc",
          },
          {
            name:"Professor Rafael Procopio: Função Bijetora ou Função Bijetiva",
            acessKey:"BieXxZ1xL0M",
          },
          {
            name:"Estude Matemática: Função  Bijetora",
            acessKey:"80vAaZvKFfk",
          },
        ]
      },
      {
        name:"Função inversa",
        id:"Funcao_inversa",
        videos:[
          {
            name:"Professor Ferretto:  Função Inversa",
            acessKey:"k-BPycvaZLA",
          },
          {
            name:"Professor Rafael Procopio: Função Inversa",
            acessKey:"5x-detAH3gk",
          },
          {
            name:"Estude Matemática: Função Inversa",
            acessKey:"fQ9-WLzOuVs",
          },
        ]
      },
    ]
  }
  
  const Aulas = [Conjuntos, ConjuntosNumericos, Relacoes, Funcoes, Funcoes1grau, Funcoes2grau, FuncaosModulares, OutrasFuncoes];
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

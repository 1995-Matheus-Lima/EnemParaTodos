import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const Trigonometria = () => {
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
  const RelacaoFundamental = {
    Subtitulo:"Relações Fundamentais",
    Conteudo:[
      {
      name:"Relações Fundamentais",
      id:"Relacoes_Fundamentais",
      videos:[
        {
          name:"Tv Hexag: Relações Fundamentais da Trigonometria",
          acessKey:"guZ8saypRDA",
        },
        {
          name:"Me Salva: Relações fundamentais da trigonometria",
          acessKey:"PnzMTU7Evqo",
        },
        {
          name:"Professor Marcelo Gama: Relacao fundamental da trigonometria",
          acessKey:"1hiMs63PnPE",
        },
      ]
    }
   ]
  }
  const ReducaoAoPrimeiroQuadrante = {
    Subtitulo:"Reducao Ao Primeiro Quadrante",
    Conteudo:[
      {
      name:"Redução do 2° ao 1° Quadrante",
      id:"Reducao_Do_Segundo_ao_Primeiro_Quadrante",
      videos:[
        {
          name:"Professor Silvio Freitas: Redução do Segundo Quadrante ao Primeiro Quadrante",
          acessKey:"gcg6tiRk4hc",
        },
        {
          name:"PCI Concursos: Redução do 2º ao 1º Quadrante",
          acessKey:"2tLv6I8Foco",
        }
      ]
    },
    {
      name:"Redução do 3° ao 1° Quadrante",
      id:"Reducao_Do_Terceiro_ao_Primeiro_Quadrante",
      videos:[
        {
          name:"Professor Silvio Freitas: Redução do Terceiro Quadrante ao Primeiro Quadrante",
          acessKey:"nOq6U00SeGQ",
        }
      ]
    },
    {
      name:"Redução do 4° ao 1° Quadrante",
      id:"Reducao_Do_Quarto_ao_Primeiro_Quadrante",
      videos:[
        {
          name:"Professor Silvio Freitas: Redução do Quarto Quadrante ao Primeiro Quadrante",
          acessKey:"MoHs7JlgtGM",
        },
        {
          name:"O Kuadro: Redução do 4º ao 1º Quadrante",
          acessKey:"2KGNCtllKlc",
        },
        {
          name:"PCI Concursos: Redução do 4º ao 1º Quadrante",
          acessKey:"otttalXQHng",
        }
      ]
    }
   ]
  }
  const Transformacoes = {
    Subtitulo:"Transformações",
    Conteudo:[
      {
      name:"Fórmulas de Adição E Subtração de Arcos ",
      id:"Formulas_De_Adicao_E_Subttracao_De_Arcos",
      videos:[
        {
          name:"Professor Paulo pereira: FÓRMULAS DE ADIÇÃO DE ARCOS",
          acessKey:"99J5IHR-Ld0",
        },
        {
          name:"Professor Sandro Curió: Adição e Subtração de Arcos",
          acessKey:"NWF4JRWg6rI",
        },
        {
          name:"Professor valentim: FÓRMULAS DA ADIÇÃO DE ARCOS",
          acessKey:"kKPesIklQiY",
        },
      ]
    },
    {
      name:"Fórmulas de Multiplicação de Arcos ",
      id:"Formulas_De_Multiplicacao_De_Arcos",
      videos:[
        {
          name:"Professor Paulo pereira: FÓRMULAS DO ARCO DUPLO",
          acessKey:"390o5Dzzy9E",
        },
        {
          name:"Professor gusalberto8: Fórmulas do arco duplo",
          acessKey:"J0ZQiShIuYI",
        },
        {
          name:"Professor Isaias de jesus: formulas arcos duplos",
          acessKey:"tns8UisvKnY",
        },
      ]
    },
    {
      name:"Fórmulas de Divisão de Arcos ",
      id:"Formulas_De_Divisao_De_Arcos",
      videos:[
        {
          name:"Professor Paulo pereira: ARCO METADE (BISSECÇÃO DE ARCOS)",
          acessKey:"P1uC3h_hSto",
        },
        {
          name:"Professor gusalberto8: Fórmulas do arco metade ",
          acessKey:"qj-2JVckLHQ",
        },
        {
          name:"Professor Joaquim: formulas arcos duplos",
          acessKey:"HE9ovcqJ6i4",
        },
      ]
    }
   ]
  }
  const EquacoesTrigonometricas = {
    Subtitulo:"Equacões Trigonométricas",
    Conteudo:[
      {
        name:"Equações Fundamentais",
        id:"Equacoes_Fundamentais",
        videos:[
          {
            name:"Professor Paulo perreira: EQUAÇÕES TRIGONOMÉTRICAS (FUNDAMENTAIS)",
            acessKey:"-LFDt4m4TpI",
          },
          {
            name:"Professor gui: Equações Trigonométricas ",
            acessKey:"VVLAULiSSYM",
          },
        ]
      }
    ]
  }
  const InequacoesTrigonometricas = {
    Subtitulo:"Inequacões Trigonométricas",
    Conteudo:[
      {
        name:"Inequações Trigonométricas",
        id:"Inequacoes_Trigonometricas",
        videos:[
          {
            name:"Professor Paulo perreira: INEQUAÇÕES TRIGONOMÉTRICAS (FUNDAMENTAIS)",
            acessKey:"kWzpQ9Sy7wA",
          },
          {
            name:"Professor gui: inequações Trigonométricas ",
            acessKey:"FgUwPkCorP4",
          },
          {
            name:"TV Hexag: inequações Trigonométricas ",
            acessKey:"JtTqHa8xcys",
          },
          {
            name:"Professor Sandro Cúrio: inequações Trigonométricas ",
            acessKey:"qIu-Iw5MPFg",
          }
        ]
      }
    ]
  }
  const TrianguloRetangulo = {
    Subtitulo:"Triângulos Retângulo",
    Conteudo:[
      {
        name:"Trigonometria no Triângulo Retângulo",
        id:"Trigonometria_no_Triangulo_Retangulo",
        videos:[
          {
            name:"Professora Angela: Relações Trigonométricas no Triângulo Retângulo",
            acessKey:"MWPXfX8YmOY",
          },
          {
            name:"Professor Paulo Pereira: Trigonometria no Triângulo Retângulo",
            acessKey:"4sTUs4ll3dI",
          },
          {
            name:"Professor Marcos Aba: RAZÕES TRIGONOMÉTRICAS NO TRIÂNGULO RETÂNGULO",
            acessKey:"1QfKsnynZMY",
          },
          {
            name:"Professor Sandro Cúrio: RAZÕES TRIGONOMÉTRICAS NO TRIÂNGULO RETÂNGULO ",
            acessKey:"v0Yj0JWs-h4",
          }
        ]
      }
    ]
  }
  const TriangulosQuaisquer = {
    Subtitulo:"Triângulos Quaisquer",
    Conteudo:[
      {
        name:"Trigonometria em Triângulos Quaisquer",
        id:"Trigonometria_Em_Triangulos_Quaisquer",
        videos:[
          {
            name:"Professor Paulo perreira: Lei dos Senos",
            acessKey:"t6zTP7fU8lA",
          },
          {
            name:"Professor Paulo perreira: Lei dos Cossenos",
            acessKey:"-ChDnLM47xo",
          },
          {
            name:"Professor gui valenzuela: Triângulo Qualquer ",
            acessKey:"vSBqw9ETotk",
          },
          {
            name:"Professor gui: Triângulo Qualquer ",
            acessKey:"6ns8Wf15Gh4",
          },
          {
            name:"Professor Ana Paula Ganassoli: Trigonometria num triângulo qualquer",
            acessKey:"tnIUKDCL9iU",
          }
        ]
      }
    ]
  }
  const Aulas = [ ArcoseAngulos, FuncoesCirculares, RelacaoFundamental, ReducaoAoPrimeiroQuadrante, Transformacoes, EquacoesTrigonometricas, InequacoesTrigonometricas, TrianguloRetangulo, TriangulosQuaisquer ];
  const back = '/Disciplinas/matematica/Trigonometria'
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

export default Trigonometria

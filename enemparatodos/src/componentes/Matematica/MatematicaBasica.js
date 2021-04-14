import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const MatematicaBasica = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const Algebra = {
    Subtitulo:"Álgebra",
    Conteudo:[{
      name:"Adição",
      id:"Adicao",
      videos:[
        {
          name:"Professor Ferretto: Adição",
          acessKey:"az6OYFS7AUA",
        },
        {
          name:"Professor Pedro Itallo: Adição-Brasil Escola",
          acessKey:"C-Ca3iHxI_Q",
        },
        {
          name:"Professor Abraão: Adição ",
          acessKey:"sZEm-vej0Do",
        },
        {
          name:"Professor Marcos Aba: Adição",
          acessKey:"HdbZqAXQm3o",
        }, 
      ]
    },
    {
      name:"Subtração",
      id:"Subtracao",
      videos:[
        {
          name:"Professor Ferretto: Subtração",
          acessKey:"oSzh7TjIsjs",
        },
        {
          name:"Professor Pedro Itallo: Subtração-Brasil Escola",
          acessKey:"cUA5uqAuflw",
        },
        {
          name:"Professor Abraão: Subtração",
          acessKey:"Dv4NiS9gPms",
        }, 
        {
          name:"Professor Marcos Aba: subtração",
          acessKey:"iAmR9AXlcKI",
        },   
      ]
    },
    {
      name:"Multiplicação",
      id:"Multiplicacao",
      videos:[
        {
          name:"Professor Ferretto: Multiplicação",
          acessKey:"BetgRvNQEC0",
        },
        {
          name:"ProfessorA GIS: multiplicação",
          acessKey:"cX5reFHZJvI",
        }, 
        {
          name:"Professor Pedro Itallo: Multiplicação-Brasil Escola",
          acessKey:"2QFRNNPfn8c",
        },
        {
          name:"Professor Abraão: Multiplicação",
          acessKey:"8noLrvgyXWs",
        },  
      ]
    },
    {
      name:"Divisão",
      id:"Divisao",
      videos:[
        {
          name:"Professor Ferretto: Divisão",
          acessKey:"GpnfZHB3Rpw",
        },
        {
          name:"ProfessorA GIS: Divisão",
          acessKey:"61S-Rayhc7c",
        },   
        {
          name:"Professor Pedro Itallo: Divisão-Brasil Escola",
          acessKey:"v7QnjDAHI1E",
        },
        {
          name:"Professor Abraão: Divisão",
          acessKey:"Pcpkfu2IxEM",
        }, 
        
      ]
    },
    {
      name:"Numeros Decimais",
      id:"Numeros_Decimais",
      videos:[
        {
          name:"ProfessorA GIS: Números Decimais",
          acessKey:"13jlmVyGrLo",
        },
        {
          name:"ProfessorA GIS: comparação entre Números Decimais",
          acessKey:"gSy8Qp4RHf0",
        },
        {
          name:"ProfessorA GIS: COMO TRANSFORMAR FRAÇÃO EM NÚMERO DECIMAL e vice - versa",
          acessKey:"Odyly-7S6xg",
        },  
        {
          name:"ProfessorA GIS: ADIÇÃO COM NÚMEROS DECIMAIS",
          acessKey:"cgHJZsVNqOI",
        }, 
        {
          name:"ProfessorA GIS: SUBTRAÇÃO COM NÚMEROS DECIMAIS",
          acessKey:"YbVduLUlXX4",
        }, 
        {
          name:"ProfessorA GIS: MULTIPLICAÇÃO COM NÚMEROS DECIMAIS",
          acessKey:"Z_Ccpv7hLc0",
        },
        {
          name:"ProfessorA GIS: DIVISÃO COM NÚMEROS DECIMAIS",
          acessKey:"_Ur59IV_2Ik",
        },
      ]
    },
    {
      name:"MMC E MDC",
      id:"MMC_E_MDC",
      videos:[
        {
          name:"Professor Ferretto: MMC",
          acessKey:"QCMUMufcK5M",
        },
        {
          name:"ProfessorA GIS: MMC - MÍNIMO MÚLTIPLO COMUM",
          acessKey:"PmlNQeBfp7I",
        },
        {
          name:"Professor Ferretto: MDC",
          acessKey:"NWtwEm8M2qw",
        },
        {
          name:"ProfessorA GIS: MDC - MÁXIMO DIVISOR COMUM ",
          acessKey:"MK4cSSdNTHo",
        },
        {
          name:"Umberto mannarino: FATORAÇÃO, MMC E MDC ",
          acessKey:"YgkK4NpnBi8",
        },
      ]
    },
    {
      name:"Frações",
      id:"Fracoes",
      videos:[
        {
          name:"Professor Ferretto: Frações Parte 1",
          acessKey:"YJyY6A_MOQc",
        },
        {
          name:"Professor Ferretto: Frações Parte 2",
          acessKey:"SgJpB78R7x0",
        },
        {
          name:"ProfessorA GIS: LEITURA DE FRAÇÕES",
          acessKey:"KUn14ZDcr5k",
        },
        {
          name:"ProfessorA GIS: FRAÇÕES EQUIVALENTES",
          acessKey:"kR1_vTZHANI",
        },
        {
          name:"ProfessorA GIS: Operações com Frações",
          acessKey:"UbyLqduIbIY",
        },
      ]
    },
    {
      name:"Razões e proporções",
      id:"Razoes_e_Proporcoes",
      videos:[
        {
          name:"Professor Ferretto: Razão e Proporção Parte 1",
          acessKey:"wnHd-ofn-os",
        },
        {
          name:"Professor Ferretto: Razão e Proporção Parte 2",
          acessKey:"6Dsta1eZ1BA",
        },
        {
          name:"ProfessorA GIS: RAZÃO E PROPORÇÃO parte 1",
          acessKey:"Kf_YzZ0CnIs",
        },
        {
          name:"ProfessorA GIS: RAZÃO E PROPORÇÃO parte 2",
          acessKey:"1mvQLG1lp-I",
        },
        {
          name:"ProfessorA GIS: GRANDEZAS DIRETAMENTE PROPORCIONAIS",
          acessKey:"04EB9dZoBqw",
        },
        {
          name:"ProfessorA GIS: GRANDEZAS INVERSAMENTE PROPORCIONAIS",
          acessKey:"0MQqsHzy_e4",
        },
      ]
    },
    {
      name:"Regra de Três",
      id:"Regra_de_tres",
      videos:[
        {
          name:"Professor Ferretto: Regra de três Simples ",
          acessKey:"alLifth7gxE",
        },
        {
          name:"ProfessorA GIS: Regra de três Simples",
          acessKey:"mnle8NcUYkQ",
        },
        {
          name:"Professor Ferretto: Regra de três Composta ",
          acessKey:"buYey1YGJhA",
        },
        {
          name:"ProfessorA GIS: Regra de três Composta",
          acessKey:"vKU-85u6yJw",
        },
        {
          name:"Umberto Mannarino: COMO E QUANDO FAZER REGRA DE 3  ",
          acessKey:"CMPoU4HrHAE",
        },
      ]
    },
    {
      name:"Matemática Financeira",
      id:"Matemática_Financeira",
      videos:[
        {
          name:"Professor Ferretto: JUROS SIMPLES ",
          acessKey:"N27xZJj1m-4",
        },
        {
          name:"ProfessorA GIS: JUROS SIMPLES",
          acessKey:"aZcETuhXxPw",
        },
        {
          name:"Professor Ferretto: JUROS COMPOSTOS ",
          acessKey:"790S9GR5bWU",
        },
        {
          name:"ProfessorA GIS: JUROS COMPOSTOS",
          acessKey:"X652ApXFTJA"
        },
        {
          name:"Umberto Mannarino: JUROS SIMPLES E JUROS COMPOSTOS  ",
          acessKey:"rvy_6JExnrw"
        },
      ]
    },
    {
      name:"Operando com potências",
      id:"Operando_Com_Potencias",
      videos:[
        {
          name:"Professor Ferretto: Potenciação ",
          acessKey:"vA8j9nqBlBM",
        },
        {
          name:"ProfessorA GIS: POTÊNCIAS e PROPRIEDADES das potências",
          acessKey:"dGOhsZqCJKc",
        },
        {
          name:"ProfessorA GIS: Potenciação com números naturais ",
          acessKey:"EqSiqXyfaqA"
        },
        {
          name:"ProfessorA GIS: POTENCIAÇÃO COM FRAÇÃO e DECIMAL",
          acessKey:"4f57_lJg3zQ"
        },
        {
          name:"ProfessorA GIS: JUROS COMPOSTOS",
          acessKey:"X652ApXFTJA"
        },
      ]
    },
    {
      name:"Operando com raizes",
      id:"Operando_Com_raizes",
      videos:[
        {
          name:"Professor Ferretto: RADICIAÇÃO ",
          acessKey:"QmIjZgKhAEo"
        },
        {
          name:"ProfessorA GIS: Propriedades dos radicais",
          acessKey:"494171csjuw"
        },
        {
          name:"ProfessorA GIS: RAIZ QUADRADA DE FRAÇÃO E NÚMERO DECIMAL ",
          acessKey:"81mla_b6BnU"
        },
        {
          name:"ProfessorA GIS: RAIZ QUADRADA COM X NO RADICANDO",
          acessKey:"K4CGTrnEWzA"
        },
        {
          name:"ProfessorA GIS: MULTIPLICAÇÃO E DIVISÃO COM RADICAIS",
          acessKey:"gKb7vT3Y8zI"
        },
      ]
    },
    {
      name:"Equações do 1° grau",
      id:"Equacoes_Do_1_Grau",
      videos:[
        {
          name:"Professor Ferretto: EQUAÇÃO DO 1º GRAU",
          acessKey:"Tu08PYjt-2Q"
        },
        {
          name:"ProfessorA GIS: Equação do primeiro grau",
          acessKey:"bWJrg5DyuMY"
        },
        {
          name:"ProfessorA GIS: SISTEMA DE EQUAÇÕES do 1º grau",
          acessKey:"WR0T5t_HrGA"
        },
        {
          name:"ProfessorA GIS: EQUAÇÃO DO PRIMEIRO GRAU COM FRAÇÃO",
          acessKey:"eUQMLU8EBpY"
        },
        {
          name:"ProfessorA GIS: COMO RESOLVER EXERCÍCIO DE EQUAÇÃO COM FRAÇÃO",
          acessKey:"bqky3inxTMk"
        },
      ]
    },
    {
      name:"Equações do 2° grau",
      id:"Equacoes_Do_2_Grau",
      videos:[
        {
          name:"Professor Ferretto: EQUAÇÃO DO 2º GRAU (Parte 1)",
          acessKey:"toAaUBwitFE"
        },
        {
          name:"Professor Ferretto: EQUAÇÃO DO 2º GRAU (Parte 2)",
          acessKey:"qYQllsg8ka8"
        },
        {
          name:"ProfessorA GIS: EQUAÇÃO DO 2° GRAU",
          acessKey:"HCylt5HtFMs"
        },
        {
          name:"ProfessorA GIS: EQUAÇÃO DO 2 GRAU FÓRMULA DE BHÁSKARA",
          acessKey:"KarCkEGZqXA"
        },
        {
          name:"ProfessorA GIS: SISTEMA DE EQUAÇÕES do 2º grau SUBSTITUIÇÃO",
          acessKey:"7CvjlSivFlQ"
        },
        {
          name:"ProfessorA GIS:  COMO DETERMINAR A EQUAÇÃO A PARTIR DESUAS RAÍZES",
          acessKey:"gZdb8S9zJMQ"
        },
      ]
    }
    ]
  }
  const Geometria = {
    Subtitulo:"Geometria",
    Conteudo:[{
      name:"Ângulos",
      id:"Angulos",
      videos:[
        {
          name:"Professor Ferretto: Ângulos",
          acessKey:"0CnUdzmpO8E"
        },
        {
          name:"ProfessorA GIS:  Definição e tipos de ângulos",
          acessKey:"nAvqZSglTmA"
        },
        {
          name:"ProfessorA GIS:  ÂNGULOS COMPLEMENTARES",
          acessKey:"1DggFzw415E"
        },
        {
          name:"ProfessorA GIS:  ÂNGULOS CONSECUTIVOS E ADJACENTES",
          acessKey:"ARIdCtVdYzA"
        },
        {
          name:"ProfessorA GIS:  ÂNGULOS SUPLEMENTARES",
          acessKey:"zk3f6QXEyUU"
        },
        {
          name:"ProfessorA GIS:  ÂNGULOS OPOSTOS PELO VÉRTICE",
          acessKey:"_-kdly1fTSA"
        },
        {
          name:"ProfessorA GIS:  ÂNGULOS REPLEMENTARES",
          acessKey:"1RJUUjdudFo"
        },
        {
          name:"ProfessorA GIS:  ÂNGULOS  CONGRUENTES",
          acessKey:"PByYGFlz11M"
        },
        {
          name:"ProfessorA GIS: ÂNGULOS ALTERNOS INTERNOS E EXTERNOS ",
          acessKey:"fd4e0yfW5VI"
        },
      ]
    },
    {
      name:"Triângulos",
      id:"Triangulos",
      videos:[
        {
          name:"ProfessorA GIS: CLASSIFICAÇÃO dos TRIÂNGULOS quanto às medidas dos LADOS e ÂNGULOS",
          acessKey:"Ka3GluTldeY"
        },
        {
          name:"ProfessorA GIS: ELEMENTOS DE UM TRIÂNGULO",
          acessKey:"ALKN3Gyn78M"
        },
        {
          name:"ProfessorA GIS: SOMA DOS ÂNGULOS INTERNOS DE UM TRIÂNGULO",
          acessKey:"mKalmiok3xs"
        },
        {
          name:"ProfessorA GIS: SENO, COSSENO E TANGENTE",
          acessKey:"D-E_A04ReTE"
        }
      ]
    },
    {
      name:"Quadriláteros",
      id:"Quadrilateros",
      videos:[
        {
          name:"ProfessorA GIS: ELEMENTOS DE UM QUADRILÁTERO",
          acessKey:"83mbKwONfo4"
        },
        {
          name:"ProfessorA GIS: SOMA DOS ÂNGULOS INTERNOS DE UM QUADRILÁTERO",
          acessKey:"T5BewTBRxLs"
        },
        {
          name:"ProfessorA GIS: QUADRILÁTEROS NOTÁVEIS",
          acessKey:"HQqjQhtrZNY"
        },
        {
          name:"Professor Pedro itallo: Quadriláteros",
          acessKey:"uT6sRYOzrhg"
        },
        {
          name:"Professor Rafael Procopio: Quadriláteros",
          acessKey:"vmpbGU9DImQ"
        }
      ]
    },
    {
      name:"Polígonos",
      id:"Poligonos",
      videos:[
        {
          name:"Professor Ferretto: Polígonos",
          acessKey:"cooNCC78aBI"
        },
        {
          name:"ProfessorA GIS: POLÍGONOS REGULARES",
          acessKey:"B-1xL2ym7SQ"
        },
        {
          name:"ProfessorA GIS: ELEMENTOS DE UM POLÍGONO",
          acessKey:"a3SW-pn3pUM"
        },
        {
          name:"Professor Pedro itallo: Polígonos",
          acessKey:"_QE8luLwo-A"
        },
      ]
    },
    {
      name:"Teorema de pitágoras",
      id:"Teorema_de_Pitágoras",
      videos:[
        {
          name:"ProfessorA GIS: TEOREMA DE PITÁGORAS",
          acessKey:"RxfPjqXx-g0"
        },
        {
          name:"ProfessorA GIS: TEOREMA DE PITÁGORAS EXERCÍCIOS",
          acessKey:"YBkhviGTcnM"
        },
        {
          name:"Professor Pedro itallo: Teorema de Pitágoras",
          acessKey:"DlVGui4ZqA0"
        },
        {
          name:"Professor Rafael Procopio: Teorema de Pitágoras com Exemplos e Exercícios",
          acessKey:"JcX2mtRDtCc"
        }
      ]
    },
    {
      name:"Circulo e Circunferência",
      id:"Circulo",
      videos:[
        {
          name:"Professora Angela: Área do Círculo",
          acessKey:"SN4UAh6Ewtg"
        },
        {
          name:"Professor Pedro itallo: Círculo e Circunferência",
          acessKey:"Se8K9mNcva0"
        },
        {
          name:"Professor Elton: Circunferência e Círculo ",
          acessKey:"xK4xBDmureo"
        },
      ]
    } 
    ]
  }
  const Aulas = [Algebra,Geometria];
  const back = '/Disciplinas/Matematica/MatematicaBasica'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/MatematicaBasica">
        <h2 className="h2ShowAula">Matemática Básica </h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default MatematicaBasica

import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const MatematicaFinanceira = () => {
  const [Videos, setVideos] = React.useState(null);
 
 
  const Introducao = {
    Subtitulo:"Introdução",
    Conteudo:[
      {
        name:"noções e proposições primitivas",
        id:"Nocoes_Primitivas",
        videos:[
          {
            name:"Professora Marina:Geometria Espacial de Posição - Conceitos Primitivos",
            acessKey:"Z-RDx98ugG4",
          },
          {
            name:"Professor Álvaro de Jesus: Termos Primitivos e Postulados",
            acessKey:"pluB0qWN_FQ",
          },   
          {
            name:"Proença matemática: Conceitos primitivos e postulados",
            acessKey:"wNCHHqO_D68",
          }
        ]
      },
      {
        name:"Determinação de Plano",
        id:"Determinacao_De_Plano",
        videos:[
          {
            name:"Professor Mario André: Determinação de planos",
            acessKey:"e1asKYZ7Fyk",
          },
          {
            name:"Professor Deniezio Gomes: DETERMINAÇÃO DE UM PLANO",
            acessKey:"pluB0qWN_FQ",
          },
          {
            name:"Professor Régis: Determinação de um plano e posições relativas ",
            acessKey:"anL5RKduumY",
          },   
        ]
      },
      {
        name:"Posições das retas",
        id:"Posicoes_Das_Retas",
        videos:[
          {
            name:"Professora Gis: RETAS PARALELAS, CONCORRENTES, PERPENDICULARES E COINCIDENTES",
            acessKey:"mP_FYcXKu0U",
          },
          {
            name:"Professora Edna Mendes: Relação entre duas retas - Posição relativa entre duas retas",
            acessKey:"mjFuhxwenX0",
          },
          {
            name:"Professora Nádja Sicleide: POSIÇÕES DAS RETAS",
            acessKey:"78GAWGSCEto",
          },
          {
            name:"Professor Marcos Paulo: Posição relativa entre retas.",
            acessKey:"qRcJPWDfJAA",
          },     
        ]
      }
    ]
  }
  const Paralelismo = {
    Subtitulo:"Paralelismo e Perpendicularidade",
    Conteudo:[
      {
        name:"Paralelismo e Perpendicularidade de retas",
        id:"Paralelismo_E_Perpendicularidade_De_Retas",
        videos:[
          {
            name:"Professor ferretto: Paralelismo entre retas no plano",
            acessKey:"pyb-5syEWdI",
          },
          {
            name:"Me Salva: Paralelismo e perpendicularidade entre reta",
            acessKey:"PuTqP6nfhTM",
          },
          {
            name:"Professor Jesse: Retas paralelas, perpendiculares, reversas e ortogonais",
            acessKey:"A52RXWfNqfw",
          },     
        ]
      },
      {
        name:"Paralelismo Entre Retas e planos",
        id:"Paralelismo_Entre_Retas_E_Planos",
        videos:[
          {
            name:"Professor Arcir bento junior: Paralelismo entre Planos e retas",
            acessKey:"OHVX_gMtNmQ",
          },
          {
            name:"Professor Everton Luiz de Oliveira: Paralelismo de Reta e Plano",
            acessKey:"x7For1c9Y34",
          }, 
        ]
      },
    ]
  }
  const Diedros = {
    Subtitulo:"Diedros",
    Conteudo:[
      {
        name:"Diedros",
        id:"Diedros",
        videos:[
          {
            name:"Professor Régis Ribeiro: Diedros",
            acessKey:"ae_jFWzwFa0",
          },
        ]
      },
    ]
  }
  const Triedros = {
    Subtitulo:"Triedros",
    Conteudo:[
      {
        name:"Triedros",
        id:"Triedros",
        videos:[
          {
            name:"Professor Régis Ribeiro: Triedros",
            acessKey:"1PrxyAA31II",
          },
        ]
      },
    ]
  }
  const Poliedros = {
    Subtitulo:"Poliedros",
    Conteudo:[
      {
        name:"Poliedros",
        id:"Poliedros",
        videos:[
          {
            name:"Professor Paulo pereira: CONCEITOS INICIAIS E RELAÇÃO DE EULER",
            acessKey:"v_PQnBk-8Mc",
          },
          {
            name:"Professor Paulo pereira: CALCULANDO O NÚMERO DE ARESTAS ",
            acessKey:"EO_DD_2yB_c",
          },
          {
            name:"Professor Paulo pereira: POLIEDROS DE PLATÃO",
            acessKey:"oLbzYParKtc",
          },
          {
            name:"Professor Paulo pereira: POLIEDROS REGULARES",
            acessKey:"n4RtMz5_5bY",
          },
          {
            name:"Professor Paulo pereira: SOMA DOS ÂNGULOS DAS FACES ",
            acessKey:"I_7E_Oq0ipw",
          },
          {
            name:"Professor Paulo pereira:  DEFINIÇÃO E CLASSIFICAÇÃO",
            acessKey:"QjW6pSH0jVc",
          },
          {
            name:"Professor Paulo pereira: PRISMAS: ÁREAS E VOLUMES",
            acessKey:"_sKcgx590J4",
          },
          {
            name:"Professor Paulo pereira: PARALELEPÍPEDOS: VOLUME, ÁREA E DIAGONAL",
            acessKey:"P8Cw3tafL3s",
          },
          {
            name:"Professor Paulo pereira: PIRÂMIDE",
            acessKey:"U2Ip283DZiM",
          },
          {
            name:"Professor Paulo pereira: TETRAEDRO REGULAR ",
            acessKey:"UUyX2FlenuI",
          },
          {
            name:"Professor Paulo pereira: CILINDRO ",
            acessKey:"rpbFsCa7D4E",
          },
          {
            name:"Professor Paulo pereira: CONE",
            acessKey:"RJSBvqVWHJo",
          },
          {
            name:"Professor Paulo pereira: ESFERA: Definição, Elementos, Seção esférica, Área e Volume",
            acessKey:"4mEqtfBXrl8",
          },
          {
            name:"Professor Paulo pereira: PARTES DA ESFERA: CUNHA E FUSO",
            acessKey:"YIf2mUNcJjg",
          },
          {
            name:"Professor Paulo pereira: TEOREMA DE PAPPUS GULDIN",
            acessKey:"_QLB4uC0vpw",
          },
          {
            name:"Professor Paulo pereira: TEOREMA DE PAPPUS GULDIN - CENTROIDE DO SEMICÍRCULO",
            acessKey:"J5nnGEIAudg",
          },
        ]
      },
    ]
  }
  const Troncos = {
    Subtitulo:"Troncos",
    Conteudo:[
      {
        name:"Troncos",
        id:"Troncos",
        videos:[
          {
            name:"Professor Paulo pereira: TRONCO DE CONE",
            acessKey:"QD3I7FbFCPo",
          },
          {
            name:"Professor Paulo pereira: TRONCO DE PIRÂMIDE",
            acessKey:"lnQnoZ5-_24",
          },
          {
            name:"Professor Paulo pereira: CONE, CILINDRO E ESFERA (Paródia)",
            acessKey:"-zJBbCf7nPY",
          },
        ]
      },
    ]
  }
  const Inscricao = {
    Subtitulo:"inscrição e circunscrição de sólidos",
    Conteudo:[
      {
        name:"inscrição e circunscrição de sólidos",
        id:"Inscricao_E_Circunscricao_De_Solidos",
        videos:[
          {
            name:"Professor Metralha: Esfera circunscrita e inscrita ao cubo",
            acessKey:"8kJycqhb_0Q",
          },
          {
            name:"Professor Metralha: Cone reto inscrito na esfera",
            acessKey:"_RzTCdJtumc",
          },
          {
            name:"Professor Metralha: Esfera inscrita ao cone reto",
            acessKey:"4DyCPqGtMlI",
          },
          {
            name:"Professor Metralha: Esfera circunscrita à pirâmide regular",
            acessKey:"IZcuaTPAqWw",
          },
          {
            name:"Professor Metralha: Esfera inscrita à piramide",
            acessKey:"4oR0_QPnF40",
          },
          {
            name:"Professor Metralha: Esfera circunscrita ao paralelepípedo reto-retângulo",
            acessKey:"JE5KWi6_PE8",
          },
          {
            name:"Professor Metralha: Cilindro reto inscrito na esfera",
            acessKey:"BXYbri9NSqc",
          },
          {
            name:"Professor Metralha: Esfera inscrita no cilindro equilátero",
            acessKey:"Yu2NPqyplmo",
          },
        ]
      },
    ]
  }

  const Aulas = [Introducao, Paralelismo, Diedros, Triedros, Poliedros, Troncos, Inscricao];
  const back = '/Disciplinas/matematica/MatematicaFinanceira'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/MatematicaFinanceira">
        <h2 className="h2ShowAula">Matematica Financeira</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default MatematicaFinanceira;

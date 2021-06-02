import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const GeometriaPlana = () => {
  const [Videos, setVideos] = React.useState(null);
 
 
  const Primitiva = {
    Subtitulo:"noções e proposições primitivas",
    Conteudo:[
      {
        name:"noções e proposições primitivas",
        id:"Nocoes_Primitivas",
        videos:[
          {
            name:"Professor Paulo Pereira: Conceitos Primitivos e Definições iniciais",
            acessKey:"XAK7m6SRLPw",
          },
          {
            name:"Professor warlisson: Noções primitivas",
            acessKey:"Y9M4E1f90E8",
          },   {
            name:"Estudo em Série: Postulados e Noções Primitivas",
            acessKey:"cN2w1FeW-qo",
          },
          {
            name:"Desenho Geométrico:  Noções e Proposições Primitivas",
            acessKey:"BTCA5apSc6Q",
           },
        ]
      },
    ]
  }
  const SegmentoDeReta = {
    Subtitulo:"Segmento De Reta",
    Conteudo:[
      {
        name:"Segmento De Reta",
        id:"Segmento_De_Reta",
        videos:[
          {
            name:"Professora Gis: Reta, semirreta e segmento de reta",
            acessKey:"FG0lcfR6-Cg",
          },
          {
            name:"Professora Gis: SEGMENTOS de RETA: CONGRUENTES, CONSECUTIVOS, COLINEARES e ADJACENTES",
            acessKey:"CeoJyYENKcY",
          },
          {
            name:"Professora Angela: Você sabe a diferença entre: RETA, SEMIRRETA e SEGMENTO DE RETA",
            acessKey:"DLSYKM6wFXU",
          },
          {
            name:"Professor Ítalo Benfica: Reta, semirreta e segmento de reta",
            acessKey:"5eCsLGsrjJA",
          },
          {
            name:"Professor Marcos Paulo: Segmento de reta",
            acessKey:"B-6zWcW5tYw",
          },
          {
            name:"Professora Gisele Ramos: Segmentos consecutivos e colineares",
            acessKey:"GTd4-GJDkyw",
          },
        ]
      },
    ]
  }
  const Angulos = {
    Subtitulo:"Ângulos",
    Conteudo:[
      {
        name:"ângulos",
        id:"Angulos",
        videos:[
          {
            name:"Professor Paulo Pereira: Ângulos",
            acessKey:"fLJtL0_9UEs",
          },
          {
            name:"Professora Gis:  Definição e tipos de ângulos. ",
            acessKey:"nAvqZSglTmA",
          },   {
            name:"Professora Angela: O que é ângulo e a sua classificação",
            acessKey:"AYD1Hu-eV7w",
          },
          {
            name:"Professor Italo Benfica: O que é ângulo?",
            acessKey:"G5Pr2Aqw4xU",
           },
        ]
      },
    ]
  }
  const  Triangulos = {
    Subtitulo:"Triângulos",
    Conteudo:[
      {
        name:"Triângulos",
        id:"Triangulos",
        videos:[
          {
            name:"Professor Ferretto: Introdução aos Triângulos",
            acessKey:"TyyTOvjo3D0",
          },
          {
            name:"Professor Ferretto: Classificação dos Triângulos ",
            acessKey:"3x920GHyF4g",
          },
          {
            name:"Professor Ferretto: Pontos Notáveis do Triângulo",
            acessKey:"dAZ-mUZbA-A",
          },
          {
            name:"Professor Ferretto: Área de Triângulos",
            acessKey:"XlJEpO0K4b0",
          },
          {
            name:"Professor Ferretto: Semelhança de Triângulos",
            acessKey:"LxFlnxS6iMg",
          },
          {
            name:"Professor Ferretto: Triângulo Retângulo - Relações Métricas",
            acessKey:"f4JBVvr72MQ",
          },
          {
            name:"Professor Ferretto: Triângulo Equilátero",
            acessKey:"OO8NKf_NKJo",
          },
        ]
      },
    ]
  }
  const Tales = {
    Subtitulo:"Teorema de Tales",
    Conteudo:[
      {
        name:"Teorema De Tales",
        id:"Teorema_De_Tales",
        videos:[
          {
            name:"Professor Ferretto: Teorema de Tales",
            acessKey:"MQw2524ZZcU",
          },
          {
            name:"Professora Angela: Teorema de Tales",
            acessKey:"Qaeyxw8DT70",
          },
          {
            name:"Professor Paulo pereira: Teorema de Tales",
            acessKey:"2WSNrpVS6XU",
          },
          {
            name:"Professor Pedro ítalo: Teorema de Tales",
            acessKey:"qL20pLwlnps",
          },
        ]
      },
    ]
  }
  const Quadrilateros = {
    Subtitulo:"Quadriláteros",
    Conteudo:[
      {
        name:"Paralelogramo",
        id:"Paralelogramo",
        videos:[
          {
            name:"Professor Ferretto: Paralelogramo",
            acessKey:"KrFNq-8aP_4",
          },
          {
            name:"Professor Paulo pereira: Paralelogramo",
            acessKey:"HQKz8YERA0c",
          },
          {
            name:"Professora Angela: Área do Paralelogramo",
            acessKey:"Qaeyxw8DT70",
          },
          {
            name:"Professora gis: ÁREA DO PARALELOGRAMO",
            acessKey:"108plb2-9X0",
          },
        ]
      },
      {
        name:"Retângulo",
        id:"Retangulo",
        videos:[
          {
            name:"Professor Ferretto: Retângulo",
            acessKey:"ddfkogMMVEc",
          },
          {
            name:"Professora Angela: Área do Retângulo",
            acessKey:"W3pE970YBrE",
          },
          {
            name:"Professora gis: ÁREA DO Retângulo",
            acessKey:"aIKxhaxynJ8",
          },
        ]
      },
      {
        name:"Losango",
        id:"Losango",
        videos:[
          {
            name:"Professor Ferretto: Losango",
            acessKey:"BWWaSz-X6nM",
          },
          {
            name:"Professora Angela: Área do Losango",
            acessKey:"ZnkDFRY-SoQ",
          },
          {
            name:"Professora gis: ÁREA DO Losango",
            acessKey:"wkyLfHIYP9w",
          },
        ]
      },
      {
        name:"Quadrado",
        id:"Quadrado",
        videos:[
          {
            name:"Professor Ferretto: Quadrado",
            acessKey:"p6xYxnH6yPs",
          },
          {
            name:"Professora Angela: Área do Quadrado",
            acessKey:"FBzhiZ4lNpc",
          },
          {
            name:"Professora gis: ÁREA DO Quadrado",
            acessKey:"vdQMamMsPN4",
          },
        ]
      },
      {
        name:"Trapézio",
        id:"Trapezio",
        videos:[
          {
            name:"Professor Ferretto: Trapézio",
            acessKey:"2IPnbQmO88Y",
          },
          {
            name:"Professor Paulo perreira: Trapézio",
            acessKey:"3Ao3drziEaQ",
          },
          {
            name:"Professora Angela: Área do Trapézio",
            acessKey:"H3X4pnmtURg",
          },
          {
            name:"Professora gis: ÁREA DO Trapézio",
            acessKey:"8QjE6LON_Y0",
          },
        ]
      },
    ]
  }
  const HexagonoReg = {
    Subtitulo:"Hexagono",
    Conteudo:[
      {
        name:"Hexagono Regular",
        id:"Hexagono_Regular",
        videos:[
          {
            name:"Professor Ferretto: Hexágono Regular",
            acessKey:"Y5Yq_QJcTEw",
          },
          {
            name:"Professor Rafa Jesus: Noções primitivas",
            acessKey:"-qWoy1Z6mFI",
          }
        ]
      },
    ]
  }
  const Circunferencia = {
    Subtitulo:"Circunferência",
    Conteudo:[
      {
        name:"Circunferência",
        id:"Circunferencia",
        videos:[
          {
            name:"Professor Ferretto: Conceitos Iniciais",
            acessKey:"gojZfbyitrM",
          },
          {
            name:"Professor Ferretto: Relações Métricas na Circunferência",
            acessKey:"kIqcsGBKRq0",
          },
          {
            name:"Professor Ferretto: Potência de Ponto",
            acessKey:"qKyE7Q8rr1I",
          },
          {
            name:"Professor Ferretto: Ângulos na Circunferência",
            acessKey:"NKEPE99XOkQ",
          },
          {
            name:"Professor Ferretto: Ângulos na Circunferência - Parte 2",
            acessKey:"JphuTOv_kE8",
          },
          {
            name:"Professor Ferretto: Comprimento da Circunferência",
            acessKey:"Et9z68v5UQ4",
          },
          {
            name:"Professor Ferretto: Área do Círculo e Setor Circular",
            acessKey:"oaN_ui6K2w4",
          },
          {
            name:"Professor Ferretto: Área de Segmento e Coroa Circulares",
            acessKey:"MNxLUQQDr18",
          },
        ]
      },
    ]
  }
  const Areas = {
    Subtitulo:"Razão entre áreas",
    Conteudo:[
      {
        name:"Razão entre áreas",
        id:"Razao_Entre_Areas",
        videos:[
          {
            name:"Professor ferretto: Áreas Semelhantes",
            acessKey:"gZsfA88Yar0",
          },
          {
            name:"Professor Rodrigo Ribeiro: Semelhança de figuras e razão entre suas áreas",
            acessKey:"2QPsvNPjVXs",
          },  
          {
            name:"Professor Cadu: Razão de semelhança de para áreas",
            acessKey:"SyuEFjkgUt4",
          },
          {
            name:"Professor Gustavo Adolfo: Razão entre Áreas de Triângulos",
            acessKey:"eKsGoOck7Uw",
           },
        ]
      },
    ]
  }
  const Aulas = [Primitiva, SegmentoDeReta, Angulos, Triangulos, Tales, Quadrilateros, HexagonoReg, Circunferencia, Areas];
  const back = '/Disciplinas/matematica/GeometriaPlana'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/GeometriaPlana">
        <h2 className="h2ShowAula">Geometria Plana</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default GeometriaPlana;

import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import ShowAulas from '../ShowAulas';
import ShowVideos from '../ShowVideos';


const GeometriaAnalitica = () => {
  const [Videos, setVideos] = React.useState(null);
 
  const CoordenadasNoPlano = {
    Subtitulo:"Coordenadas Cartesianas no Plano",
    Conteudo:[
      {
        name:"noções básicas",
        id:"Nocoes_Basicas",
        videos:[
          {
            name:"Professora Gis: PLANO CARTESIANO",
            acessKey:"EAeTBeEHSD4",
          },
          {
            name:"Professor Marcos Aba: PLANO CARTESIANO",
            acessKey:"00jYGdYKFls",
          },
          {
            name:"Professor Pedro itallo vaz: PLANO CARTESIANO",
            acessKey:"stGz9jipoaw",
          },
        ]
      },
      {
        name:"Distância entre dois pontos",
        id:"Distancia_Entre_Dois_Pontos",
        videos:[
          {
            name:"Professora Angela: Distância entre dois pontos",
            acessKey:"2fDRVCidiic",
          },
          {
            name:"Professor Paulo Perreira: PLANO CARTESIANO",
            acessKey:"ZJ5Aqwcx9f4",
          },
          {
            name:"Professor Pedro itallo vaz: Distância Entre Dois Pontos",
            acessKey:"2zpUD83EaMY",
          },
        ]
      },
      {
        name:"Razão de Secção",
        id:"Razao_De_Secção",
        videos:[
          {
            name:"Professor Orestes: Razão de Secção",
            acessKey:"1EG2HYOR6Uk",
          },
          {
            name:"Professor Marcos murakami: Distância Entre Dois Pontos",
            acessKey:"CKGdYQt_9OQ",
          },
        ]
      },
      {
        name:"Coordenadas do Ponto Divisor",
        id:"Coordenadas_do_Ponto_Divisor",
        videos:[
          {
            name:"Professor Orestes: Razão de Secção",
            acessKey:"1EG2HYOR6Uk",
          },
          {
            name:"Professor Marcos murakami: Distância Entre Dois Pontos",
            acessKey:"CKGdYQt_9OQ",
          },
        ]
      },
      {
        name:"Condição para o alinhamento de 3 pontos",
        id:"Condicao_Para_O_Alinhamento_De_Tres_Pontos",
        videos:[
          {
            name:"Professora Angela: Condição de alinhamento de três pontos",
            acessKey:"Ao5RgKNDS9g",
          },
          {
            name:"Professor Wagner Rogério Mantovani: Condição de Alinhamento de 3 pontos",
            acessKey:"g2hf8S-bveY",
          },
          {
            name:"Professor josé Alex: Condição de Alinhamento de três pontos",
            acessKey:"eiQqObSWJQM",
          },
          {
            name:"Me Salve: Alinhamento de 3 pontos",
            acessKey:"-A6TGMjVd6I",
          },
        ]
      },
    ]
  }
  const EquacaoDaReta = {
    Subtitulo:"Equação da Reta",
    Conteudo:[
      {
        name:"Equação Geral",
        id:"Equacao_Geral",
        videos:[
          {
            name:"Professora Angela: Equação geral da reta",
            acessKey:"oz5FtYmX8Nk",
          },
          {
            name:"Professor Paulo Pereira: G. A. EQUAÇÃO GERAL DA RETA",
            acessKey:"pRNnguDcR6Y",
          },
          {
            name:"Professor José Alex: Equação Geral da Reta",
            acessKey:"2IUCQkjeiw4",
          },
          {
            name:"Professor Diego Lima: Equação Geral da Reta",
            acessKey:"5LDpyQSOxVg",
          },
        ]
      },
      {
        name:"Intersecção de Duas Retas",
        id:"Interseccao_De_Duas_Retas",
        videos:[
          {
            name:"Professora Angela: Ponto de Intersecção entre Duas Retas",
            acessKey:"jZ-djBLyDx8",
          },
          {
            name:"Professor Virtual: Como encontrar ponto de intersecção entre duas retas",
            acessKey:"JuZdk9QEGRg",
          },
          {
            name:"Professor Murakami: Intersecção entre duas retas",
            acessKey:"WGbK6O4Z4dU",
          },
          {
            name:"Me Salva:  Intersecção entre duas retas",
            acessKey:"bdC0SACOgUk",
          },
        ]
      },
      {
        name:"Posição relativa entre Duas Retas",
        id:"Posicao_Relativa_Entre_Duas_Retas",
        videos:[
          {
            name:"Professora Angela: Posição relativa e duas retas no plano",
            acessKey:"rz__bw-XNH4",
          },
          {
            name:"Professor Paulo Pereira: G. A. POSIÇÃO RELATIVA DE RETAS",
            acessKey:"toO6S_gbKC4",
          },
          {
            name:"Professora Edna Mendes: Posição relativa entre duas retas",
            acessKey:"mjFuhxwenX0",
          },
          {
            name:"Professora Wergila Tavares: Posição relativa entre duas retas no plano cartesiano",
            acessKey:"IJlOXQ5nWes",
          },
        ]
      },
      {
        name:"Equação reduzida da Reta",
        id:"Equacao_Reduzida_Da_Reta",
        videos:[
          {
            name:"Professora Angela: Equação Reduzida da Reta",
            acessKey:"rcZeDO5MfWM",
          },
          {
            name:"Professor Paulo Pereira: G. A. EQUAÇÃO REDUZIDA DA RETA",
            acessKey:"N4QfzVvgH4Y",
          },
          {
            name:"Me Salva: Equação reduzida e geral da reta",
            acessKey:"_3c-0MiMgRk",
          }
        ]
      },
      {
        name:"Equação Segmentária da Reta",
        id:"Equacao_Segmentaria_Da_Reta",
        videos:[
          {
            name:"Professor Marcos Murakami: Equação segmentária da reta",
            acessKey:"SLJrgUL9nxA",
          },
          {
            name:"Professor Paulo Pereira: G. A. EQUAÇÃO SEGMENTÁRIA DA RETA",
            acessKey:"JeLjoqSrBqI",
          },
          {
            name:"Professor José alex: Equação Segmentária",
            acessKey:"G2RMplfEh9k",
          },
          {
            name:"Professor Ferretto: Equação Reduzida da Reta  A partir da Equação Segmentária",
            acessKey:"PK_bdBkuJtA",
          }
        ]
      },
    ]
  }
  const TeoremaAngular = {
    Subtitulo:"Teorema Angular",
    Conteudo:[
      {
        name:"Coeficiente Angular",
        id:"Coeficiente_Angular",
        videos:[
          {
            name:"Professor José Alex: Inclinação e Coeficiente Angular de uma reta",
            acessKey:"1MGixxI0sPY",
          },
          {
            name:"ProfessorO Monstro da Matemática: Coeficiente Angular da Reta",
            acessKey:"bzwItOJrVbA",
          },
          {
            name:"Professor Murakami: COEFICIENTE ANGULAR DA RETA",
            acessKey:"T6_keTi5QWg",
          },
          {
            name:"Professor Abraão: Coeficiente Angular de uma Reta",
            acessKey:"K-j-kk0nN2E",
          },
        ]
      },
      {
        name:"ângulo formado por duas retas",
        id:"Angulo_Formado_Por_Duas_Retas",
        videos:[
          {
            name:"Professor Paulo Pereira: G. A. ÂNGULO ENTRE DUAS RETAS",
            acessKey:"P5Fkmldajg4",
          },
          {
            name:"Professor Orestes: Ângulo Entre Retas",
            acessKey:"RVe2QuAneHo",
          }
        ]
      },
    ]
  }
  const Circunferencia = {
    Subtitulo:"Circunferência",
    Conteudo:[
      {
        name:"Equação reduzida da Circunferência",
        id:"Equacao_Reduzida_Da_Circunferencia",
        videos:[
          {
            name:"Professora Angela: EQUAÇÃO REDUZIDA DA CIRCUNFERÊNCIA",
            acessKey:"jXWHwoBye60",
          },
          {
            name:"Professor Paulo Pereira: Equação reduzida da circunferência",
            acessKey:"p93CirSoL8A",
          },
          {
            name:"Professor Sandro Curió: EQUAÇÃO REDUZIDA DA CIRCUNFERÊNCIA",
            acessKey:"c-FZLWvPepg",
          },
        ]
      },
      {
        name:"Equação Geral da Circunferência",
        id:"Equacao_Geral_Da_Circunferencia",
        videos:[
          {
            name:"Professora Ana Maria: EQUAÇÃO GERAL DA CIRCUNFERÊNCIA",
            acessKey:"UY27TklXPNQ",
          },
          {
            name:"Professor Paulo Pereira: Equação geral da circunferência",
            acessKey:"tu81HCPl4mU",
          },
          {
            name:"Professor Sandro Curió: EQUAÇÃO Geral DA CIRCUNFERÊNCIA",
            acessKey:"ItWiSvXxsww",
          },
          {
            name:"Professora Prisquilla: Equação geral da circunferência",
            acessKey:"jehfYTCSNyE",
          },
        ]
      },
      {
        name:"posição relativa entre ponto e circunferência",
        id:"Posicao_Relativa_Entre_Ponto_E_Circunferencia",
        videos:[
          {
            name:"Professora Helena: Posição Relativa entre Ponto e Circunferência",
            acessKey:"L8YNNXelk18",
          },
          {
            name:"Professor Paulo Pereira: G. A.POSIÇÃO RELATIVA ENTRE PONTO E CIRCUNFERÊNCIA",
            acessKey:"8187RbQWFas",
          }
        ]
      },
      {
        name:"posição relativa entre Reta e circunferência",
        id:"Posicao_Relativa_Entre_Reta_E_Circunferencia",
        videos:[
          {
            name:"Professora Alê: Aulão de POSIÇÃO RELATIVA entre RETA e CIRCUNFERÊNCIA",
            acessKey:"JL1oIBysOxE",
          },
          {
            name:"Professor Paulo Pereira: G. A.POSIÇÃO RELATIVA ENTRE PONTO E CIRCUNFERÊNCIA",
            acessKey:"5GNJmo1bMlY",
          },
          {
            name:"Professor Cadu: Posições relativas entre reta e circunferência",
            acessKey:"tAhKlXX_0Mc",
          }
        ]
      },
      {
        name:"posição relativa entre circunferências",
        id:"Posicao_Relativa_Entre_Circunferencias",
        videos:[
          {
            name:"Professor Paulo Pereira: G. A.POSIÇÃO RELATIVA ENTRE PONTO E CIRCUNFERÊNCIA",
            acessKey:"5GNJmo1bMlY",
          },
          {
            name:"Professor Cadu: Posições relativas entre duas circunferências",
            acessKey:"6h5_kNoEtMk",
          },
          {
            name:"Professora Lilian: Posição relativa entre circunferências",
            acessKey:"scIy4zz5l8s",
          },
          {
            name:"Professora Helena Martins: G.A. Posições relativas entre circunferências",
            acessKey:"8rqfR_5Rf38",
          },
        ]
      },
    ]
  }
  const Conicas = {
    Subtitulo:"Cônicas",
    Conteudo:[
      {
        name:"Elípse",
        id:"Equacao_Reduzida_Da_Circunferencia",
        videos:[
          {
            name:"Professora Angela: EQUAÇÃO REDUZIDA DA CIRCUNFERÊNCIA",
            acessKey:"jXWHwoBye60",
          },
          
        ]
      },
      {
        name:"Hipérbole",
        id:"Equacao_Reduzida_Da_Circunferencia",
        videos:[
          {
            name:"Professora Angela: EQUAÇÃO REDUZIDA DA CIRCUNFERÊNCIA",
            acessKey:"jXWHwoBye60",
          },
          
        ]
      },
      {
        name:"Parábola",
        id:"Equacao_Reduzida_Da_Circunferencia",
        videos:[
          {
            name:"Professora Angela: EQUAÇÃO REDUZIDA DA CIRCUNFERÊNCIA",
            acessKey:"jXWHwoBye60",
          },
          
        ]
      },
      {
        name:"Reconhecimento de uma cônica",
        id:"Equacao_Reduzida_Da_Circunferencia",
        videos:[
          {
            name:"Professora Angela: EQUAÇÃO REDUZIDA DA CIRCUNFERÊNCIA",
            acessKey:"jXWHwoBye60",
          },
          
        ]
      },
      {
        name:"Intersecção de cônicas",
        id:"Equacao_Reduzida_Da_Circunferencia",
        videos:[
          {
            name:"Professora Angela: EQUAÇÃO REDUZIDA DA CIRCUNFERÊNCIA",
            acessKey:"jXWHwoBye60",
          },
          
        ]
      },
      {
        name:"Tangentes a uma cônica",
        id:"Equacao_Reduzida_Da_Circunferencia",
        videos:[
          {
            name:"Professora Angela: EQUAÇÃO REDUZIDA DA CIRCUNFERÊNCIA",
            acessKey:"jXWHwoBye60",
          },
          
        ]
      },
    ]
  }

  const Aulas = [CoordenadasNoPlano, EquacaoDaReta, TeoremaAngular, Circunferencia, Conicas];
  const back = '/Disciplinas/matematica/GeometriaAnalitica'
  return (
    <div>
      <Link to="/Disciplinas/Matematica/GeometriaAnalitica">
        <h2 className="h2ShowAula">Geometria Analítica</h2>
      </Link>
      <Routes>
       <Route path='' element={<ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
       <Route path='/*' element={ Videos?<ShowVideos Videos = {Videos}/>: <ShowAulas back ={back} Aulas = {Aulas} setVideos = {setVideos}/>}/>
      </Routes>
    </div>
  )
}

export default GeometriaAnalitica;

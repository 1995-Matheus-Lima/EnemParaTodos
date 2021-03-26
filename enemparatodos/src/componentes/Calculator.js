import React from 'react'
import '../index.css'

const Calculator = () => {
  const [naturezas, setNarutezas] = React.useState(0)
  const [humanas, setHumanas] = React.useState(0)
  const [linguagem, setLinguagem] = React.useState(0)
  const [matematica, setMatematica] = React.useState(0)
  const [redacao, setRedacao] = React.useState(0)
  const [pesos, setPesos] = React.useState([1,1,1,1,1])
  const [notaCorreta, setNotaCorreta] = React.useState(true)
  const [pesoCorreto, setPesoCorreto] = React.useState(true)
  const [media, setMedia] = React.useState( '000.000') 

  React.useEffect(() => {
    var status = true
    pesos.forEach((item)=>{
      if (isNaN(item) || (item < 0 ) ){
        status = false
      }
    setPesoCorreto(status)
    })
  }, [pesos,pesoCorreto])

  const handleChange = (Response,func) => {
    func(Response.value)
  }
  const setPesosInput = (target,index) =>{
    const newArray = []
    pesos.map((valor,i) => {
      if ( i === index){
        newArray.push(parseFloat(target.value))
      }
      else{
        newArray.push(valor)
      }
      return 0
    })
    setPesos(newArray)
  } 

  const notas = [naturezas, humanas, linguagem, matematica, redacao] 
  const showNota = () =>{
    const arrayMultiplicacao = notas.map((item,index) => (
      item * pesos[index]
    ))
    console.log(arrayMultiplicacao);
    const somaNota = arrayMultiplicacao.reduce((somaNota, currentElement)=>( somaNota +currentElement))
    const somaPeso = pesos.reduce((SomaPeso, currentElement)=>( SomaPeso+ currentElement))
    const mediaFinal = (somaNota/somaPeso).toFixed(3)
    setMedia(mediaFinal)
  }
  const simularNota = ( event ) => {
    event.preventDefault();
    notas.forEach((nota) => {if (nota < 0 ){setNotaCorreta(false)}} )

    if( notaCorreta && pesoCorreto){
      showNota()
    }
    
  } 
  
  return (
    <div className='containerHome'>
        <h1>Simule sua nota Aqui</h1>
        <form className="FormCalculator">
          <table>
            <thead>
              <tr>
                <th>ÁREA DE CONHECIMENTO</th>
                <th>NOTA</th>
                <th>PESO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tabelaEscuro">
                <td>Ciências da Natureza e suas Tecnologias</td>
                <td><input type="number" step="0.01" value ={naturezas} onFocus={(event)=>{event.target.select()}}   onChange={(event)=>{handleChange(event.target, setNarutezas)}} required/></td>
                <td><input type="number"  value={pesos[0]?pesos[0]:''} onFocus={(event)=>{event.target.select()}} onChange={(event) => {setPesosInput(event.target,0)}} required/></td>
              </tr>
              <tr className="tabelaClaro">
                <td>Ciências Humanas e suas Tecnologias</td>
                <td><input type="number" step="0.01" value ={humanas}  onFocus={(event)=>{event.target.select()}} onChange={(event)=>{handleChange(event.target, setHumanas)}} required/></td>
                <td><input type="number" value={pesos[1]} onFocus={(event)=>{event.target.select()}}  onChange={(event) => {setPesosInput(event.target,1)}}required/></td>
              </tr>
              <tr className="tabelaEscuro">
                <td>Linguagens, Códigos e suas Tecnologias</td>
                <td><input type="number" step="0.01"value ={linguagem}  onFocus={(event)=>{event.target.select()}}  onChange={(event)=>{handleChange(event.target, setLinguagem)}} required/></td>
                <td><input type="number" value={pesos[2]} onFocus={(event)=>{event.target.select()}} onChange={(event) => {setPesosInput(event.target,2)}} required/></td>
              </tr>
              <tr className="tabelaClaro">
                <td>Matemática e suas Tecnologias</td>
                <td><input type="number" step="0.01" value ={matematica} onFocus={(event)=>{event.target.select()}} onChange={(event)=>{handleChange(event.target, setMatematica)}} required/></td>
                <td><input type="number"  value={pesos[3]} onFocus={(event)=>{event.target.select()}} onChange={(event) => {setPesosInput(event.target,3)}} required/></td>
              </tr><tr className="tabelaEscuro">
                <td>Redação</td>
                <td><input type="number" step="0.01" value ={redacao} onFocus={(event)=>{event.target.select()}} onChange={(event)=>{handleChange(event.target, setRedacao)}} required/></td>
                <td><input type="number"  value={pesos[4]} onFocus={(event)=>{event.target.select()}} onChange={(event) => {setPesosInput(event.target,4)}} required/></td>
              </tr>
            </tbody>
          </table>
          <button type='submit' onClick={simularNota}>Simular Nota</button>
          <div className="Resultado">
            <p>Média: {media}</p>
          </div>
        </form>
    </div>
  )
}

export default Calculator

import React from 'react'
import '../index.css'

const Calculator = () => {
  
  return (
    <div class='containerHome'>
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
                <td><input type="number" step="0.001" required/></td>
                <td><input type="number" value="1" required/></td>
              </tr>
              <tr className="tabelaClaro">
                <td>Ciências Humanas e suas Tecnologias</td>
                <td><input type="number" step="0.001" required/></td>
                <td><input type="number" value="1" required/></td>
              </tr>
              <tr className="tabelaEscuro">
                <td>Linguagens, Códigos e suas Tecnologias</td>
                <td><input type="number" step="0.001" required/></td>
                <td><input type="number" value="1"  required/></td>
              </tr>
              <tr className="tabelaClaro">
                <td>Matemática e suas Tecnologias</td>
                <td><input type="number" step="0.001" required/></td>
                <td><input type="number" value="1"  required/></td>
              </tr>
            </tbody>
          </table>
          <button>Simular Nota</button>
          <div className="Resultado">
            <p>Média: </p>
            <p></p>
          </div>
        </form>
    </div>
  )
}

export default Calculator

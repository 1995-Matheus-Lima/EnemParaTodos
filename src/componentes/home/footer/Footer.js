import React from 'react'
import '../../../index.css'

const Footer = () => {
  return (
    <div className="blockFooter">
      <div className="FooterStyle">
        <p>É necessário sempre acreditar que o sonho é possível
  que o céu é o limite e você, truta, é imbatível</p>
        <h2>Racionais MC's</h2>
      </div>
      <p className="copy">© Matheus Henrique dos Santos Lima  ---- Agradecimento:
       {// eslint-disable-next-line react/jsx-no-target-blank
       <a href="https://unsplash.com/@jaimelopes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'> Jaime Lopes</a>
       }
       </p>
    </div>
  )
}

export default Footer

import React from 'react'
import { HeaderContainer } from './style'
import scilogo from '../../assets/logo.png'
import unicologo from '../../assets/unicologo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={unicologo} alt="logo do único" />
      </div>
      <div>
        Calculadora de tempo de treinamento
      </div>
    </HeaderContainer>
  )
}

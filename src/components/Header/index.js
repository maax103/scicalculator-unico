import React from 'react'
import { HeaderContainer } from './style'
import scilogo from '../../assets/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
        <img src={scilogo} alt="sci logo"></img>
        <div>
            Calculadora de tempo de treinamento
        </div>
    </HeaderContainer>
  )
}

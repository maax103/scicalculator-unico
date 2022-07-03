import React from 'react'
import { FooterContainer } from './style'
import scilogo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <FooterContainer>
        <img src={scilogo} alt="sci logo"></img>
    </FooterContainer>
  )
}

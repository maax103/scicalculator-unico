import { UserContext } from '../../context/context';
import React, { useContext } from 'react'
import { CardContainer } from './style'

export const Card = ({tittle}) => {

  const value = React.useContext(UserContext);
    
  return (    
    <CardContainer>
        {tittle}
        <div>
        {value}
        </div>
    </CardContainer>
  )
}

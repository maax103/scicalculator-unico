import { UserContext } from '../../context/context';
import React, { useContext } from 'react'
import { CardContainer } from './style'

export const ClientCard = () => {

  const context = React.useContext(UserContext);
  // console.log(context.clients);

  function handleClient(client) {

    let clients = {
      "1": false,
      "2": false,
      "3": false
    };
    clients[client] = true;
    console.log(context.clients);
    context.setClients(clients);
    console.log(context.clients);
  }

  return (
    <CardContainer>
      <h1>
        Cliente
      </h1>
      <div>
        <label>
          <input type='radio'
            onClick={() => {
              handleClient(1);
            }} value={context.clients[1]}
            checked={this.value === 1}></input>
          Cliente final (Empresa)
        </label>
        <label>
          <input type='radio' onChange={() => { handleClient(2) }} value={context.clients[2]}></input>
          Empresa com 1 ou 2 usuários
        </label>
      </div>
    </CardContainer>
  )
}

import { UserContext } from "../../context/context";
import React, { useContext } from "react";
import { CardContainer } from "./style";

export const ClientCard = () => {
  const context = useContext(UserContext);

  function handleClient(client) {
    let clients = {
      "1": false,
      "2": false,
      "3": false,
    };
    clients[client] = true;
    context.setClients(clients);
  }

  return (
    <CardContainer>
      <h1>Selecione o tipo de cliente</h1>
      <div>
        <label>
          <input
            type="radio"
            name="client"
            onChange={() => {
              handleClient(1);
            }}
            value={context.clients[1]}
            checked={context.clients[1]}
          ></input>
          Cliente final (Empresa)
        </label>
        <label>
          <input
            type="radio"
            name="client"
            onChange={() => {
              handleClient(2);
            }}
            value={context.clients[2]}
            checked={context.clients[2]}
          ></input>
          Empresa com 1 ou 2 usuários
        </label>
        <label>
          <input
            type="radio"
            name="client"
            onChange={() => {
              handleClient(3);
            }}
            value={context.clients[3]}
            checked={context.clients[3]}
          ></input>
          Empresa acima de 3 usuários
        </label>
      </div>
    </CardContainer>
  );
};

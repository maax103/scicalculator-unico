import { UserContext } from "../../context/context";
import React, { useContext } from "react";
import { SystemCardContainer } from "./style.js";

export const SystemCard = () => {
  const context = useContext(UserContext);

  function handleSystem(system) {
    context.setSystems({
      ...context.systems,
      [system]: !context.systems[system],
    });
  }

  return (
    <SystemCardContainer>
      <h1>Selecione o treinamento dos módulos</h1>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              handleSystem("practice");
            }}
            value={context.systems["practice"]}
            checked={context.systems["practice"]}
          ></input>
          Practice
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              handleSystem("suprema");
            }}
            value={context.systems["suprema"]}
            checked={context.systems["suprema"]}
          ></input>
          Suprema
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              handleSystem("sucessor");
            }}
            value={context.systems["sucessor"]}
            checked={context.systems["sucessor"]}
          ></input>
          Sucessor
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              handleSystem("controller");
            }}
            value={context.systems["controller"]}
            checked={context.systems["controller"]}
          ></input>
          Controller
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              handleSystem("web");
            }}
            value={context.systems["web"]}
            checked={context.systems["web"]}
          ></input>
          Tecnologias WEB
        </label>
      </div>
    </SystemCardContainer>
  );
};

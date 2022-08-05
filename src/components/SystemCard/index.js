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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function systemLabel(name, index){
    return (
      <label key={index}>
        <input
            type="checkbox"
            onChange={() => {
              handleSystem(name);
            }}
            value={context.systems[name]}
            checked={context.systems[name]}
          ></input>
          {capitalizeFirstLetter(name)}
      </label>
    )
  }

  return (
    <SystemCardContainer>
      <h1>Selecione o treinamento dos módulos</h1>
      <div>
        {Object.keys(context.systems).map((system, index) => systemLabel(system, index))}
      </div>
    </SystemCardContainer>
  );
};

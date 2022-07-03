import React, { useContext } from "react";
import { ResultContainer } from "./style";
import { tasklist } from "../../const/tasklist";
import { UserContext } from "../../context/context";

export const Result = ({ activeItems }) => {
  const context = useContext(UserContext);
  const systems = Object.keys(activeItems).map((item) =>
    activeItems[item] ? item : ""
  );

  let list = {};
  if (systems.length) {
    systems.forEach((system) => {
      let sistemlist = activeItems[system];

      let newItem = [];
      Object.keys(sistemlist).forEach((item) => {
        if (sistemlist[item] && !newItem.includes(sistemlist[item])) {
          newItem.push(item);
        }
      });
      list = { ...list, [system]: newItem };
    });
  }

  let total = {};
  if (systems.length) {
    systems.forEach((system) => {
      total = {
        ...total,
        [system]: list[system].reduce(
          (acum, item) => acum + tasklist[system][item],
          0
        ),
      };
    });
  }

  const clientFactorList = ["", 2.5, 0.6, 1];
  let clientFactor = 0;
  Object.keys(context.clients).forEach((clientKey)=>{
    if(context.clients[clientKey] === true){
      clientFactor = clientFactorList[clientKey];
    }
  })

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // console.log(systems[0])
  // console.log(activeItems);
  // console.log(total);

  return (
    <ResultContainer>
      {Object.values(context.systems).every((value) => value === false) ? (
        <h3 className="empty">Selecione um sistema para iniciar o cálculo</h3>
      ) : (
        <>
          <h3>Horas de treinamento</h3>
          <ul>
            {Object.keys(context.systems).map((system) => {
              return context.systems[system] ? (
                <li>
                  <p>{capitalizeFirstLetter(system)}</p>
                  <p>{total[system]}</p>
                </li>
              ) : (
                ""
              );
            })}
            <li>
              <p>Fator usuário</p>
              <p>{clientFactor}</p>
            </li>
          </ul>
          {/* <li>
          <p>Practice</p>
          <p>{total["practice"]}</p>
          </li>
          <li>
          <p>Sucessor</p>
          <p>1</p>
        </li> */}
          <div>
            <p>TOTAL</p>
            <p>
              {Math.ceil(
                Object.keys(total).reduce(
                  (acum, system) =>
                    acum + total[system] * context.systems[system],
                  0
                ) * clientFactor
              )}
            </p>
          </div>
        </>
      )}
    </ResultContainer>
  );
};

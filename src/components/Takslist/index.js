import React, { useContext } from "react";
import { TaksklistContainer } from "./style";
import { tasklist } from "../../const/tasklist";
import { UserContext } from "../../context/context";

export const Tasklist = ({ activeItems, setActiveItems }) => {
  const context = useContext(UserContext);
  //   console.log(Object.keys(tasklist[context.activeMenu]));
  const activeMenu = context.activeMenu;

  function handleItem(name) {
    setActiveItems((array) => {
      return { ...array, [activeMenu] : {...array[activeMenu], 
        [name]: array[activeMenu] ? !array[activeMenu][name] : true
      }};
    });
  }

  return (
    // <ul>
    <TaksklistContainer>
      {activeMenu && context.systems[activeMenu] ? (
        <ul>
          {Object.keys(tasklist[activeMenu]).map((item) => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  name={item}
                  onChange={(event) => {
                    handleItem(event.target.name);
                  }}
                  value={true}
                  checked={activeItems[activeMenu] ? activeItems[activeMenu][item] : false}
                ></input>
                <p>{item}</p>
                <p className={false ? "disabled" : ""}>
                  {tasklist[activeMenu][item]}
                </p>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </TaksklistContainer>
  );
};

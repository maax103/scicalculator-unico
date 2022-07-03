import React, { useContext } from "react";
import { UserContext } from "../../../context/context";
import { SystemButtonContainer } from "./style";

export const SystemButton = ({name}) => {

    const context = useContext(UserContext);
    const img = require('../../../assets/visual_' + name + ".png")
    const bgColor = {
        "practice": "#6EC9F4",
        "suprema": "#368FD8",
        "sucessor": "#0E69B2",
        "controller": "#74AE74",
        "web": "#B547FF"
    }

    return(
        <SystemButtonContainer onClick={()=>{
            console.log(name);
            name == context.activeMenu ? context.setActiveMenu("") : context.setActiveMenu(name);
        }} bgColor={bgColor[name]}>
            <img src={img} alt={`${name} logo`}></img>
        </SystemButtonContainer>
    )
}
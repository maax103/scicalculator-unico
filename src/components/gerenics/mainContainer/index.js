import React from "react";
import { MainContainerContainer } from "./styled";

export const MainContainer = ({children}) => {
    return(
        <MainContainerContainer>
            {children}
        </MainContainerContainer>
    )
}
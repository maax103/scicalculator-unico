import React from "react";
import { WindowContainer } from "./style";

export const Window = ({children}) => {
    return(
        <WindowContainer>
            {children}
        </WindowContainer>
    )
}
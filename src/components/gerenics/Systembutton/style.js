import styled from "styled-components";

export const SystemButtonContainer = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.bgColor};
    border-radius: 50px;
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 1rem;
    transition: filter 0.3s;
    &:hover{
        filter:brightness(1.15);
    }
    &:active{
        filter:brightness(0.9);
    }
`
import styled from "styled-components";

export const SystemButtonContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 1rem;
    transition: filter 0.3s;
    div{
        height: 100%;
        width: 100%;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.bgColor};
    }
    .unselectedMenu{
        filter: grayscale(0.9);
    }
    .selectedMenu{
        filter: grayscale(0) brightness(1.1);
        transition: filter cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    }
`
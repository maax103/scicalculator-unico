import styled from "styled-components";

export const ResultContainer = styled.div`
  /* height: calc(600px - 2rem); */
  padding: 2rem 0 2rem 0;
  color: #3778ad;
  ul {
    margin-top: 2rem;
    margin-bottom: 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    min-height: calc(400px + 2rem);
  }
  h3 {
    font-size: 1.4rem;
    font-weight: bold;
  }
  li {
    margin-top: 0.5rem;
    p {
      font-size: 1.4rem;
      padding: 0.5rem;
      display: inline-block;
      &:last-child {
        float: right;
        font-weight: bold;
        /* background-color: #d9d9d9; */
        border-radius: 50%;
        height: 2.5rem;
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  div {
    display: flex;
    justify-content: center;
    p {
      font-size: 1.4rem;
      font-weight: bold;
      display: inline-block;
      &:last-child {
        margin-left: 2rem;
      }
    }
  }
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    h3 {
      padding-top: 2rem;
    }
  }
`;

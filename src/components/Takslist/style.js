import styled from "styled-components";

export const TaksklistContainer = styled.div`
  padding: 1rem;
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 1rem 0.5rem;

    img{
        height: 1.5rem;
        &:hover{
          transform: scale(1.1);
        }
      }
    button{
      background-color: #FFFFFF00;
      border: none;
      padding: 0.5rem;
      color: #00000099;
      font-size: 0.9rem;
    }
  } 
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  background-color: #f5f5f5;
  min-height: calc(662px - 2rem);
  border-radius: 5px;
  width: 100%;
  padding-left: 1rem;
  color: #3778ad;
  li {
    padding: 0.2rem;
  }
  label {
    transition: transform 0.08s;
    &:hover{
          transform: scale(1.03);
        }
    padding: 0.5rem;
    width: 100%;
    display: inline-block;
    input {
      margin-right: 1rem;
      display: inline-block;
    }
    p {
      display: inline-block;
      &:last-child {
        float: right;
        margin-right: 1rem;
      }
    }
  }
  .disabled {
    display: none;
  }
`;

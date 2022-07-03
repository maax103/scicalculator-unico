import styled from "styled-components";

export const TaksklistContainer = styled.div`
  padding: 1rem;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  background-color: #f5f5f5;
  min-height: calc(652px - 2rem);
  border-radius: 5px;
  width: 100%;
  padding-left: 1rem;
  color: #3778ad;
  li {
    padding: 0.2rem;
  }
  label {
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

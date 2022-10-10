import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  button {
    padding: 10px;
    width: 95%;
    max-width: 850px;
    border-radius: 5px;
    background-color: var(--secondary-blue);
    border: 2px solid var(--secondary-blue);
    font-weight: bold;
    font-size: 16px;

    :hover {
      background-color: #b7ffed;
      border: 2px solid #b7ffed;
    }
  }
`;

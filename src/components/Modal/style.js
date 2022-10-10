import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const Modal = styled.div`
  background-color: var(--primary-blue);
  width: 70%;
  max-width: 600px;
  padding: 40px;
  z-index: 10;
  border-radius: 5px;
  position: relative;
  display: block;

  h4 {
    text-align: left;
    color: var(--white);
    margin: 20px 0 10px;
  }
`;

export const CloseModal = styled.button`
  background-color: var(--red);
  position: absolute;
  top: -10px;
  right: -10px;
  width: 50px;
  height: 50px;
  font-size: 30px;
  text-align: center;
  color: var(--white);
  font-weight: bold;
  border-radius: 50%;

  :hover {
    background-color: #ff8787;
  }
`;
export const Title = styled.label`
  input {
    padding: 10px;
    border: ${({ req }) =>
      req ? "2px solid var(--red)" : "2px solid var(--secondary-blue)"};
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
  }
`;
export const Description = styled.label`
  textarea {
    width: 100%;
    border: 2px solid var(--secondary-blue);
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
  }
`;

export const Date = styled.div`
  text-align: start;

  input {
    padding: 10px;
    border: 2px solid var(--secondary-blue);
    border-radius: 5px;
    min-width: 180px;
    width: 40%;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const Save = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 10px;
    color: var(--black);
    font-weight: bold;
    font-size: 18px;
    background-color: var(--secondary-blue);
    margin-top: 50px;
    border-radius: 5px;
    width: 75%;

    :hover {
      background-color: #b7ffed;
    }
  }
`;

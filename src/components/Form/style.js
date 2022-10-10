import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid var(--white);
  border-radius: 5px;
  padding: 30px;
  width: 95%;
  max-width: 850px;
  max-height: 70vh;
  margin: 0 auto;
  overflow-y: auto;

  > h2 {
    color: var(--grey);
  }

  ::-webkit-scrollbar {
    background-color: var(--white);
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--white);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--grey);
    border-radius: 5px;
  }
`;

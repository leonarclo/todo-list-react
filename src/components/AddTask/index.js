import React from "react";
import { Container } from "./style";

function AddTask({ setIsOpenModal }) {
  return (
    <Container>
      <button onClick={() => setIsOpenModal(true)}>Adicionar Tarefa</button>
    </Container>
  );
}

export default AddTask;

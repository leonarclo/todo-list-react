import React, { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import { Container } from "./style";

function AddTask() {
  const { setIsOpenModal } = useContext(TasksContext);
  return (
    <Container>
      <button onClick={() => setIsOpenModal(true)}>Adicionar Tarefa</button>
    </Container>
  );
}

export default AddTask;

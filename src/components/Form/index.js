import React from "react";
import TaskContainer from "../TaskContainer";
import { Container } from "./style";

function Form({ taskList, checked, handleEditTask, removeTask }) {
  return (
    <Container>
      {taskList && taskList.length > 0 ? (
        taskList.map((item) => (
          <TaskContainer
            item={item}
            checked={checked}
            handleEditTask={handleEditTask}
            removeTask={removeTask}
          />
        ))
      ) : (
        <h2>Não há tarefas...</h2>
      )}
    </Container>
  );
}

export default Form;

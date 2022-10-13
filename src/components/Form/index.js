import React, { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import TaskContainer from "../TaskContainer";
import { Container } from "./style";

function Form({ checked, handleEditTask, removeTask }) {
  const { taskList } = useContext(TasksContext);

  return (
    <Container>
      {taskList && taskList.length > 0 ? (
        taskList.map((item) => (
          <TaskContainer
            key={item.id}
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

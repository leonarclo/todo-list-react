import React from "react";
import {
  Container,
  Task,
  Calendar,
  ActionIcons,
  EditIcon,
  DeleteIcon,
  Checkbox,
} from "./style";

function TaskContainer({ item, checked, handleEditTask, removeTask }) {
  return (
    <Container key={item.id} check={item.completed}>
      <Task check={item.completed}>
        <span>Criado em: {item.inclusionDate}</span>
        <Checkbox check={item.completed}>
          <label>
            <input type="checkbox" onChange={() => checked(item.id)} />
            <div>
              <h3>{item.title}</h3>
              <h4>{item.description}</h4>
            </div>
          </label>
        </Checkbox>
        {item.conclusionDate !== undefined ? (
          item.completed ? (
            <p>Concluído</p>
          ) : (
            <div>
              <Calendar />
              <p>{item.conclusionDate}</p>
            </div>
          )
        ) : null}
      </Task>
      <ActionIcons>
        <EditIcon
          onClick={() => handleEditTask(item.id)}
          check={item.completed}
        />
        <DeleteIcon onClick={() => removeTask(item.id)} />
      </ActionIcons>
    </Container>
  );
}

export default TaskContainer;

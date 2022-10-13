import { createContext, useState } from "react";

export const TasksContext = createContext();

function TasksContextProvider({ children }) {
  const [titleTask, setTitleTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [dateTask, setDateTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editingTask, setEditingTask] = useState(false);
  const [editID, setEditID] = useState(null);

  return (
    <TasksContext.Provider
      value={{
        titleTask,
        setTitleTask,
        descriptionTask,
        setDescriptionTask,
        dateTask,
        setDateTask,
        taskList,
        setTaskList,
        isOpenModal,
        setIsOpenModal,
        editingTask,
        setEditingTask,
        editID,
        setEditID,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;

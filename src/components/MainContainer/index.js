import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import Form from "../Form";
import AddTask from "../AddTask";
import TaskModal from "../Modal";
import { Container } from "./style";

function MainContainer() {
  const [titleTask, setTitleTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [dateTask, setDateTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editingTask, setEditingTask] = useState(false);
  const [editID, setEditID] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!titleTask) {
      alert("A tarefa precisa ter um título.");
      setTaskList([...taskList]);
    } else if (editingTask && titleTask) {
      setTaskList(
        taskList.map((item) => {
          if (item.id === editID) {
            return {
              ...item,
              title: titleTask,
              description: descriptionTask,
              conclusionDate: dateTask,
            };
          }
          return item;
        })
      );
      setTitleTask("");
      setDescriptionTask("");
      setDateTask("");
      setEditID(null);
      setEditingTask(false);
      setIsOpenModal(false);
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        title: titleTask,
        description: descriptionTask,
        inclusionDate: dateNow(Date.now()),
        conclusionDate: formatDate(dateTask),
        completed: false,
      };
      setTaskList([...taskList, newTask]);
      setTitleTask("");
      setDescriptionTask("");
      setDateTask("");
      setIsOpenModal(false);
    }
  }

  function formatDate(date) {
    if (date) return format(parseISO(date), "dd/MM/yyyy");
  }

  function dateNow(date) {
    return format(new Date(date), "dd/MM/yyyy");
  }

  function checked(id) {
    const updateTaskList = [...taskList].map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTaskList(updateTaskList);
  }

  function removeTask(id) {
    const updateTaskList = [...taskList].filter((item) => {
      return item.id !== id;
    });
    setTaskList(updateTaskList);
  }

  function handleEditTask(id) {
    const findTask = [...taskList].find((item) => item.id === id);
    setEditingTask(true);
    setIsOpenModal(true);
    setEditID(id);
    setTitleTask(findTask.title);
    setDescriptionTask(findTask.description);
    setDateTask(findTask.conclusionDate);
  }

  return (
    <>
      {" "}
      <Container>
        <h1>Lista de tarefas - MindTech</h1>
        <AddTask setIsOpenModal={setIsOpenModal} />
        <Form
          taskList={taskList}
          checked={checked}
          handleEditTask={handleEditTask}
          removeTask={removeTask}
        />
        {isOpenModal && (
          <TaskModal
            isOpenModal={isOpenModal}
            titleTask={titleTask}
            setTitleTask={setTitleTask}
            setIsOpenModal={setIsOpenModal}
            handleSubmit={handleSubmit}
            descriptionTask={descriptionTask}
            setDescriptionTask={setDescriptionTask}
            dateTask={dateTask}
            setDateTask={setDateTask}
          />
        )}
      </Container>
    </>
  );
}

export default MainContainer;

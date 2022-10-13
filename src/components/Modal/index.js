import { useRef, useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import {
  Container,
  Modal,
  CloseModal,
  Title,
  Description,
  Date,
  Save,
} from "./style";

function TaskModal({ handleSubmit }) {
  const {
    setIsOpenModal,
    titleTask,
    setTitleTask,
    descriptionTask,
    setDescriptionTask,
    dateTask,
    setDateTask,
  } = useContext(TasksContext);

  const bgModal = useRef(null);

  function handleOutsideClick(event) {
    if (bgModal.current === event.target) setIsOpenModal(false);
  }
  return (
    <Container onMouseDown={handleOutsideClick} ref={bgModal}>
      <Modal>
        <CloseModal onClick={() => setIsOpenModal(false)}>x</CloseModal>
        <Title>
          <h4>* Título</h4>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa..."
            required
            autoFocus
            maxLength={100}
            value={titleTask}
            onChange={(event) => setTitleTask(event.target.value)}
          />
        </Title>
        <Description>
          <h4>Descrição</h4>
          <textarea
            placeholder="Descreva sua tarefa..."
            maxLength={300}
            value={descriptionTask}
            onChange={(event) => setDescriptionTask(event.target.value)}
          />
        </Description>
        <Date>
          <h4>Data de conclusão</h4>
          <input
            type="date"
            value={dateTask}
            onChange={(event) => setDateTask(event.target.value)}
          />
        </Date>
        <Save onClick={handleSubmit}>
          <button>Salvar</button>
        </Save>
      </Modal>
    </Container>
  );
}

export default TaskModal;

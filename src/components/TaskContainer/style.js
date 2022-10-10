import styled, { css } from "styled-components";
import { FaEdit, FaTrashAlt, FaCalendarCheck } from "react-icons/fa";

export const Container = styled.div`
  margin-top: 20px;
  color: var(--white);
  width: 100%;
  font-size: 18px;
  text-align: left;
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => (props.check ? "#494949" : "transparent")};
`;

export const Task = styled.div`
  font-size: 18px;
  text-align: left;
  padding: 20px;
  width: 80%;
  word-wrap: break-word;

  > div {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    gap: 10px;
  }

  span {
    font-size: 12px;
    display: block;
    margin: 5px 0px 5px 0px;
    font-weight: bold;
    color: var(--grey);
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Checkbox = styled.div`
  label {
    display: flex;
    align-items: center;

    input {
      margin-right: 15px;
    }
  }

  h3 {
    color: ${(props) =>
      props.checked ? "var(--grey)" : "var(--secondary-blue)"};
    text-transform: uppercase;
    text-decoration-line: ${(props) => (props.check ? "line-through" : "")};
  }

  h4 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;
    color: ${(props) => (props.check ? "var(--grey)" : "var(--white)")};
    text-decoration-line: ${(props) => (props.check ? "line-through" : "")};
  }
`;

const iconsCss = css`
  width: 32px;
  height: 32px;
  color: var(--grey);

  :hover {
    cursor: pointer;
    color: var(--white);
  }
`;

export const EditIcon = styled(FaEdit)`
  ${iconsCss}
  display: ${(props) => (props.check ? "none" : "block")};
`;
export const DeleteIcon = styled(FaTrashAlt)`
  ${iconsCss}
`;

export const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

export const Calendar = styled(FaCalendarCheck)`
  color: white;
  margin-left: 25px;
`;

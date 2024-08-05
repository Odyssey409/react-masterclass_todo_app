import React from "react";
import { IToDo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //인자로 받아온 toDo의 아이디와 클릭된 투두 목록의 아이디와 일치하는 인데스를 찾는 역할
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      // name은 어떤 버튼을 눌렀는지에서 받아오는 currentTarget: { name }으로 설정해야 어떤 카테고리로 변경할 것인지 분별가능
      return oldToDos;
    });
  };
  return (
    <li>
      <span> {text} </span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;

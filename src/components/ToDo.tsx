import React from "react";
import { Categories, CustomCategoryState, IToDo, toDoState } from "./atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as Styles from "./styles";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const customCategories = useRecoilValue(CustomCategoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //인자로 받아온 toDo의 아이디와 클릭된 투두 목록의 아이디와 일치하는 인데스를 찾는 역할
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      // name은 어떤 버튼을 눌렀는지에서 받아오는 currentTarget: { name }으로 설정해야 어떤 카테고리로 변경할 것인지 분별가능
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onDelete = () => {
    setToDos((oldToDos) => oldToDos.filter((toDo) => toDo.id !== id));
  };
  return (
    <Styles.ToDoContainer>
      <Styles.ToDoDeleteBtn onClick={onDelete}>❌</Styles.ToDoDeleteBtn>
      <Styles.ToDoText> ✔ {text} </Styles.ToDoText>
      {category !== Categories.DOING && (
        <Styles.ToDoCategoryBtn name={Categories.DOING} onClick={onClick}>
          Doing
        </Styles.ToDoCategoryBtn>
      )}
      {category !== Categories.TO_DO && (
        <Styles.ToDoCategoryBtn name={Categories.TO_DO} onClick={onClick}>
          To Do
        </Styles.ToDoCategoryBtn>
      )}
      {category !== Categories.DONE && (
        <Styles.ToDoCategoryBtn name={Categories.DONE} onClick={onClick}>
          Done
        </Styles.ToDoCategoryBtn>
      )}
      {customCategories.map(
        (customCategory) =>
          category !== customCategory && (
            <Styles.ToDoCategoryBtn
              key={customCategory}
              name={customCategory}
              onClick={onClick}
            >
              {customCategory}
            </Styles.ToDoCategoryBtn>
          )
      )}
    </Styles.ToDoContainer>
  );
}

export default ToDo;

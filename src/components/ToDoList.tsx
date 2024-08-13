import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import {
  Categories,
  categoryState,
  CustomCategoryState,
  toDoSelector,
  toDoState,
} from "./atoms";
import ToDo from "./ToDo";
import React, { useEffect } from "react";
import CreateCustomCategory from "./CreateCustomCategory";
import * as Styles from "./styles";
import CustomCategoryList from "./CustomCategoryList";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [toDosState, setToDosState] = useRecoilState(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);
  const customCategories = useRecoilValue(CustomCategoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  useEffect(() => {
    const savedToDos = localStorage.getItem("toDos");
    if (savedToDos) {
      try {
        const parsedToDos = JSON.parse(savedToDos);
        setToDosState(parsedToDos);
      } catch (error) {
        console.error(error);
      }
    }
  }, [setToDosState]);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDosState));
  }, [toDosState]);

  return (
    <Styles.Container>
      <Styles.ToDoTitle>TODO LIST</Styles.ToDoTitle>
      <Styles.CategoryContainer>
        <CreateCustomCategory />
        <Styles.CategorySelect value={category} onInput={onInput}>
          <Styles.CategorySelectOption value={Categories.TO_DO}>
            To Do
          </Styles.CategorySelectOption>
          <Styles.CategorySelectOption value={Categories.DOING}>
            Doing
          </Styles.CategorySelectOption>
          <Styles.CategorySelectOption value={Categories.DONE}>
            Done
          </Styles.CategorySelectOption>
          {customCategories.map((customCategory, index) => (
            <Styles.CategorySelectOption key={index} value={customCategory}>
              {customCategory}
            </Styles.CategorySelectOption>
          ))}
        </Styles.CategorySelect>
      </Styles.CategoryContainer>
      <CustomCategoryList />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Styles.Container>
  );
}

export default ToDoList;

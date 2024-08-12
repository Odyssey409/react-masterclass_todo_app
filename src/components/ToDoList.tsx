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
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        {customCategories.map((customCategory, index) => (
          <option key={index} value={customCategory}>
            {customCategory}
          </option>
        ))}
      </select>
      <CreateCustomCategory />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;

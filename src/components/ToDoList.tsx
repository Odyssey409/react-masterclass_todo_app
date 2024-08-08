import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import {
  Categories,
  categoryState,
  CustomCategoryState,
  toDoSelector,
} from "./atoms";
import ToDo from "./ToDo";
import React from "react";
import CreateCustomCategory from "./CreateCustomCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const customCategories = useRecoilValue(CustomCategoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

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

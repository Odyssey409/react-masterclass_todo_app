import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

const savedCustomCategories = localStorage.getItem("customCategories");
const initialCustomCategories = savedCustomCategories
  ? JSON.parse(savedCustomCategories)
  : [];

export const CustomCategoryState = atom<string[]>({
  key: "CustomCategory",
  default: initialCustomCategories,
});

const savedToDos = localStorage.getItem("toDos");
const initialSavedToDos = savedToDos ? JSON.parse(savedToDos) : [];

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: initialSavedToDos,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

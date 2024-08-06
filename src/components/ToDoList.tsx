import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector } from "./atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
          // 이 방식은 위와 같은 내용으로 작동함 ...은 안에 요쇼를 벗기는 역할을 하기 때문
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
          // 이 방식은 위와 같은 내용으로 작동함 ...은 안에 요쇼를 벗기는 역할을 하기 때문
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
          // 이 방식은 위와 같은 내용으로 작동함 ...은 안에 요쇼를 벗기는 역할을 하기 때문
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;

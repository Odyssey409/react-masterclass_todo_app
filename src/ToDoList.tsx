import { useForm } from "react-hook-form";

interface IForm {
  toDo?: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const hadleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", ""); // 제출하면 입력칸 비워주는 코드
  };
  return (
    <div>
      <form onSubmit={handleSubmit(hadleValid)}>
        <input
          {...register("toDo", { required: "Please Write a To Do" })}
          placeholder="Write a to do"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

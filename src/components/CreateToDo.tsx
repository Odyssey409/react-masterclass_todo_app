import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";
import * as Styles from "./styles";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: category },
      ...oldToDos,
    ]);
    setValue("toDo", ""); // 제출하면 입력칸 비워주는 코드
  };

  return (
    <Styles.TodoInputContainer onSubmit={handleSubmit(handleValid)}>
      <Styles.TodoInput
        {...register("toDo", { required: "Please Write a To Do" })}
        placeholder="Write a to do"
      ></Styles.TodoInput>
      <Styles.TodoInputBtn>Add</Styles.TodoInputBtn>
    </Styles.TodoInputContainer>
  );
}

export default CreateToDo;

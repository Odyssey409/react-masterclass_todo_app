import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");

//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           placeholder="Write a to do"
//         ></input>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

interface IForm {
  toDo?: string;
  name: string;
  email: string;
  passwords: string;
  passwordCheck: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.passwords !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "Passwords are incorrect" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offLine." });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("toDo")} placeholder="Write a to do"></input>
        <input
          {...register("name", {
            required: "name is requried",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nicos allowed" : true,
            },
          })}
          placeholder="Write your name"
        ></input>
        <span style={{ color: "red" }}>{errors?.name?.message as string}</span>
        <input
          {...register("email", {
            required: "email is requried",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
            minLength: 10,
          })}
          placeholder="Write your email"
        ></input>
        <span style={{ color: "red" }}>{errors?.email?.message as string}</span>
        <input
          {...register("passwords", {
            required: true,
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Write your password"
        ></input>
        <span style={{ color: "red" }}>
          {errors?.passwords?.message as string}
        </span>

        <input
          {...register("passwordCheck", {
            required: true,
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Write your passwordCheck"
        ></input>
        <span style={{ color: "red" }}>
          {errors?.passwordCheck?.message as string}
        </span>
        <button>Add</button>
        <span style={{ color: "red" }}>
          {errors?.extraError?.message as string}
        </span>
      </form>
    </div>
  );
}

export default ToDoList;

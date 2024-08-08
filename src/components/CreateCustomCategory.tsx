import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { CustomCategoryState } from "./atoms";

interface IForm {
  customCategory: string;
}

function CreateCustomCategory() {
  const [customCategories, setCustomCategories] =
    useRecoilState(CustomCategoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onInputCustomCategory = ({ customCategory }: IForm) => {
    const updatedCategories = [...customCategories, customCategory];
    setCustomCategories(updatedCategories);
    localStorage.setItem("customCategories", JSON.stringify(updatedCategories));
    setValue("customCategory", ""); // 제출하면 입력칸 비워주는 코드
  };
  const onRemoveCategory = (category: string) => {
    const updatedCategories = customCategories.filter(
      (cat) => cat !== category
    );
    setCustomCategories(updatedCategories);
    localStorage.setItem("customCategories", JSON.stringify(updatedCategories));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onInputCustomCategory)}>
        <input
          {...register("customCategory")}
          placeholder="or make your own category"
        ></input>
        <button>Add Category</button>
      </form>
      <ul>
        <h3>Custom Categories</h3>
        {customCategories.map((category) => (
          <li key={category}>
            {category}{" "}
            <button onClick={() => onRemoveCategory(category)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreateCustomCategory;

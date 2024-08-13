import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { CustomCategoryState } from "./atoms";
import * as Styles from "./styles";

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

  return (
    <div>
      <form onSubmit={handleSubmit(onInputCustomCategory)}>
        <Styles.CustomCategoryInput
          {...register("customCategory")}
          placeholder="Make your own category"
        ></Styles.CustomCategoryInput>
        <Styles.CustomCategoryInputBtn>
          Add Category
        </Styles.CustomCategoryInputBtn>
      </form>
    </div>
  );
}

export default CreateCustomCategory;

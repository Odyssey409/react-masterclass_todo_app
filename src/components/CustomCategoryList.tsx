import { useRecoilState } from "recoil";
import { CustomCategoryState } from "./atoms";
import * as Styles from "./styles";

function CustomCategoryList() {
  const [customCategories, setCustomCategories] =
    useRecoilState(CustomCategoryState);

  const onRemoveCategory = (category: string) => {
    const updatedCategories = customCategories.filter(
      (cat) => cat !== category
    );
    setCustomCategories(updatedCategories);
    localStorage.setItem("customCategories", JSON.stringify(updatedCategories));
  };

  return (
    <Styles.CustomCategoryListContainer>
      <Styles.CustomCategoryListTitle>
        📃Custom Categories
      </Styles.CustomCategoryListTitle>
      {customCategories.map((category) => (
        <Styles.CustomCategoryList key={category}>
          <Styles.CustomCategoryDeleteBtn
            onClick={() => onRemoveCategory(category)}
          >
            ❌
          </Styles.CustomCategoryDeleteBtn>
          {category}
        </Styles.CustomCategoryList>
      ))}
    </Styles.CustomCategoryListContainer>
  );
}

export default CustomCategoryList;

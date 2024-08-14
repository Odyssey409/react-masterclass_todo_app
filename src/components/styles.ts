import styled from "@emotion/styled";

export const MasterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 100vh;
  min-width: 1400px;
  background-color: rgb(238, 238, 238);
`;

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap");
  font-family: "New Amsterdam", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 1400px;
  height: 100vh;
  background-color: rgb(238, 238, 238);
`;

export const ToDoTitle = styled.h1`
  font-size: 50px;
  margin-top: 100px;
  font-weight: 700;
  font-style: normal;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-top: 50px;
`;

export const CustomCategoryInput = styled.input`
  width: 700px;
  height: 50px;
  padding-left: 30px;
  font-size: 20px;
  border: 1px solid rgb(0, 173, 181);
  border-radius: 15px;
  font-weight: 700;
  font-style: normal;
`;

export const CustomCategoryInputBtn = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap");
  height: 35px;
  font-size: 15px;
  width: 120px;
  background-color: rgba(0, 173, 181, 1);
  color: rgb(238, 238, 238);
  border: 1px solid rgb(0, 173, 181);
  border-radius: 10px;
  margin-left: 10px;
  font-weight: 700;
  font-style: normal;
`;

export const CategorySelect = styled.select`
  width: 230px;
  height: 50px;
  background-color: rgba(0, 173, 181, 1);
  color: rgb(238, 238, 238);
  border: 1px solid rgb(0, 173, 181);
  border-radius: 15px;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  padding: 10px;
`;

export const CategorySelectOption = styled.option`
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  border-radius: 15px;
`;

export const TodoInputContainer = styled.form`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 50px;
`;

export const TodoInput = styled.input`
  width: 700px;
  height: 50px;
  padding-left: 30px;
  font-size: 20px;
  border: 1px solid rgb(0, 173, 181);
  border-radius: 15px;
  font-weight: 700;
  font-style: normal;
`;
export const TodoInputBtn = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap");
  height: 35px;
  width: 120px;
  font-size: 15px;
  background-color: rgba(0, 173, 181, 1);
  color: rgb(238, 238, 238);
  border: 1px solid rgb(0, 173, 181);
  border-radius: 10px;
  margin-left: 10px;
  font-weight: 700;
  font-style: normal;
`;

export const ToDoContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-top: 50px;
  border-bottom: 1px solid rgb(57, 62, 70);
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ToDoText = styled.span`
  font-size: 25px;
  font-weight: 700;
  font-style: normal;
  width: 80%;
`;

export const ToDoCategoryBtn = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap");
  height: 35px;
  width: 80px;
  font-size: 15px;
  background-color: rgba(57, 62, 70, 0.5);
  color: white;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 20px;
  margin-left: 5px;
  font-weight: 700;
  font-style: normal;
`;

export const ToDoDeleteBtn = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap");
  height: 35px;
  width: 40px;
  font-size: 15px;
  background-color: rgb(34, 40, 49);
  color: white;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 20px;
  margin-right: 15px;
  font-weight: 700;
  font-style: normal;
`;

export const CustomCategoryListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin-top: 10px;
  padding-left: 5px;
`;

export const CustomCategoryList = styled.li`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  color: rgb(0, 173, 181);
`;

export const CustomCategoryDeleteBtn = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap");
  height: 25px;
  width: 30px;
  font-size: 10px;
  background-color: rgb(57, 62, 70);
  color: white;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
  margin-right: 15px;
  font-weight: 700;
  font-style: normal;
`;

export const CustomCategoryListTitle = styled.h2`
  font-size: 30px;

  font-weight: 700;
  font-style: normal;
`;

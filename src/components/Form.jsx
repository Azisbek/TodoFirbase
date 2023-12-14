import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <FormStyle>
      <div>
        <input type="text" />
        {/* <input type="date" />
        <button>ADD</button> */}
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  && div {
    background-color: #00eeff;
    display: flex;
    justify-content: center;
    padding: 30px;
    border-radius: 10px;
    gap: 10px;
  }
  && input {
    padding: 8px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
  }

  && button {
    padding: 8px 10px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 800;
    color: white;
    background-color: orange;
  }
`;

export default Form;

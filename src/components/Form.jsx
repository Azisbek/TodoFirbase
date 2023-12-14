import React, { useRef } from "react";
import styled from "styled-components";

const Form = ({ addNewItem }) => {
  const titleRef = useRef();
  const dateRef = useRef();

  const submitChangeHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random,
      title: titleRef.current.value,
      date: dateRef.current.value,
    };
    addNewItem(data);
  };

  return (
    <FormStyle onSubmit={submitChangeHandler}>
      <div>
        <input ref={titleRef} type="text" />
        <input ref={dateRef} type="date" />
        <button>ADD</button>
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

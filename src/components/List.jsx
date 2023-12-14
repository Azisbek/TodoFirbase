import React from "react";
import styled from "styled-components";

const List = () => {
  return (
    <DivStyle>
        <ul>
            <li>
                <label>name</label>
                <label>date</label>
            </li>
        </ul>
    </DivStyle>
  )
}

const DivStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    border-radius: 10px;

  && ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    
  }
  && li {
    background-color: #00eeff;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    display: flex;
    justify-content: space-around;
    }

`

export default List;

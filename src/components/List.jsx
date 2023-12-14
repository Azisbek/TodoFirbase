import React from "react";
import styled from "styled-components";
import Item from "./Item";

const List = ({data}) => {
  return (
    <DivStyle>
        <ul>
            {data.map((data) => (
                <Item key={data.id} data={data}/>
            ))}
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
    

`

export default List;

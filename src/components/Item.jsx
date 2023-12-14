import React from 'react'
import styled from 'styled-components'


const Item = ({data}) => {
  return (
    <LiStyle>
        <label>{data.title}</label>
        <label>{data.date}</label>
    </LiStyle>
  )
}

const LiStyle = styled.li`
    background-color: #00eeff;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    display: flex;
    justify-content: space-around;
    
`

export default Item
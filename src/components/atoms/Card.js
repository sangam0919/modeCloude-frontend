import React from 'react'
import styled from 'styled-components'
const CardWrap = styled.div`
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    margin: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Card = ({ children }) => {
    return (
        <CardWrap>{children}</CardWrap>
    )
}

export default Card
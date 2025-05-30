import React from 'react'
import styled from 'styled-components'
const CardWrap = styled.div`
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({height}) => height || ''};

`
const Card = ({ children, height }) => {
    return (
        <CardWrap height={height}>{children}</CardWrap>
    )
}

export default Card
import React from 'react'
import styled from 'styled-components'
const Profilesetupwrap = styled.div`
    border-radius: 0 15px 15px 0;
    padding: 30px;
    background-color: white;
    flex: 1;
    box-sizing: border-box;
    display: flex;
`

const Profilesetup = ({children, classname}) => {
  return (
    <Profilesetupwrap className={classname}>{children}</Profilesetupwrap>
  )
}

export default Profilesetup
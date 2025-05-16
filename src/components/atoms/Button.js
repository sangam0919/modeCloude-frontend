import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button `
  padding:  15px 40px;
  background: linear-gradient(135deg, #b881c2, #a06fb1);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(184, 129, 194, 0.3);

  &.disabled {
        opacity :0;
        transform : translateY(-150px)
      }

  &:hover {
    background: linear-gradient(135deg, #a06fb1, #8e5ba0);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(184, 129, 194, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(184, 129, 194, 0.3);
  }
` ;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button

import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ weight }) => weight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  background: ${({ background }) => background || 'linear-gradient(135deg, #b881c2, #a06fb1)'};
  border: ${({ border }) => border || '1px solid #ccc'};
  border-radius: ${({ radius }) => radius || '15px'};
  padding: 10px 16px;
  transition: 0.2s;

  &:hover {
    background: #f9f5fc;
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

const Button = ({ children, color, weight, margin, background, border, radius , onClick}) => {
  return (
    <Btn
      color={color}
      weight={weight}
      margin={margin}
      background={background}
      border={border}
      radius={radius}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
};

export default Button;
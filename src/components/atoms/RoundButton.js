import React from 'react';
import styled, { css } from 'styled-components';

const base = css`
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
`;

const StyledGradient = styled.button`
  ${base};
  color: #fff;
  border: none;
  background: linear-gradient(135deg, #b881c2 0%, #a06fb1 100%);
  box-shadow: 0 4px 10px rgba(184, 129, 194, 0.3);

  &:hover {
    background: linear-gradient(135deg, #a06fb1 0%, #8e5ba0 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(184, 129, 194, 0.4);
  }
`;

const StyledOutline = styled.button`
  ${base};
  background: #fff;
  color: #666;
  border: 1px solid #ddd;

  &:hover {
    background: #f9f9f9;
    border-color: #b881c2;
    color: #b881c2;
  }
`;

export const GradientBtn = ({ children, ...rest }) => (
  <StyledGradient {...rest}>{children}</StyledGradient>
);

export const OutlineBtn = ({ children, ...rest }) => (
  <StyledOutline {...rest}>{children}</StyledOutline>
);

export default GradientBtn;         

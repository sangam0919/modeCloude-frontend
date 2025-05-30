import React from 'react';
import styled from 'styled-components';

const RadioGroupWrap = styled.div`
  display: flex;
  gap: 20px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.95rem;
    color: #555;
  }

  input[type='radio'] {
    accent-color: #b881c2;
  }
`;

const Radio = ({ name, options = [], defaultValue, onChange }) => {
  return (
    <RadioGroupWrap>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            defaultChecked={option === defaultValue}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </RadioGroupWrap>
  );
};

export default Radio;
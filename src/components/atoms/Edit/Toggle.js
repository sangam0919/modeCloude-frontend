import React from 'react';
import styled from 'styled-components';

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background-color: #ccc;
    border-radius: 24px;
    transition: 0.3s;
  }

  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #b881c2;
  }

  input:checked + span:before {
    transform: translateX(18px);
  }
`;

const Toggle = ({ defaultChecked = false, onChange }) => {
  return (
    <ToggleSwitch>
      <input type="checkbox" defaultChecked={defaultChecked} onChange={onChange} />
      <span></span>
    </ToggleSwitch>
  );
};

export default Toggle;
import React from 'react'
import styled from 'styled-components'
import Text from '../../atoms/Text'

const ListtapWarp = styled.div`
  display: flex;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  height: 35px;

  .diary-content {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .diary-content.selected {
    background: #b881c2;
    color: white;
  }
`;


const Listtap = ({ onClick, selectTab }) => {
  return (
    <ListtapWarp>
      <div
        className={`diary-content my-diary ${selectTab === 'mydiary' ? 'selected' : ''}`}
        onClick={() => onClick('mydiary')}
      >
        <Text>📝</Text>
      </div>
      <div
        className={`diary-content public-diary ${selectTab === 'publicdiary' ? 'selected' : ''}`}
        onClick={() => onClick('publicdiary')}
      >
        <Text>👥</Text>
      </div>
    </ListtapWarp>
  );
};

export default Listtap
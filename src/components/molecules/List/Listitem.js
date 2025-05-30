import React from 'react';
import styled from 'styled-components';
import Card from '../../atoms/Card';
import Text from '../../atoms/Text';
import Icon from '../../atoms/List/Icon';
import Emotion, { getEmotionLabel } from '../../atoms/Emotion';

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  .diary-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .diary-right {
    display: flex;
    gap: 5px;
    align-items: center;
    
  }
  .diary-left {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
const EmotionsWrap = styled.div`
  display: flex; 
  align-items: center;
  gap: 10px;
  text-align: center;
  
  .emotions{
  }
`

const ListItem = ({ title, description, date, type, author, emotion }) => {
  return (
    <Card>
      <ItemWrap>
        <TopRow>
          <div className='diary-left'>
            <Text size="1.1rem" weight="bold" color="#333">{title}</Text>
            <Text size="0.8rem">{author}</Text>
          </div>
          <div className='diary-right'>
            <Icon type={type} />
            <Text size="0.85rem" color="#999">{date}</Text>
          </div>
        </TopRow>
        <div className='diary-bottom'>
          <Text size="0.95rem" color="#666" display={"block"} width={"1000px"}>{description}</Text>
          <EmotionsWrap >
            <div className='emotions'>
              <Emotion type={emotion} />
              <Text size="0.75rem" color="#999">{getEmotionLabel(emotion)}</Text>
            </div>
            <div className='emotions'>
              <Emotion type={emotion} />
              <Text size="0.75rem" color="#999">{getEmotionLabel(emotion)}</Text>
            </div>
          </EmotionsWrap>
        </div>
      </ItemWrap>
    </Card>
  );
};

export default ListItem;
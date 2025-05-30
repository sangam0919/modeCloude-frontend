import styled from 'styled-components';
import EmotionIcon from '../../atoms/EmotionIcon';
import LabelText from '../../atoms/LabelText';

const Widget = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  background: #f8fbff;
  max-width: 280px;
  margin: 0;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 10px 0;
`;




const EmotionAiIcon = styled.div`
  width: 100px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  border-radius: 50%;
  margin: 0px auto 15px;
`;



const EmotionAi = ({  aiEmotion }) => {
  // const [showOptions, setShowOptions] = useState(false);
  return (
    <Widget>
      <Title>감정 분석</Title>
      <Description>AI가 분석한 감정은:</Description>
      {aiEmotion && (
      <EmotionAiIcon>
        <EmotionIcon emoji={aiEmotion.emoji} mood={aiEmotion.mood} diameter={80} fontSize={36} />
        <LabelText style={{ marginTop: '10px' }}>{aiEmotion.name}</LabelText>
      </EmotionAiIcon>
      )}
    </Widget>
  );
};

export default EmotionAi;

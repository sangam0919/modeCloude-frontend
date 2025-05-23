import styled from 'styled-components';
import { GradientBtn, OutlineBtn } from '../../atoms/RoundButton';


const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export default function EmotionActions({ onWrite, onRecord }) {

  // const navigate = useNavigate();

  // const handleWriteClick = () => {
  //   onWrite(); 
  //   navigate('/write', {
  //     state: {
  //       mood: 'happy',
  //       emoji: '😊',
  //       label: '행복',
  //     },
  //   });
  // };


  return (
    <Row>
      <GradientBtn onClick={onWrite}>일기 작성하기</GradientBtn>
      <OutlineBtn onClick={onRecord}>감정만 기록하기</OutlineBtn>
    </Row>
  );
}
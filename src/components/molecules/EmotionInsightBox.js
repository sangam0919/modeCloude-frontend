import styled from 'styled-components';

const Box = styled.div`
  background: #fefefe;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  text-align: center;
  font-size: 0.9rem;

  .highlight {
    font-weight: bold;
    color: #ffb700;
  }
`;

const EmotionInsightBox = () => (
  <Box>
    💡 이번 주 가장 많이 느낀 감정은 <span className="highlight">행복 😊</span>이에요!
  </Box>
);

export default EmotionInsightBox;

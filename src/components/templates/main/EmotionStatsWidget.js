import styled from 'styled-components';
import DonutChart from '../../molecules/main/DonutChart';
import EmotionStatItem from '../../molecules/main/EmotionStatItem';
import EmotionInsightBox from '../../molecules/main/EmotionInsightBox';
import { Link } from 'react-router-dom';

const Widget = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: center;
  margin-bottom: 20px;
`;

const ChartRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmotionStatsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 15px;
  flex: 1;
`;

const LinkTO = styled.div`
        display: block;
        text-align: center;
        margin-top: 20px;
        color: #b881c2;
        font-size: 0.9rem;
        cursor: pointer;
        text-decoration: none;
`;

const EmotionStatsWidget = () => (
  <Widget>
    <Title>감정 리포트 요약</Title>
    <Subtitle>최근 7일간의 감정 흐름을 한눈에 보기</Subtitle>

    <ChartRow>
      <DonutChart />
      <EmotionStatsList>
        <EmotionStatItem label="행복" count="3회" color="#FFEAA7" />
        <EmotionStatItem label="불안" count="2회" color="#C7CEEA" />
        <EmotionStatItem label="신남" count="1회" color="#FFD8BE" />
        <EmotionStatItem label="슬픔" count="1회" color="#A3D8F4" />
      </EmotionStatsList>
    </ChartRow>

    <EmotionInsightBox />
    <LinkTO>
    <Link to='#'>자세한 통계 보기</Link>
    </LinkTO>
  </Widget>
);

export default EmotionStatsWidget;

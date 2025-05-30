import styled from 'styled-components';
import DonutChart from '../../molecules/main/DonutChart';
import EmotionStatItem from '../../molecules/main/EmotionStatItem';
import EmotionInsightBox from '../../molecules/main/EmotionInsightBox';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

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

const LinkTO = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #b881c2;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
`;

const StyledLink = styled.a`
    display: block;
    text-align: center;
    margin-top: 20px;
    color: #b881c2;
    font-size: 0.9rem;
    cursor: pointer;
    text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


const EmotionStatsWidget = () => {
  const myDiaries = useSelector((state) => state.diary.myDiaries);

  const emotionStats = useMemo(() => {
    const stats = {};

    myDiaries.forEach((diary) => {
      const emotion = diary?.emotion;
      if (!emotion?.id) return;

      const key = emotion.id;

      if (!stats[key]) {
        stats[key] = {
          count: 1,
          label: emotion.name,
          emoji: emotion.emoji,
          color: emotion.color,
        };
      } else {
        stats[key].count++;
      }
    });
    

    return stats;
  }, [myDiaries]);

  const mostFrequentEmotion = useMemo(() => {
    const stats = Object.entries(emotionStats);
    if (stats.length === 0) return null;
  
    return stats.reduce((max, [id, stat]) => {
      return stat.count > max.count ? { ...stat, id } : max;
    }, { count: 0 });
  }, [emotionStats]);

  const maxCount = Math.max(...Object.values(emotionStats).map((e) => e.count));

  return (
    <Widget>
      <Title>감정 리포트 요약</Title>
      <Subtitle>최근 7일간의 감정 흐름을 한눈에 보기</Subtitle>

      <ChartRow>
        <DonutChart
          data={Object.entries(emotionStats).map(([id, stat]) => ({
            name: stat.label,
            value: stat.count,
            color: stat.color,
          }))}
        />
        <EmotionStatsList>
          {Object.entries(emotionStats).map(([id, stat]) => (
            <EmotionStatItem
              key={id}
              label={`${stat.label} ${stat.emoji}`}
              count={`${stat.count}회`}
              color={stat.color}
              isMostFrequent={stat.count === maxCount}
            />
          ))}
        </EmotionStatsList>
      </ChartRow>

      <EmotionInsightBox emotion={mostFrequentEmotion} />
      <LinkTO to={'/statistics'}>
        <StyledLink>자세한 통계 보기</StyledLink>
      </LinkTO>
    </Widget>
  );
};

export default EmotionStatsWidget;

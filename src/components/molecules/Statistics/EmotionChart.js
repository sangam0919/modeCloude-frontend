import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell } from 'recharts';
// import { myDiaryData } from '../../../data/Dummydiarydata'; // 직접 로드 제거
import Emotion, { getEmotionLabel, getEmotionColor } from '../../atoms/Emotion'; // 경로 확인
import Card from '../../atoms/Card'; // 경로 확인
import Text from '../../atoms/Text'; // 경로 확인

const StatsCardContainer = styled.div`
    min-height: 300px;
    min-width: 300px;
    width: 600px;
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    box-sizing: border-box;
  .stats-head-text{
    height: 100%;
  }
  .stats-body-text{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ChartWrapper = styled.div`
  position: relative;
  width: 180px; /* 크기 약간 줄임 */
  height: 180px;
  margin: 20px auto; /* 위아래 마진 추가 */
  pointer-events: none;
`;

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  user-select: none;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .emotion-percent{
    display: flex;
    gap: 2px;
    align-items: center;
    margin-top: 4px;
  }
`;

const EmotionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px; /* 간격 조정 */
  margin-top: 20px; /* 차트와의 간격 */
`;

const EmotionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmotionChart = ({ dataForChart }) => { // props 이름 변경
  const emotionCounts = {};
  if (dataForChart && dataForChart.length > 0) {
    dataForChart.forEach(item => {
      const type = item.emotion;
      if (type) {
        emotionCounts[type] = (emotionCounts[type] || 0) + 1;
      }
    });
  }

  const total = Object.values(emotionCounts).reduce((a, b) => a + b, 0);
  const chartData = Object.entries(emotionCounts).map(([emotion, count]) => ({
    emotion,
    count,
    percent: total > 0 ? parseFloat(((count / total) * 100).toFixed(1)) : 0,
  })).sort((a, b) => b.count - a.count); // 정렬은 여기서도 유지

  const topEmotion = chartData.length > 0 ? chartData[0] : { emotion: '', percent: 0 };

  if (!dataForChart || dataForChart.length === 0) {
    return (
      <StatsCardContainer>
        <div className='stats-head-text'>
          <Text weight="bold" size="1.1rem" margin="0 0 16px">감정 분포</Text>
        </div>
        <div className='stats-body-text'>
          <Text>해당 기간의 데이터가 없습니다.</Text>
        </div>
      </StatsCardContainer>
    );
  }

  return (
    <StatsCardContainer>
      <div className='stats-head-text'>

        <Text weight="bold" size="1.1rem" margin="0 0 16px"> {/* 이전 .stats-head-text 역할 */}
          감정 분포
        </Text>
      </div>

      <ChartWrapper>
        <PieChart width={180} height={180}>
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="emotion"
            cx="50%"
            cy="50%"
            outerRadius={80} // 크기 조정
            innerRadius={50} // 크기 조정
            isAnimationActive={false} // 애니메이션 비활성화 유지
          >
            {chartData.map((entry) => (
              <Cell key={`cell-${entry.emotion}`} fill={getEmotionColor(entry.emotion)} stroke="none" /> // stroke 제거
            ))}
          </Pie>
        </PieChart>
        <CenterText>
          {topEmotion.emotion && <Emotion type={topEmotion.emotion} size={28} />} {/* 크기 조정 */}
          <div className='emotion-percent'>
            <Text size="0.8rem" color="#666">{topEmotion.emotion ? getEmotionLabel(topEmotion.emotion) : ''}</Text>
            <Text size="0.8rem" color="#999">{topEmotion.emotion ? ` ${topEmotion.percent}%` : ''}</Text>
          </div>
        </CenterText>
      </ChartWrapper>

      <EmotionList>
        {chartData.map((e) => (
          <EmotionRow key={`row-${e.emotion}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: getEmotionColor(e.emotion)
              }} />
              <Text size="0.85rem" color="#555">{getEmotionLabel(e.emotion)}</Text>
            </div>
            <Text size="0.85rem" color="#999">{e.percent}%</Text>
          </EmotionRow>
        ))}
      </EmotionList>
    </StatsCardContainer>
  );
};

export default EmotionChart;
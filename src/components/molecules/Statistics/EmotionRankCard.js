import React from 'react';
import styled from 'styled-components';
import Emotion, { getEmotionLabel, getEmotionColor } from '../../atoms/Emotion'; // 경로 확인
import Card from '../../atoms/Card'; // 경로 확인
import Text from '../../atoms/Text'; // 경로 확인

const EmotionRankWarp = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  .top-emotion-info{ /* 이전 대화에서 추가한 클래스 */
    display: flex;
    flex-direction: column;
  }
`;

const EmotionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EmotionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 80px; /* 필요시 조정 */
  flex-shrink: 0;
`;

const ProgressWrapper = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  flex-grow: 1;
  height: 8px;
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;

const RankCardContainer = styled.div`
    width: 395px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    position: relative;
  .Rank-no-data{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`;

const EmotionRankCard = ({ dataForRank }) => {
  const emotionCounts = {};
  if (dataForRank && dataForRank.length > 0) {
    dataForRank.forEach(item => {
      const type = item.emotion;
      if (type) {
        emotionCounts[type] = (emotionCounts[type] || 0) + 1;
      }
    });
  }

  const total = Object.values(emotionCounts).reduce((a, b) => a + b, 0);
  const rankedData = Object.entries(emotionCounts).map(([emotion, count]) => ({
    emotion,
    count,
    percent: total > 0 ? Math.round((count / total) * 100) : 0
  })).sort((a, b) => b.count - a.count);

  const topEmotion = rankedData.length > 0 ? rankedData[0] : { emotion: '', percent: 0 };

  return (
    <RankCardContainer>
      {/* "감정 순위" 제목을 항상 표시 */}
      <div className='Rank-card-containar-head-text'>
        <Text weight="bold" size="1.1rem" margin="0 0 16px">감정 순위</Text>
      </div>

      {(!dataForRank || dataForRank.length === 0) ? (
        // 데이터가 없을 때 보여줄 메시지
        <div className='Rank-no-data'>
          <Text>해당 기간의 데이터가 없습니다.</Text>
        </div>
      ) : (
        // 데이터가 있을 때 보여줄 순위 정보
        <EmotionRankWarp>
          <TopSection>
            {topEmotion.emotion && <Emotion type={topEmotion.emotion} size={40} />}
            <div className='top-emotion-info'>
              <Text weight="bold" size={"1.1rem"}>{topEmotion.emotion ? getEmotionLabel(topEmotion.emotion) : '데이터 없음'}이 가장 많아요</Text>
              <Text size="0.85rem" color="#666">
                {topEmotion.emotion ? `이번 기간은 ${getEmotionLabel(topEmotion.emotion)} 감정이 가장 많았어요.` : '감정 기록이 없어요.'}
              </Text>
            </div>
          </TopSection>

          <EmotionList>
            {rankedData.map(e => (
              <EmotionRow key={`rank-${e.emotion}`}>
                <IconLabel>
                  <Emotion type={e.emotion} size={14} />
                  <Text size="0.85rem" weight="500">{getEmotionLabel(e.emotion)}</Text>
                </IconLabel>
                <ProgressWrapper>
                  <ProgressBar style={{
                    backgroundColor: getEmotionColor(e.emotion),
                    width: `${e.percent}%`
                  }} />
                </ProgressWrapper>
                <Text size="0.85rem" color="#555" style={{ minWidth: '40px', textAlign: 'right' }}>{e.percent}%</Text>
              </EmotionRow>
            ))}
          </EmotionList>
        </EmotionRankWarp>
      )}
    </RankCardContainer>
  );
};

export default EmotionRankCard;
// DiaryCheckContent.js
import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text';
import Card from '../../atoms/Card';

const TrackerContainer = styled.div`
  width: 100%;
  height: auto; // 내용에 따라 높이가 자동으로 늘어나도록 설정
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px; // 그리드와의 간격
  text-align: center;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 1.8rem;
    font-weight: bold;
    color: #B881C2;
  }
  span:last-child {
    font-size: 0.8rem;
    color: #777;
    margin-top: 4px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); // 항상 7열
  gap: 7px;
  // margin-bottom: 10px; // DateRangeText 제거 시 필요 없을 수 있음
  flex-grow: 1; // TrackerContainer 내에서 남은 공간을 차지하도록 시도
  // 그리드가 항상 보이도록 최소 높이를 설정하거나, 내용에 따라 조절되도록 합니다.
  // min-height: 150px; // 예시: 그리드가 최소한 이 정도 높이는 가지도록
`;

const DayCell = styled.div`
  width: 100%;
  // 정사각형 유지를 위해 padding-bottom 트릭 대신 aspect-ratio 사용 (모던 브라우저 지원)
  aspect-ratio: 1 / 1; // 너비와 높이 비율을 1:1로 (정사각형)
  background-color: ${props => props.active ? '#B881C2' : '#EAEAEA'};
  border-radius: 3px;
  // padding-bottom: 100%; // 이 방식 대신 aspect-ratio 사용
`;


// 연속 일수 계산 함수 (이전과 동일)
const calculateConsecutiveDays = (diaryData) => { /* ... 이전 코드 ... */
    if (!diaryData || diaryData.length === 0) return 0;
    const uniqueDates = Array.from(new Set(diaryData.map(d => d.date)))
        .map(dateStr => {
            const [year, month, day] = dateStr.split('.').map(Number);
            return new Date(year, month - 1, day);
        })
        .sort((a, b) => b - a);
    if (uniqueDates.length === 0) return 0;
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastDiaryDate = new Date(uniqueDates[0]);
    lastDiaryDate.setHours(0, 0, 0, 0);
    const oneDay = 24 * 60 * 60 * 1000;
    if ((today.getTime() - lastDiaryDate.getTime()) > oneDay) return 0;
    if ((today.getTime() - lastDiaryDate.getTime()) <= oneDay) {
        streak = 1;
        let currentDate = new Date(lastDiaryDate);
        for (let i = 1; i < uniqueDates.length; i++) {
            const prevDate = new Date(uniqueDates[i]);
            prevDate.setHours(0, 0, 0, 0);
            const diffTime = currentDate.getTime() - prevDate.getTime();
            if (diffTime === oneDay) {
                streak++;
                currentDate = prevDate;
            } else if (diffTime > oneDay) break;
        }
    }
    return streak;
};

const DiaryCheckContent = ({ myDiaryData, filteredData, activeStartDate, selectTab }) => {
    const isValidDate = activeStartDate instanceof Date && !isNaN(activeStartDate);

    const totalDiaries = myDiaryData ? myDiaryData.length : 0;
    const currentPeriodDiaries = filteredData ? filteredData.length : 0;
    const consecutiveDays = myDiaryData ? calculateConsecutiveDays(myDiaryData) : 0;

    let currentPeriodLabel = "이번 달";
    if (selectTab === 'weeklytab') currentPeriodLabel = "이번 주";
    else if (selectTab === 'quarterlytab') currentPeriodLabel = "이번 분기";
    else if (selectTab === 'yearlytab') currentPeriodLabel = "올해";

    const gridCells = [];
    if (isValidDate) {
        const gridYear = activeStartDate.getFullYear();
        const gridMonth = activeStartDate.getMonth();
        const firstDayOfMonth = new Date(gridYear, gridMonth, 1);
        const daysInMonth = new Date(gridYear, gridMonth + 1, 0).getDate();
        const firstDayOfWeekOfMonth = firstDayOfMonth.getDay(); // 0 (일) - 6 (토)
        const dayOffset = firstDayOfWeekOfMonth === 0 ? 6 : firstDayOfWeekOfMonth - 1; // 월요일 시작 기준

        const monthActivity = {};
        if (myDiaryData) {
            myDiaryData.forEach(diary => {
                if (diary && typeof diary.date === 'string') {
                    const [dYear, dMonth, dDay] = diary.date.split('.').map(Number);
                    if (dYear === gridYear && (dMonth - 1) === gridMonth) {
                        monthActivity[dDay] = true;
                    }
                }
            });
        }

        for (let i = 0; i < dayOffset; i++) {
            gridCells.push(<div key={`empty-start-${i}`} />); // 실제 DayCell 대신 빈 div로 공간만 차지하게 할 수도 있습니다.
            // 또는 DayCell에 isPlaceholder 같은 prop을 전달하여 다르게 스타일링
        }
        for (let day = 1; day <= daysInMonth; day++) {
            gridCells.push(<DayCell key={day} active={!!monthActivity[day]} />);
        }
        // 그리드를 항상 7x5=35 또는 7x6=42 칸으로 채우고 싶다면 나머지 빈 셀도 추가
        const totalRenderedCells = dayOffset + daysInMonth;
        const cellsInFullGrid = Math.ceil(totalRenderedCells / 7) * 7; // 5줄 또는 6줄
        for (let i = totalRenderedCells; i < cellsInFullGrid; i++) {
            gridCells.push(<div key={`empty-end-${i}`} />);
        }

    } else {
        // activeStartDate가 유효하지 않을 때 그리드 대신 보여줄 내용 (예: 로딩 메시지)
        // 또는 빈 그리드를 보여주기 위해 35~42개의 비활성 DayCell을 생성할 수도 있습니다.
        for (let i = 0; i < 35; i++) { // 예시로 35개 비활성 셀
            gridCells.push(<DayCell key={`placeholder-${i}`} active={false} />);
        }
    }

    return (
        <Card>
            `            <TrackerContainer>
                <Text weight="bold" size="1.1rem" margin="0 0 20px">일기 작성 활동</Text>
                <StatsRow>
                    <StatItem><span>{consecutiveDays}</span><span>연속 일수</span></StatItem>
                    <StatItem><span>{currentPeriodDiaries}</span><span>{currentPeriodLabel}</span></StatItem>
                    <StatItem><span>{totalDiaries}</span><span>총 일기</span></StatItem>
                </StatsRow>
                <GridContainer>
                    {gridCells}
                </GridContainer>
            </TrackerContainer>`
        </Card>
    );
};

export default DiaryCheckContent;
import { useState, useMemo } from 'react';
import styled from 'styled-components';
import StreakHeader from '../../molecules/main/StreakHeader';
import WeeklyBar from '../../molecules/main/WeeklyBar';
import MiniCalendar from '../../molecules/main/MiniCalendar';
import { addMonths } from 'date-fns';

const Card = styled.section`
  background: #fff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

export default function StreakWidget({
  streak = 0,
  weekDone = [],
  diaryDates = [],
  today = new Date(),
}) {
  const [offset, setOffset] = useState(0);
  const baseDate = addMonths(today, offset);
  console.log('🔍 diaryDates 원본:', diaryDates);
  const parsedDates = useMemo(() => {
    const thisMonth = String(baseDate.getMonth() + 1).padStart(2, '0');
    const thisYear = baseDate.getFullYear();
    return diaryDates
    .filter(date => {
      const [y, m] = date.split('-');
      return y == thisYear && m == thisMonth;
    })
    .map(d => Number(d.split('-')[2]));
  }, [diaryDates, baseDate]);
  console.log('📅 표시할 날짜:', parsedDates);

  return (
    <Card>
      <h3 className="section-title" style={{ margin: 0 }}>나의 기록 스트릭</h3>
      <StreakHeader streak={streak} />
      <WeeklyBar done={weekDone} />
      <p style={{ fontSize: '.85rem', color: '#666', textAlign: 'center', margin: '6px 0 14px' }}>
        오늘도 일기를 작성하고 스트릭을 이어가세요!
      </p>
      <MiniCalendar
        baseDate={baseDate}
        diaryDates={parsedDates}
        onPrev={() => setOffset(o => o - 1)}
        onNext={() => setOffset(o => o + 1)}
      />
    </Card>
  );
}

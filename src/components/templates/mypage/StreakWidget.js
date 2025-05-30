import { useState, useMemo } from 'react';
import styled from 'styled-components';
import StreakHeader from '../../molecules/main/StreakHeader';
import WeeklyBar from '../../molecules/main/WeeklyBar';
import MiniCalendar from '../../molecules/main/MiniCalendar';
import {
  addMonths,
  startOfWeek,
  addDays,
  parseISO,
} from 'date-fns';

const Card = styled.section`
  background: #fff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  margin-top: 5vh;
`;

export default function StreakWidget({
  streak = 0,
  diaryDates = [],
  today = new Date(),
}) {
  const [offset, setOffset] = useState(0);
  const baseDate = addMonths(today, offset);

  const weekdayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const diaryDateObjects = diaryDates
    .map(d => parseISO(d))
    .filter(d => !isNaN(d)); // 유효한 날짜만

  const thisWeekStart = startOfWeek(today, { weekStartsOn: 1 }); // 월요일 기준
  const thisWeekDays = Array.from({ length: 7 }).map((_, i) => {
    const date = addDays(thisWeekStart, i);
    const found = diaryDateObjects.find(d => d.toDateString() === date.toDateString());
    return found ? weekdayNames[date.getDay()] : null;
  }).filter(Boolean);

  const parsedDates = useMemo(() => {
    const thisMonth = String(baseDate.getMonth() + 1).padStart(2, '0');
    const thisYear = String(baseDate.getFullYear());
    return diaryDates
      .filter(date => {
        const [y, m] = date.split('-');
        return y === thisYear && m === thisMonth;
      })
      .map(d => Number(d.split('-')[2]));
  }, [diaryDates, baseDate]);

  return (
    <Card>
      <h3 className="section-title" style={{ margin: 0 }}>나의 기록 스트릭</h3>
      <StreakHeader streak={streak} />
      <WeeklyBar done={thisWeekDays} />
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

import { useMemo } from 'react';
import styled from 'styled-components';
import CalHeader from './CalHeader';
import Circle from '../../atoms/Circle';
import EmotionDot from '../../atoms/EmotionDot';
import { addMonths, startOfMonth, endOfMonth, getDay } from 'date-fns';
import EmotionIcon from '../../atoms/EmotionIcon';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  gap: 8px;
  justify-content: center;
  justify-items: center
`;

export default function MiniCalendar({ baseDate, diaryDates = [], onPrev, onNext }) {
  const label = `${baseDate.getFullYear()}년 ${baseDate.getMonth() + 1}월`;

  const cells = useMemo(() => {
    const start = startOfMonth(baseDate);
    const end = endOfMonth(baseDate);
    const offset = getDay(start); // 0=일
    const arr = Array(offset).fill(null);
    for (let d = 1; d <= end.getDate(); d++) arr.push(d);
    return arr;
  }, [baseDate]);
  return (
    <>
      <CalHeader label={label} onPrev={onPrev} onNext={onNext} />
      <Grid>
        {['일', '월', '화', '수', '목', '금', '토'].map(d => (
          <span key={d} style={{ fontSize: '.8rem', color: '#999' }}>{d}</span>
        ))}

{cells.map((d, i) => {
  if (d === null) return <div key={i} />;

  const dayData = diaryDates.find(item => item.day === d);

        return (
          <Circle
            key={i}
            size={32}
            variant={d === baseDate.getDate() ? 'fill' : undefined}
            style={{ position: 'relative' }}
          >
            {d}
            {diaryDates.includes(d) && <EmotionDot emotion="happy" />}
          </Circle>
        );
      })}
      </Grid>
    </>
  );
}

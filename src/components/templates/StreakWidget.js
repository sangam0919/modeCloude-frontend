import {useState} from 'react';
import styled from 'styled-components';
import StreakHeader  from '../molecules/StreakHeader';
import WeeklyBar     from '../molecules/WeeklyBar';
import BadgeRow      from '../molecules/BadgeRow';
import MiniCalendar  from '../molecules/MiniCalendar';
import { addMonths,startOfMonth,endOfMonth,getDay } from 'date-fns';

const Card=styled.section`
  background:#fff;border-radius:15px;padding:25px;
  box-shadow:0 5px 15px rgba(0,0,0,.05);width:100%;
`;

export default function StreakWidget({
  streak=7,
  weekDone=['월','화','수','목','금','토'],
  diaryDates=[26,27,28,29,30],
  today=new Date(),
}){
  const [offset,setOffset]=useState(0);
  const baseDate=addMonths(today,offset);

  return (
    <Card>
      <h3 className="section-title" style={{margin:0}}>나의 기록 스트릭</h3>

      <StreakHeader streak={streak}/>
      <WeeklyBar   done={weekDone}/>
      <p style={{fontSize:'.85rem',color:'#666',textAlign:'center',margin:'6px 0 14px'}}>
        오늘도 일기를 작성하고 스트릭을 이어가세요!
      </p>
      <BadgeRow streak={streak}/>
      <hr style={{border:'none',borderTop:'1px solid #eee',margin:'12px 0 18px'}}/>

      <MiniCalendar
        baseDate={baseDate}
        diaryDates={diaryDates}
        onPrev={()=>setOffset(o=>o-1)}
        onNext={()=>setOffset(o=>o+1)}
      />
    </Card>
  );
}

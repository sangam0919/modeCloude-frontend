import DiarySection from './DiarySection';

const sample = [
  { id:1, date:'2025.03.29 토요일', title:'봄 날씨와 함께한 산책',
    preview:'오늘은 날씨가 정말 좋아서 오랜만에 한강공원에 산책을 나갔다...',
    moodColor:'#FFEAA7', moodLabel:'행복', visibility:'🌎 공개', likes:3, comments:1 },
  { id:2, date:'2025.03.28 금요일', title:'업무에 대한 고민',
    preview:'프로젝트 마감이 다가오는데 아직 해결하지 못한 문제가 있어서 걱정이다...',
    moodColor:'#C7CEEA', moodLabel:'불안', visibility:'🔒 비공개', likes:0, comments:0 },
  { id:3, date:'2025.03.27 목요일', title:'오랜만에 만난 친구',
    preview:'대학 때 친구를 오랜만에 만났다. 서로 많이 바빠서 자주 볼 수는 없지만...',
    moodColor:'#FFD8BE', moodLabel:'신남', visibility:'🌎 공개', likes:5, comments:2 },
  { id:4, date:'2025.03.26 수요일', title:'평화로운 하루',
    preview:'특별한 일은 없었지만, 평소보다 여유롭게 하루를 보냈다...',
    moodColor:'#B5EAD7', moodLabel:'평온', visibility:'🌎 공개', likes:2, comments:0 },
];

export default function RecentDiariesSection(){
  const handleMore=()=>console.log('모든 일기 보기 클릭');
  return (
    <DiarySection title="최근 일기" diaries={sample}
                  viewMoreText="모든 일기 보기" onViewMore={handleMore}/>
  );
}
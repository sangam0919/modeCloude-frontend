import DiarySection from './DiarySection';

// TODO: API 연동 시 팔로우한 사용자들의 일기를 fetch 해 주입
const others = [ /* 서버에서 받아온 남일기 데이터 */ ];

export default function OthersDiariesSection(){
  const handleMore = () => console.log('남의 일기 더 보기 클릭');

  return (
    <DiarySection
      title="남의 일기"
      diaries={others}
      viewMoreText="남의 일기 더 보기"
      onViewMore={handleMore}
    />
  );
}
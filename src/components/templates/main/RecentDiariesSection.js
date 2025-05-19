import DiarySection from './DiarySection';
import { sample } from '../../../hooks/simpleData'

export default function RecentDiariesSection(){
  const handleMore=()=>console.log('모든 일기 보기 클릭');
  return (
    <DiarySection title="최근 일기" diaries={sample}
                  viewMoreText="모든 일기 보기" viewMoreTo={'#'} onViewMore={handleMore}/>
  );
}
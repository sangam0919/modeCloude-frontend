import DiarySection from './DiarySection';
import EmotionIcon from '../../atoms/EmotionIcon';
import { others } from '../../../hooks/simpleData'

export default function OthersDiariesSection(){
  const handleMore = () => console.log('남의 일기 더 보기 클릭');
  const renderEmotion = (emoji) => <EmotionIcon otehrs={emoji} />;
  return (
    <DiarySection
      title="남의 일기"
      diaries={others}
      renderEmotion={renderEmotion}
      viewMoreText="남의 일기 더 보기"
      viewMoreTo="/others"  
      onViewMore={handleMore}
  />
  );
}
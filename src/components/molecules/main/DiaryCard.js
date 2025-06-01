import styled from 'styled-components';
import EmotionDot from '../../atoms/EmotionDot';
import { useNavigate } from 'react-router-dom';

const Card = styled.article`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Header = styled.div`
  font-size: 0.8rem;
  color: #999;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  color: #333;
  margin: 4px 0;
`;

const Preview = styled.p`
 font-size: 0.9rem;
color: #666;
line-height: 1.4;
display: -webkit-box;
-webkit-line-clamp: 2;             
-webkit-box-orient: vertical;
overflow: hidden;
max-width: 4000px;                  
text-overflow: ellipsis;
white-space: normal;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #999;
  margin-top: 6px;
`;

const EmotionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Stats = styled.div`
  display: flex;
  gap: 10px;
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-size: 0.85rem;
    font-weight: 500;
    color: #444;
  }
`;

// const Content = styled.div`
//      font-size: 0.9rem;
//   color: #444;
//   line-height: 1.4;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   max-width: 100%;
// `;

export default function DiaryCard({
  date,
  title,
  preview,
  moodColor,
  moodLabel,
  visibility,
  comments,
  diary,
  writer,
  showWriter = true // 🔹 작성자 표시 여부 (기본값 true)
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!diary) return;
    navigate(`/detail/${String(diary.id).trim()}`);
  };

  const stripHtmlTagsAndImages = (text) => {
    if (!text) return '';
    let cleaned = text.replace(/!\[.*?\]\(.*?\)/g, '');   
    cleaned = cleaned.replace(/<[^>]*>?/gm, '');         
    return cleaned;
  };

  return (
    <Card onClick={handleClick}>
      {showWriter && writer && (
        <WriterInfo>
          <img src={writer?.profile_image || '/default-profile.png'} alt="프로필" />
          <span>{writer?.nick_name || '알 수 없음'}</span>
        </WriterInfo>
      )}

      <Header>
        <span>{date}</span>
        <span>{visibility === '공개' ? '🌍 공개' : '🔒 비공개'}</span>
      </Header>

      <Title>{title}</Title>
      <Preview>{stripHtmlTagsAndImages(preview)}</Preview>
      {/* <Content>{diary?.content}</Content> */}

      <Footer>
        <EmotionWrap>
          <EmotionDot color={moodColor || '#ccc'} />
          <span>{moodLabel || '감정 없음'}</span>
        </EmotionWrap>
        <Stats>
          <span>💬 {comments}</span>
        </Stats>
      </Footer>
    </Card>
  );
}
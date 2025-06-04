import styled from 'styled-components';
import DiaryCard from './DiaryCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const stripHtmlTagsAndImages = (text) => {
  if (!text) return '';
  let cleaned = text
    .replace(/!\[[^\]]*\]\([^\)]*\)/gs, '')
    .replace(/<[^>]*>/g, '')                
    .replace(/\s+/g, ' ')                  
    .trim();
  return cleaned;
};

const getPreviewText = (text, maxLength = 20) => {
  const cleaned = stripHtmlTagsAndImages(text);
  return cleaned.length > maxLength
    ? cleaned.slice(0, maxLength) + '...'
    : cleaned;  
};

const selectDiaries = (diaries, showWriter) => {
  return diaries.map((d) => {
    if (!d || !d.createdAt) return null;
    return (
      <DiaryCard
        key={d.id}
        diary={d}
        date={d.createdAt.slice(0, 10)}
        title={d.title}
        preview={getPreviewText(d.content)}
        moodColor={d.emotion?.color}
        moodLabel={d.emotion?.name}
        visibility={d.isPublic ? '공개' : '비공개'}
        comments={d.commentCount}
        showWriter={showWriter}
        writer={d.writer}
      />
    );
  })
}

export default function DiaryGrid({ diaries, showWriter }) {
  return (
    <Grid>
      {selectDiaries(diaries, showWriter)?.map((d, i) => {
        if(i > 3) return null;
        return d; 
      })}
    </Grid>
  );
}

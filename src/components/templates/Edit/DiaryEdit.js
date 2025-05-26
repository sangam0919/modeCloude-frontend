import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { parseMarkdownWithFallback } from '../../../utills/parseMarkdown.js';
import { GradientBtn } from '../../atoms/RoundButton';
import FeedbackModal from '../../atoms/FeedbackModal';
import useUpload from '../../../hooks/useUpload';
import { analyzeEmotion } from '../../../api/write';
import useEmotion from '../../../hooks/useEmotion';

const WritingArea = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 25px;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  padding: 10px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #b881c2;
  }

  &::placeholder {
    color: #ccc;
  }
`;

const WordCount = styled.div`
  text-align: right;
  color: #999;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const DiaryEdit = ({
  diary,
  aiEmotion,
  setAiEmotion,
  title,
  setTitle,
  imageUrl,
  setImageUrl,
  editorRef
}) => {
  const uploadImage = useUpload();
  const { emotions, setEmotionByLabel } = useEmotion();

  const [modal, setModal] = useState({
    isOpen: false,
    type: 'success',
    message: { title: '', desc: '' }
  });

  const imageUrls = diary?.images?.map(img => img.image_url) || [];
  console.log('초기 diary.content:', diary?.content);
  const initialContent = parseMarkdownWithFallback(diary?.content || '', imageUrls);

  const handleImageUpload = async (blob, callback) => {
    try {
      const url = await uploadImage(blob); // 서버 업로드 후 URL 반환
      callback(url, '업로드 이미지'); // 마크다운에 삽입
    } catch (err) {
      console.error('이미지 업로드 실패:', err);
    }
  };

  const handleAnalyzeClick = async () => {
    const markdown = editorRef.current?.getInstance().getMarkdown() || '';

    if (!markdown.trim()) {
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '내용 없음',
          desc: '일기 내용을 입력해주세요.',
        }
      });
      return;
    }

    // const emotion = await analyzeEmotion(markdown, emotions);
    const emotionLabel = await analyzeEmotion(markdown);
    const found = emotions.find((e) => e.id === emotionLabel || e.name === emotionLabel);

    if (found) {
      setEmotionByLabel(found.name);
      setAiEmotion(found);
      setModal({
        isOpen: true,
        type: 'success',
        message: {
          title: 'AI 감정 분석 완료!',
          desc: `오늘의 감정은 "${found.name}"이에요 😊`
        }
      });
    } else {
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '분석 실패',
          desc: 'AI가 감정을 정확히 찾지 못했어요. 다시 시도해보세요.'
        }
      });
    }
  };

  const handleModalClose = () => {
    setModal({ ...modal, isOpen: false });
  };

  const getContentLength = () => {
    const markdown = editorRef.current?.getInstance().getMarkdown() || '';
    return markdown.length;
  };

  return (
    <WritingArea>
      <TitleInput
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Editor
        ref={editorRef}
        height="770px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        useCommandShortcut={true}
        initialValue={initialContent}
        hooks={{
          addImageBlobHook: handleImageUpload,
        }}
      />

      <WordCount>{getContentLength()} 단어</WordCount>
      <GradientBtn onClick={handleAnalyzeClick}>검사하기</GradientBtn>

      {modal.isOpen && (
        <FeedbackModal
          type={modal.type}
          customMessage={modal.message}
          showButton={true}
          buttonText="확인"
          buttonColor="#b881c2"
          showCancelButton={false}
          onConfirm={handleModalClose}
          onClose={handleModalClose}
        />
      )}
    </WritingArea>
  );
};

export default DiaryEdit;

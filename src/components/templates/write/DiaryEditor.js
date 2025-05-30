import React, {  useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css'; 
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
  width: 100%;
  box-sizing: border-box;
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

const DiaryEditor = ({ title, setTitle, imageUrl, setImageUrl, editorRef, setAiEmotion, setEmotion }) => {
  const uploadImage = useUpload();
  const { emotions, setEmotionByLabel } = useEmotion(); 

  const [modal, setModal] = useState({
    isOpen: false,
    type: 'success',
    message: { title: '', desc: '' }
  });

  const handleAnalyzeClick = async () => {
    const editorInstance = editorRef.current?.getInstance();
    const markdown = editorInstance?.getMarkdown() || '';

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

    const emotionLabel = await analyzeEmotion(markdown);
    const found = emotions.find((e) => e.name === emotionLabel);

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

  const handleImageUpload = async (blob, callback) => {
    try {
      const url = await uploadImage(blob); 
      if (url) {
        setImageUrl(url);
        callback(url, '업로드 이미지'); 
      }
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  };

  const getContentLength = () => {
    const editorInstance = editorRef.current?.getInstance();
    const plainText = editorInstance?.getMarkdown() || '';
    return plainText.length;
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
        height="600px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        initialValue=""
        useCommandShortcut={true}
        hooks={{
          addImageBlobHook: handleImageUpload,
        }}
      />

      <WordCount>{getContentLength()} 단어</WordCount>
      <GradientBtn onClick={handleAnalyzeClick}>검사하기</GradientBtn>

      {modal.isOpen && (
        <FeedbackModal
          type={modal.type}
          customMessage={modal.message.desc}
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

export default DiaryEditor;

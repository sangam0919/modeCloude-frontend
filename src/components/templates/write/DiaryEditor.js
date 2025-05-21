import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // ✅ 반드시 import!
import { GradientBtn } from '../../atoms/RoundButton';

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

const Toolbar = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
`;

const toolbarBtnStyles = css`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1.1rem;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    color: #b881c2;
  }
`;

const ToolbarBtn = styled.button`
  ${toolbarBtnStyles}
`;

const Separator = styled.div`
  width: 1px;
  height: 20px;
  background: #f0f0f0;
  margin: 0 5px;
`;

const WordCount = styled.div`
  text-align: right;
  color: #999;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const DiaryEditor = () => {
  const [title, setTitle] = useState('');
  const editorRef = useRef();

  // 이미지 업로드 기능 (Base64 변환)
  const handleImageUpload = async (blob, callback) => {
    const reader = new FileReader();
    reader.onload = () => {
      callback(reader.result, '업로드 이미지');
    };
    reader.readAsDataURL(blob);
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
{/* 
      <Toolbar>
        <ToolbarBtn><strong>B</strong></ToolbarBtn>
        <ToolbarBtn><em>I</em></ToolbarBtn>
        <ToolbarBtn><u>U</u></ToolbarBtn>
        <Separator />
        <ToolbarBtn>1.</ToolbarBtn>
        <ToolbarBtn>📷</ToolbarBtn>
        <ToolbarBtn>🎤</ToolbarBtn>
      </Toolbar> */}

      {/* Toast UI 에디터 추가 */}
      <Editor
        ref={editorRef}
        height="770px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        initialValue=""
        useCommandShortcut={true}
        hooks={{
          addImageBlobHook: handleImageUpload,
        }}
      />

      <WordCount>{getContentLength()} 단어</WordCount>
      <GradientBtn>검사하기</GradientBtn>
    </WritingArea>
  );
};

export default DiaryEditor;

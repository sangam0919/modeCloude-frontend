import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import LayoutTwoCols from '../templates/LayoutTwoCols';
import Sidebar from '../templates/write/Sidbar';
import Header from '../templates/Header';
import WriteHeader from '../templates/write/WriteHeader';
import DiaryEditor from '../templates/write/DiaryEditor';
import useUser from '../../hooks/useUser';
import useWrite from '../../hooks/useWrite';
import FeedbackModal from '../atoms/FeedbackModal';

const GlobalStyle = createGlobalStyle`
  .toastui-editor-default {
    width: 100% !important;
    box-sizing: border-box;
  }

  .toastui-editor {
    width: 100% !important;
  }

  .toastui-editor-contents {
    font-size: 1rem;
    word-break: break-word;
  }

  @media (max-width: 768px) {
    .toastui-editor-default {
      font-size: 14px;
    }
  }
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 50px;
`;

const Write = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState(['']);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [aiEmotion, setAiEmotion] = useState(null);
  const [isPublic, setIsPublic] = useState(true);

  const editorRef = useRef();
  const { user } = useUser();
  const { handleSave } = useWrite();
  const navigate = useNavigate();

  const [modal, setModal] = useState({
    isOpen: false,
    type: 'success',
    message: { title: '', desc: '' },
    mode: null
  });

  const onSave = async () => {
    const content = editorRef.current?.getInstance().getMarkdown();

    if (!title.trim()) {
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '제목 없음',
          desc: '제목을 입력해주세요.'
        },
        mode: 'save'
      });
      return;
    }

    if (!content || !content.trim()) {
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '내용 없음',
          desc: '일기 내용을 입력해주세요.'
        },
        mode: 'save'
      });
      return;
    }

    if (!aiEmotion || !aiEmotion.id) {
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '감정 분석 미완료',
          desc: 'AI 감정 분석을 먼저 완료해주세요.'
        },
        mode: 'save'
      });
      return;
    }

    try {
      const result = await handleSave({
        title,
        content,
        user_id: user?.uid,
        userEmotion: selectedEmotion?.mood || null,
        selectEmotion: aiEmotion?.id || null,
        diary_img: imageUrl || '',
        is_public: isPublic
      });

      if (result?.success) {
        setModal({
          isOpen: true,
          type: 'success',
          message: {
            title: '일기 저장 완료!',
            desc: '일기가 성공적으로 저장되었습니다.'
          },
          mode: 'save'
        });

        setTimeout(() => {
          setModal((prev) => ({ ...prev, isOpen: false }));
          navigate('/main');
        }, 1500);
      } else {
        setModal({
          isOpen: true,
          type: 'error',
          message: {
            title: '저장 실패',
            desc: '저장에 실패했습니다. 다시 시도해주세요.'
          },
          mode: 'save'
        });
      }
    } catch (error) {
      console.error('저장 실패:', error);
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '저장 중 오류',
          desc: '저장 중 문제가 발생했습니다.'
        },
        mode: 'save'
      });
    }
  };

  const handleCancel = () => {
    setModal({
      isOpen: true,
      type: 'check',
      message: {
        title: '정말 작성을 취소할까요?',
        desc: '작성 중인 일기 내용은 모두 사라집니다.'
      },
      mode: 'cancel'
    });
  };

  const handleModalConfirm = () => {
    if (modal.mode === 'cancel') navigate('/main');
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleModalClose = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const leftColumn = (
    <DiaryEditor
      title={title}
      setTitle={setTitle}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      editorRef={editorRef}
      setAiEmotion={setAiEmotion}
      setSelectedEmotion={setSelectedEmotion}
    />
  );

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Header />
        <WriteHeader onSave={onSave} onCancel={handleCancel} />
        <LayoutTwoCols
          left={leftColumn}
          right={
            <Sidebar
              aiEmotion={aiEmotion}
              setAiEmotion={setAiEmotion}
              selectedEmotion={selectedEmotion}
              setSelectedEmotion={setSelectedEmotion}
              isPublic={isPublic}
              setIsPublic={setIsPublic}
            />
          }
        />
        {modal.isOpen && (
          <FeedbackModal
            type={modal.type}
            customMessage={modal.message}
            showButton={true}
            buttonText="확인"
            buttonColor="#b881c2"
            showCancelButton={false}
            onConfirm={handleModalConfirm}
            onClose={handleModalClose}
          />
        )}
      </Wrap>
    </>
  );
};

export default Write;

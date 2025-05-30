import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import LayoutTwoCols from '../templates/LayoutTwoCols';
import Sidebar from '../templates/Edit/Sidbar';
import Header from '../templates/Header';
import WriteHeader from '../templates/Edit/WriteHeader';
import DiaryEdit from '../templates/Edit/DiaryEdit';
import useEmotion from '../../hooks/useEmotion';
import { useDispatch, useSelector } from 'react-redux';
import { updateDiary, resetUpdateStatus } from '../../redux/actions/diary';
import FeedbackModal from '../atoms/FeedbackModal';

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 50px;
`;

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { diary } = location.state || {};
  const { emotions } = useEmotion();
  const updateStatus = useSelector(state => state.diary.updateStatus);
  const updateError = useSelector(state => state.diary.updateError);

  const editorRef = useRef();

  const [title, setTitle] = useState(diary?.title || '');
  const [isPublic, setIsPublic] = useState(diary?.is_public ?? true);
  const [aiEmotion, setAiEmotion] = useState(null);
  const [imageUrl, setImageUrl] = useState(diary?.images?.map(img => img.image_url) || []);
  const [modal, setModal] = useState({ isOpen: false, type: '', message: { title: '', desc: '' }});

  useEffect(() => {
    dispatch(resetUpdateStatus());
  }, []);

  useEffect(() => {
    if (diary && emotions.length > 0) {
      const match = emotions.find(
        (e) =>
          e.id === diary?.emotionLog?.userEmotion ||
          e.id === diary?.emotionLog?.selectEmotion
      );
      if (match) setAiEmotion(match);
    }
  }, [diary, emotions]);

  useEffect(() => {
    if (!modal.mode && updateStatus === 'succeeded') {
      setModal({
        isOpen: true,
        type: 'success',
        message: {
          title: '수정 완료',
          desc: '일기가 성공적으로 수정되었습니다.'
        },
        mode: 'save'
      });
      setTimeout(() => 
      dispatch(resetUpdateStatus()), 
      navigate(`/detail/${diary.id}`, { replace: true })
      , 1500);
    } else if (!modal.mode && updateStatus === 'failed') {
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '수정 실패',
          desc: updateError || '일기 수정 중 오류가 발생했습니다.'
        },
        mode: 'save'
      });
    }
  }, [updateStatus]);

  const handleSave = () => {
    const content = editorRef.current?.getInstance().getMarkdown() || '';

    if (!title.trim()) {
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '제목 없음',
          desc: '제목을 입력해주세요.'
        },
        mode: 'validate'
      });
      return;
    }

    if (!content.trim()) {
      setModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '내용 없음',
          desc: '일기 내용을 입력해주세요.'
        },
        mode: 'validate'
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
        mode: 'validate'
      });
      return;
    }

    const payload = {
      title,
      content,
      selectEmotion: aiEmotion.id, 
      userEmotion: diary?.emotionLog?.userEmotion || null,
      is_public: isPublic,
      diary_img: imageUrl
    };

    dispatch(updateDiary(diary.id, payload));
  };

  const handleCancel = () => navigate(-1);
  const handleModalClose = () => setModal({ ...modal, isOpen: false, mode: null });

  const leftColumn = (
    <DiaryEdit
      diary={diary}
      aiEmotion={aiEmotion}
      setAiEmotion={setAiEmotion}
      title={title}
      setTitle={setTitle}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      editorRef={editorRef}
    />
  );

  return (
    <Wrap>
      <Header />
      <WriteHeader onSave={handleSave} onCancel={handleCancel} />
      <LayoutTwoCols
        left={leftColumn}
        right={
          <Sidebar
            diary={diary}
            isPublic={isPublic}
            setIsPublic={setIsPublic}
            aiEmotion={aiEmotion}
          />
        }
      />
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
    </Wrap>
  );
};

export default Edit;

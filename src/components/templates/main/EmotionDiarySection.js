import styled from 'styled-components';
import EmotionGrid from '../../molecules/main/EmotionGrid';
import SelectedEmotionInfo from '../../molecules/main/SelectedEmotionInfo';
import EmotionActions from '../../molecules/main/EmotionActions';
import useEmotion from '../../../hooks/useEmotion';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveEmotionOnly } from '../../../redux/actions/diary';
import useDiaryStatus from '../../../hooks/useDiaryStatus';
import FeedbackModal from '../../atoms/FeedbackModal';
import { useState } from 'react';
import GrowingClouds from '../../pages/GrowingClouds';

const Section = styled.section`
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const Section2 = styled.section`
  background: white;
  border-radius: 15px;
  max-height: 600px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const Divider = styled.hr`
  margin: 25px 0;
  border: none;
  border-top: 1px dashed #e0e0e0;
`;

export default function EmotionDiarySection({ user, selectedEmotion, aiEmotion }) {
  const navigate = useNavigate();
  const { emotions, selected, setSelected } = useEmotion();
  const selObj = emotions.find((e) => e.id === selected);
  const dispatch = useDispatch();
  const { isDone, refetchStatus } = useDiaryStatus();

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [feedbackModal, setFeedbackModal] = useState({
    isOpen: false,
    type: 'success',
    message: { title: '', desc: '' },
  });

  if (isDone) {
    return (
      <Section2>
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>☁️ 당신의 구름 갤러리</h2>
        <GrowingClouds />
        <p style={{ textAlign: 'center', marginTop: '10px', color: '#666' }}>
          일기를 쓰면 구름 안의 추억이 자라나요 🌱
        </p>
      </Section2>
    );
  }

  const handleWrite = () => {
    if (!selObj) return;
    const query = new URLSearchParams({
      mood: selObj.id,
      emoji: selObj.emoji,
      label: selObj.name,
    }).toString();
    navigate(`/write?${query}`);
  };

  const handleSaveEmotion = () => {
    console.log('user:', user);
    console.log('user.uid:', user?.uid); 
    console.log('selected:', selected);
  
    if (!user?.uid || !selected) {
      setFeedbackModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '입력 누락',
          desc: '사용자 정보 또는 감정 선택이 누락되었습니다.',
        },
      });
      return;
    }
  
    setConfirmModalOpen(true);
  };

  const doSaveEmotion = async () => {
    const data = {
      user_id: user.uid,
      userEmotion: selected,
      selectEmotion: aiEmotion || null,
    };
  
    console.log('저장할 감정 데이터:', data);
  
    try {
      await dispatch(saveEmotionOnly(data)); 
      setFeedbackModal({
        isOpen: true,
        type: 'success',
        message: {
          title: '감정 기록 완료!',
          desc: '감정이 성공적으로 기록되었습니다!',
        },
      });
      navigate('/main?refetch=true');
      await refetchStatus();
    } catch (error) {
      console.error('감정 기록 실패:', error);
      setFeedbackModal({
        isOpen: true,
        type: 'error',
        message: {
          title: '감정 기록 실패',
          desc: '감정 기록 중 오류가 발생했습니다. 다시 시도해주세요.',
        },
      });
    } finally {
      setConfirmModalOpen(false);
    }
  };

  return (
    <>
      <Section>
        <h3 className="section-title">오늘의 감정을 선택하고 이야기를 들려주세요</h3>
        <EmotionGrid items={emotions} selected={selected} onSelect={setSelected} />
        {selObj && (
          <>
            <Divider />
            <SelectedEmotionInfo
              mood={selObj.id}
              emoji={selObj.emoji}
              text={`오늘은 ${selObj.name}하신가요?`}
            />
            <EmotionActions onWrite={handleWrite} onRecord={handleSaveEmotion} />
          </>
        )}
      </Section>

      {confirmModalOpen && (
        <FeedbackModal
          type="check"
          title="정말로 감정만 기록할까요?"
          desc="일기를 작성하지 않고 감정만 기록됩니다."
          showButton
          buttonText="기록하기"
          buttonColor="#b881c2"
          showCancelButton
          cancelText="돌아가기"
          onConfirm={doSaveEmotion}
          onCancel={() => setConfirmModalOpen(false)}
        />
      )}

      {feedbackModal.isOpen && (
        <FeedbackModal
          type={feedbackModal.type}
          customMessage={feedbackModal.message.desc}
          title={feedbackModal.message.title}
          onClose={() => setFeedbackModal({ ...feedbackModal, isOpen: false })}
        />
      )}
    </>
  );
}

import React from 'react';
import styled from 'styled-components';
import { GradientBtn, OutlineBtn } from '../atoms/RoundButton'; 

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 320px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease;
  text-align: center;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    color: ${({ type }) =>
      type === 'success' ? '#4CAF50' :
      type === 'error' ? '#F44336' :
      '#2196F3'};
  }

  p {
    font-size: 0.95rem;
    color: #444;
    margin-bottom: 1.2rem;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1rem;
`;

const FeedbackModal = ({
  type = 'success',
  onClose,
  onConfirm,
  showButton = false,
  buttonText = '확인',
  buttonColor = '#b881c2',
  showCancelButton = false,
  cancelText = '취소',
  onCancel,
  customMessage = null,
}) => {
  const getMessage = () => {
    if (customMessage) return customMessage;

    switch (type) {
      case 'success':
        return { title: '성공!', desc: '글쓰기가 완료되었습니다.' };
      case 'error':
        return { title: '실패!', desc: '문제가 발생했어요. 다시 시도해주세요.' };
      case 'check':
        return { title: '검사 완료', desc: '내용 검사가 정상적으로 완료되었습니다.' };
      default:
        return { title: '알림', desc: '처리가 완료되었습니다.' };
    }
  };

  const { title, desc } = getMessage();

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox type={type} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{desc}</p>
        {showButton && (
          <ButtonGroup>
            {showCancelButton && (
              <OutlineBtn onClick={onCancel || onClose}>{cancelText}</OutlineBtn>
            )}
            <GradientBtn
              style={{ background: buttonColor }}
              onClick={onConfirm || onClose}
            >
              {buttonText}
            </GradientBtn>
          </ButtonGroup>
        )}
      </ModalBox>
    </ModalOverlay>
  );
};

export default FeedbackModal;

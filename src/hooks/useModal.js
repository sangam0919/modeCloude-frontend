// src/hooks/useModal.js
import { useState, useCallback } from 'react';

const useModal = (animationDuration = 500) => {
  const [isVisible, setIsVisible] = useState(false);  // 실제로 렌더링되는지
  const [isAnimating, setIsAnimating] = useState(false);  // 애니메이션 중인지

  const openModal = useCallback(() => {
    setIsVisible(true);
    setIsAnimating(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, animationDuration);
  }, [animationDuration]);

  return {
    isOpen: isVisible,
    isAnimating,
    openModal,
    closeModal,
    animationDuration,
  };
};

export default useModal;

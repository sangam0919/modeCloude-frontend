import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsAnimating(true); 

    setTimeout(() => {
      setIsOpen(true);
    }, 500);
  };

  const closeModal = () => {
    setIsOpen(false); 

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return { isOpen, isAnimating, openModal, closeModal };
};

export default useModal;

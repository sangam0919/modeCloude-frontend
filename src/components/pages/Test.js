import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import happyCloud2 from '../../images/happy2.png';
import testImg1 from '../../images/logo.png';
import testImg2 from '../../images/logo2.png';
import img_123 from '../../images/스크린샷 2024-07-04 160330_1747990912479.png'
import sad from '../../images/sad.png'

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(135deg, #f8e1e7, #e1eaf8, #e1f8f4);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 400px;
  overflow: hidden;
`;

const CloudImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
`;

const DiaryImage = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 2;
  animation: ${float} 4s ease-in-out infinite;
  cursor: pointer;
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const FullImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
`;

const CloudGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const sample = [
      '/images/img1.jpg',
      '/images/img2.jpg',
      testImg1,
      testImg2,
      img_123,
      '/images/img3.jpg',
      '/images/img4.jpg',
      '/images/img5.jpg',
      '/images/img6.jpg',
      '/images/img7.jpg',
      '/images/img8.jpg',
      '/images/img9.jpg',
      '/images/img10.jpg',
      '/images/img11.jpg',
      '/images/img12.jpg',
      '/images/img13.jpg'
    ];

    let index = 0;
    const interval = setInterval(() => {
      setImages(prev => {
        if (index >= sample.length) {
          clearInterval(interval);
          return prev;
        }
        const updated = [...prev, sample[index]];
        index += 1;
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const fixedPositions = [
    { top: '180px', left: '320px' },
    { top: '350px', left: '580px' },
    { top: '70px', left: '400px' },
    { top: '160px', left: '200px' },
    { top: '200px', left: '440px' },
    { top: '310px', left: '340px' },
    { top: '30px', left: '40px' },
    { top: '330px', left: '460px' },
    { top: '50px', left: '280px' },
    { top: '290px', left: '220px' },
    { top: '220px', left: '560px' },
    { top: '40px', left: '160px' },
    { top: '270px', left: '100px' },
    { top: '90px', left: '520px' },
    { top: '150px', left: '80px' }
  ];
  

  const cloudFace = images.length < 5 ? sad : happyCloud2;

  return (
    <Wrapper>
      <CloudImage src={cloudFace} alt="cloud" />

      {images.slice(0, 10).map((url, i) => (
        <DiaryImage
          key={i}
          src={url}
          alt={`img-${i}`}
          style={{
            ...fixedPositions[i],
            animationDelay: `${i * 0.3}s`
          }}
          onClick={() => setSelectedImg(url)}
        />
      ))}

      <FullscreenOverlay visible={selectedImg} onClick={() => setSelectedImg(null)}>
        <FullImage src={selectedImg} />
      </FullscreenOverlay>
    </Wrapper>
  );
};

export default CloudGallery;

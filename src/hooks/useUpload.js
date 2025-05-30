import { uploadImage } from '../api/write';

const useUpload = () => {
  return async (blob) => {
    try {
      const url = await uploadImage(blob);
      return url;
    } catch (err) {
      console.error('이미지 업로드 실패:', err);
      return null;
    }
  };
};

export default useUpload;
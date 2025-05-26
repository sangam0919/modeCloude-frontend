export const parseMarkdownWithFallback = (content, imageUrls = []) => {
    if (!content) return '';
    const cleaned = content.replace(/\\/g, '');
    const regex = /!\[.*?\]\((.*?)\)/g;
    const match = regex.exec(cleaned);
  
    if (match && match[1]) {
      const imgTag = `<img src="${match[1]}" alt="이미지" style="max-width:100%; margin-top:20px;" />`;
      const parsed = cleaned.replace(regex, imgTag);
      return parsed.replace(/\n/g, '<br />');
    }
  
    if (imageUrls.length > 0) {
      const fallbackImage = `<img src="${imageUrls[0]}" alt="대표 이미지" style="max-width:100%; margin-top:20px;" />`;
      return cleaned.replace(/\n/g, '<br />') + fallbackImage;
    }
  
    return cleaned.replace(/\n/g, '<br />');
  };
  
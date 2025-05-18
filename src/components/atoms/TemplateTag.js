import styled from 'styled-components';

const Tag = styled.span`
  background: #f5f5f5;
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #eaeaea;
    color: #b881c2;
  }
`;
const TemplateTag = () => {
  return (
    <Tag/>
  )
}

export default TemplateTag


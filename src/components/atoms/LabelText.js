import styled from 'styled-components';

const LabelEmtion = styled.span`
  font-size: 0.9rem;
  color: #555;
`;
const LabelText = ({ children, ...rest }) => (
  <LabelEmtion {...rest}>{children}</LabelEmtion>
);

export default LabelText;
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.span`
  font-size: ${({ size }) => size || '1rem'};
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ weight }) => weight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
`;

const Text = ({ children, size, color, weight, margin }) => {
  return (
    <StyledText size={size} color={color} weight={weight} margin={margin}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  margin: PropTypes.string,
};

export default Text;

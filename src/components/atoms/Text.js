import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.span`
  width : ${({width}) =>  width || "initial"};
  display : ${({display}) =>  display || "initial"};
  font-size: ${({ size }) => size || '1rem'};
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ weight }) => weight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = ({ children, size, color, weight, margin, width, display }) => {
  return (
    <StyledText size={size} color={color} weight={weight} margin={margin} width={width} display={display}>
      {children}
    </StyledText>
  );
};


export default Text;
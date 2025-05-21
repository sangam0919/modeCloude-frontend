import styled from 'styled-components';

export default styled.span`
  font-size:1.6rem;opacity:${({unlocked})=>unlocked?1:0.3};
`;
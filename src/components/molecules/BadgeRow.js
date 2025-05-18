import Badge from '../atoms/Badge';
import styled from 'styled-components';
const Row=styled.div`display:flex;justify-content:center;gap:10px;margin-bottom:20px;`;
export default ({streak})=>(
  <Row>
    <Badge unlocked={streak>=3}>🥉</Badge>
    <Badge unlocked={streak>=7}>🥈</Badge>
    <Badge unlocked={streak>=30}>🥇</Badge>
    <Badge unlocked={streak>=100}>💎</Badge>
  </Row>
);
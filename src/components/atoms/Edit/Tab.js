import styled from 'styled-components'
const TabWrap = styled.div`
    padding: 15px 25px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;
`

const Tab = ({children, onClick}) => {
  return (
    <TabWrap onClick={onClick}>{children}</TabWrap>
  )
}

export default Tab
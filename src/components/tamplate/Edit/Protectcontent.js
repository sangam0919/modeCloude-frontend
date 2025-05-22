import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text';
import Toggle from '../../atoms/Edit/Toggle';
import Radio from '../../atoms/Edit/Radio';
import Profilesetup from '../../atoms/Edit/Profilesetup';

const Protectcontentwarp = styled.div`
  .protect-head{
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .disclose-warp{
    border-bottom: 1px solid #eee;
    
  }
  .diary-disclose {
    margin-bottom : 10px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  
`;

const Col = styled.div`
  flex: 1;
  &:not(:last-child) {
    margin-right: 30px;
  }
  .text-warp{
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const Protectcontent = () => {
  return (
    <Profilesetup className="protect-wrap">
      <Protectcontentwarp>
        <div className='protect-head'>
          <Text size="1.3rem" weight="bold" color="#444">
            개인정보 보호
          </Text>
        </div>
        <div className='disclose-warp'>
          <div className='diary-disclose'>
            <Text weight="600" color="#555" style={{ marginBottom: '10px' }}>기본 일기 공개 설정</Text>
          </div>
          <div className='diary-disclose'>
            <Radio name="diary-open" options={["비공개", "공개"]} defaultValue="비공개" />
          </div>
          <div className=''>
            <Text size="0.85rem" color="#999" style={{ marginTop: '8px' }}>
              새 일기 작성 시 기본적으로 적용될 공개 설정입니다.
            </Text>
          </div>
        </div>

        <Row>
          <Col>
            <div className='text-warp'>
              <Text weight="600" color="#555">프로필 공개</Text>
              <Text size="0.85rem" color="#999">프로필 정보를 모든 사용자에게 공개합니다.</Text>
            </div>
          </Col>
          <Toggle defaultChecked />
        </Row>

        <Row>
          <Col>
            <div className='text-warp'>
              <Text weight="600" color="#555">팔로워 승인</Text>
              <Text size="0.85rem" color="#999">새 팔로워를 수동으로 승인해야만 팔로우됩니다.</Text>
            </div>
          </Col>
          <Toggle />
        </Row>

        <Row>
          <Col>
            <div className='text-warp'>
              <Text weight="600" color="#555">활동 상태 표시</Text>
              <Text size="0.85rem" color="#999">다른 사용자에게 나의 활동 상태(온라인/오프라인)를 표시합니다.</Text>
            </div>
          </Col>
          <Toggle defaultChecked />
        </Row>

        <Row>
          <Col>
            <div className='text-warp'>
              <Text weight="600" color="#555">검색 노출</Text>
              <Text size="0.85rem" color="#999">다른 사용자가 나를 검색할 수 있습니다.</Text>
            </div>
          </Col>
          <Toggle defaultChecked />
        </Row>
      </Protectcontentwarp>
    </Profilesetup>
  );
};

export default Protectcontent;

import React, { useEffect } from 'react'
import styled from 'styled-components'
import Text from '../../atoms/Text'
import Profile from '../../atoms/Profile'
import Formgroup from '../../molecules/Edit/Formgroup'
import Button from '../../atoms/Button'
import useInput from '../../../hooks/useInput'


const SettingscontentWrap = styled.div`
    border-radius: 0 15px 15px 0;
    padding: 30px;
    background-color: white;
    flex: 1;
    .settings-section-title{
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    }
    .form-label {
        margin-bottom: 8px;
    }
    .proflie-img{
        margin-bottom: 10px;
        cursor: pointer;
    }
    .profile-text{
        margin-top: 5px;
        margin-bottom: 20px;
    }
    .button-form{
        margin-top: 30px;
        display: flex;
        gap: 15px;
        justify-content: flex-end;
    }

`

const Settingscontent = () => {
    const [name, setname] = useInput("다경")
    const [nickname, setnickname] = useInput("ming")
    const [bio, setbio] = useInput("안녕하세요! 저는 매일 감정을 기록하며 더 나은 하루를 만들어가고 있어요.")
    const [eamil, setemail] = useInput("eekrud3805@gmail.com")

    return (
        <SettingscontentWrap>
            <div className='settings-section-title'>
                <Text size={"1.3rem"} color={"#444"} weight={"bold"}>프로필 정보</Text>
            </div>
            <div className='form-label'>
                <Text weight={"500"} color={"#555"}>프로필 이미지</Text>
            </div>
            <div className='proflie-img'>
                <Profile isTag={true} />
            </div>
            <div className='profile-text'>
                <Text size={"0.85rem"} color={"#999"}>프로필 이미지는 JPG, PNG, GIF 형식으로 최대 2MB까지 업로드 가능합니다.</Text>
            </div>
            <Formgroup name={"이름"} value={name} onChange={setname} explanation={"다른 사용자에게 표시되는 이름입니다."} />
            <Formgroup name={"사용자 이름"} value={nickname} onChange={setnickname} explanation={"영문, 숫자, 밑줄(_)만 사용 가능합니다."} />
            <Formgroup isTextarea={true} name={"자기소개"} value={bio} onChange={setbio} explanation={"최대 150자까지 입력 가능합니다."} />
            <div className='button-form'>
                <Button background={"#f0f0f0"} color={"#666"} radius={"8px"} border={"none"}>취소</Button>
                <Button background={"#b881c2"} color={"white"} radius={"8px"} border={"none"}>저장하기</Button>
            </div>
        </SettingscontentWrap>
    )
}

export default Settingscontent
import React from 'react'
import Header from '../tamplate/Header'
import ProfileHeader from '../tamplate/Mypage/ProfileHeader'
import styled from 'styled-components'
const MypageWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
const Mypage = () => {
    return (<>
        <MypageWrap>
            <Header />
            <ProfileHeader />

        </MypageWrap>
    </>
    )
}

export default Mypage
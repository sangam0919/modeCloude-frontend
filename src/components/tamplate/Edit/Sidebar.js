import React from 'react'
import styled from 'styled-components'
import Profiles from '../../molecules/Edit/Profiles'
import Tab from '../../atoms/Edit/Tab'

const SidebarWrap = styled.div`
    width: 250px;
    background-color: #f9f9f9;
    padding: 25px 0;
    border-radius: 15px 0 0 15px;
    .sidebar-icon{
        width: 20px;
        text-align: center;
    }
`

const Sidebar = () => {

    return (
        <SidebarWrap>
            <Profiles />
            <div>
                <Tab>
                    <span className='sidebar-icon'>👤</span>
                    프로필 정보
                </Tab>
                <Tab>
                    <span className='sidebar-icon'>🛡️</span>
                    개인정보 보호
                </Tab>
                <Tab>
                    <span className='sidebar-icon'>⚙️</span>
                    계정 관리
                </Tab>
            </div>
        </SidebarWrap>
    )
}


export default Sidebar
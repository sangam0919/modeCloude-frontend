import React from 'react'
import Header from '../tamplate/Header'
import styled from 'styled-components'
import EditHeader from '../tamplate/Edit/EditHeader'
import Sidebar from '../tamplate/Edit/Sidebar'
import Settingscontent from '../tamplate/Edit/Settingscontent'



const EditWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  .settings-layout{
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    display: flex
;
  }
`
const Edit = () => {
  return (
    <EditWrap>
      <Header />
      <EditHeader />
      <div className='settings-layout'>
        <Sidebar />
        <Settingscontent />
      </div>
    </EditWrap>
  )
}

export default Edit
import React, { useState } from 'react'
import Header from '../tamplate/Header'
import styled from 'styled-components'
import EditHeader from '../tamplate/Edit/EditHeader'
import Sidebar from '../tamplate/Edit/Sidebar'
import Profilecontent from '../tamplate/Edit/Profilecontent'
import Protectcontent from '../tamplate/Edit/Protectcontent'
import Friendcontent from '../tamplate/Edit/Friendcontent'
import Accountcontent from '../tamplate/Edit/Accountcontent'



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
    display: flex;
  }

`
const Edit = () => {
  const [selectTab, setSelectTab] = useState("profile")
  return (
    <EditWrap className={selectTab}>
      <Header />
      <EditHeader />
      <div className='settings-layout'>
        <Sidebar selectTab={selectTab} onClick={setSelectTab} />
        {selectTab === 'profile' && <Profilecontent />}
        {selectTab === 'protect' && <Protectcontent />}
        {selectTab === 'friend' && <Friendcontent />}
        {selectTab === 'account' && <Accountcontent />}
      </div>
    </EditWrap>
  )
}

export default Edit
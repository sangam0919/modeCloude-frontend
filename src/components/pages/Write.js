import React from 'react'
import styled from 'styled-components'
import LayoutTwoCols from '../templates/LayoutTwoCols'
import Sidebar from '../templates/Edit/Sidbar'
import Header from '../templates/Header'
import WriteHeader from '../templates/Edit/WriteHeader'
import DiaryEditor from '../templates/write/DiaryEditor'

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    margin-bottom: 50px;
`

const Write = () => {

    const leftColumn = (
        <>
        <DiaryEditor />
        </>
    )
  return (
    <Wrap>
      <Header />
      <WriteHeader />
      <LayoutTwoCols left={leftColumn}  right={<Sidebar />} />
    </Wrap>
  )
}

export default Write

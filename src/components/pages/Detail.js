import React from 'react'
import Header from '../templates/Header'
import styled from 'styled-components'
import LayoutTwoCols from '../templates/LayoutTwoCols'
import Sidebar from '../templates/detail/Sidbar'
import DiaryNav from '../templates/detail/DiaryNav'
import BoardDetail from '../templates/detail/BoardDetail'
import CommentSection from '../templates/detail/CommentSection'
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    margin-bottom: 50px;
`

const Detail = () => {
    const leftColumn = (
        <>
        <BoardDetail />
        <CommentSection />
        </>
    )
  return (
    <Container>
        <Header />
        <DiaryNav />
        <LayoutTwoCols left={leftColumn}  right={<Sidebar />} />
    </Container>
    )
}

export default Detail

import React from 'react'
import Header from '../templates/Header'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`

const Detail = () => {
  return (
    <Container>
        <Header />
    </Container>
    )
}

export default Detail

import React from 'react'
import styled from 'styled-components'
import Profile from '../../atoms/Profile'
import Text from '../../atoms/Text'

const ProfliesWrap = styled.div`
    padding: 0 20px 20px;
    text-align: center;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    .edit-img-wrap{
        display: flex;
        justify-content: center;
        margin: 0 auto 15px;
    }
    .proflie-name{
        margin-bottom: 5px;
    }
`

const Profiles = () => {
    return (
        <ProfliesWrap>
            <div className='edit-img-wrap'>
                <Profile isTag={true}/>
            </div>
            <div className='proflie-name'>
                <Text size={"1.1rem"} weight={"600"} color={"#444"}>다경</Text>
            </div>
            <div>
                <Text size={"0.9rem"} color={"#777"}>@ming</Text>
            </div>
        </ProfliesWrap>
    )
}

export default Profiles
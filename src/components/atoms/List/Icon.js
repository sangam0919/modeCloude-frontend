import React from 'react'
import styled from 'styled-components'
const Iconwarp = styled.div`
    width: 20px;
    height: 20px;
    margin-top : -5px;
`

const Icon = ({ type = "public" }) => {
    if (type === "private")
        return (

            <Iconwarp>🔒</Iconwarp>
        )
    if (type === "public")
        return (
            <Iconwarp>🌎</Iconwarp>
        )
}

export default Icon
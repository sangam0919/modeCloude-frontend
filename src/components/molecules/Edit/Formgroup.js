import React from 'react'
import styled from 'styled-components'
import Text from '../../atoms/Text'

const FormgroupWrap = styled.div`
    margin-bottom: 20px;
    .form-label{
        margin-bottom: 8px;
    }
    .form-input{
        width: 100%;
        padding: 12px 15px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        transition: all 0.3s;
        box-sizing: border-box;
    }
    .form-hint{
        margin-top: 5px;
    }
    .form-textarea{
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.95rem;
    resize: vertical;
    min-height: 100px;
    transition: all 0.3s;
    resize: none;
    box-sizing: border-box;
    }
`

const Formgroup = ({ name, value, explanation,onChange, isTextarea = false }) => {
    return (
        <FormgroupWrap>
            <div className='form-label'>
                <Text weight={"500"} color={"#555"}>{name}</Text>
            </div>
            {isTextarea ? <textarea onChange={onChange} className='form-textarea' value={value} /> : <input onChange={onChange} type='text' className='form-input' value={value} />}
            <div className='form-hint'>
                <Text size={"0.85rem"} color={"#999"}>{explanation}</Text>
            </div>
        </FormgroupWrap>
    )
}

export default Formgroup
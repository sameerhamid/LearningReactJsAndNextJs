
import React, { useRef } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: #BF4F74;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`

const RefStyledComponents = () => {
    const inputRef = useRef()
    const Form = () => {
        return <Input
            ref={inputRef}
            placeholder='Hover to focus!'
            onMouseEnter={() => {
                inputRef.current.focus()
            }}
        />
    }
    return (
        <Form />
    )
}

export default RefStyledComponents
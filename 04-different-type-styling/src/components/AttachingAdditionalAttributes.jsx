import React from 'react'
import styled from 'styled-components'


const Input = styled.input.attrs(props => ({
    // we can define static prop
    type: 'text',
    // or we can define dynamic ones
    $size: props.$size || '1rem',
}))`
    color: #BF4F74;
    font-size: 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;

  /* here we use the dynamically computed prop */

    margin:${props => props.$size};
    padding:${props => props.$size};
`

function AttachingAdditionalAttributes() {
    return (
        <div>
            <Input placeholder="small text input" />
            <br />
            <Input $size="2rem" placeholder="small text input" />
        </div>
    )
}

export default AttachingAdditionalAttributes

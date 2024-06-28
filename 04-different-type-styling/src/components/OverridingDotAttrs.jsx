import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs((props) => ({
    type: 'text',
    $size: props.$size || '1rem',
}))`
    border: 2px solid #bf4f74;
	margin: ${(props) => props.$size};
	padding: ${(props) => props.$size};
`;

const PasswordInput = styled(Input).attrs({ type: 'password' })`
     // similarly, border will override Input's border
  border: 2px solid aqua;
`

function OverridingDotAttrs() {
    return (
        <div >
            <Input placeholder="A bigger text input" $size="2em" />
            <br />
            {/* Notice we can still use the size attr from Input */}
            <PasswordInput placeholder="A bigger password input" $size="2em" />
        </div >
    )
}

export default OverridingDotAttrs

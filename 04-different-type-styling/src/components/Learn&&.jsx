import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs(({ type: "checkbox" }))``

const Label = styled.label`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 8px;

`

const LabelText = styled.span`
  ${(props) => {
        switch (props.$mode) {
            case "dark":
                return `
          background-color: black;
          color: white;
          ${Input}:checked + && {
          color: blue;
          }   
        `;
            default:
                return `
          background-color: white;
          color: black;
          ${Input}:checked + && {
        color: red;
          }
        `;
        }
    }}
`;

function LearnDoubleAmpersand() {
    return (
        < >
            <Label>
                <Input defaultChecked />
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input />
                <LabelText $mode="dark">Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked />
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked />
                <LabelText $mode="dark">Foo</LabelText>
            </Label>
        </ >

    )
}

export default LearnDoubleAmpersand

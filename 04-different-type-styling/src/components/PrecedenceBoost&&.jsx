import React from 'react'
import { createGlobalStyle, styled } from 'styled-components'


const Thing = styled.div`
   && {
     color: blue;
   }
 `

const GlobalStyle = createGlobalStyle`
   div${Thing} {
     color: red;
   }
 `

function PrecedenceBoostAmpersand() {
    return (
        <div>
            <GlobalStyle />
            <Thing>Thing</Thing>
        </div>
    )
}

export default PrecedenceBoostAmpersand

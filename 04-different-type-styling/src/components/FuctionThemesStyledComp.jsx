import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Button = styled.button`
    color: ${props => props.theme.fg};
    border:2px solid ${props => props.theme.fg};
    background:${props => props.theme.bg};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`
// Define our `fg` and `bg` on the theme

const theme = {
    fg: '#BF4F74',
    bg: 'white'
}

// This theme swaps `fg` and `bg`
const invertedTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
})
function FuctionThemesStyledComp() {
    return (
        <ThemeProvider theme={theme}>
            <div >
                <Button>Defaul button</Button>

                <ThemeProvider theme={invertedTheme}>
                    <Button>inverted button</Button>
                </ThemeProvider>
            </div>

        </ThemeProvider>

    )
}

export default FuctionThemesStyledComp

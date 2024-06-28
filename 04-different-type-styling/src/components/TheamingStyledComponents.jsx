import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    /* Color the border and text with theme.main */

    color:${props => props.theme.main};
    border:2px solid ${props => props.theme.main}

`


// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider

Button.defaultProps = {
    theme: {
        main: 'teal'
    }
}

// Define what props.theme will look like

const theme = {
    main: 'red'
}

function TheamingStyledComponents() {
    return (
        <div>
            <Button>Normal</Button>
            <ThemeProvider theme={theme}>
                <Button>Styled with ThemeProvider</Button>
            </ThemeProvider>

        </div>
    )
}

export default TheamingStyledComponents

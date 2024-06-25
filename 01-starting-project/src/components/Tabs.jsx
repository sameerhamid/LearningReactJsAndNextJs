import React from 'react'

function Tabs({ buttons, children }) {
    return (
        <>
            <menu>

                {buttons}
            </menu>
            {children}
        </>
    )
}

export default Tabs

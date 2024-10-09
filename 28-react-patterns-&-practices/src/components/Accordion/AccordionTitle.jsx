import React from 'react'
import { useAccordionContext } from './Accordian'

function AccordionTitle({ id, children, className }) {

    const {
        toggleItem } = useAccordionContext()


    function handleClick() {
        toggleItem(id)
    }
    return (
        <h3 onClick={handleClick} className={className}>{children}</h3>
    )
}

export default AccordionTitle

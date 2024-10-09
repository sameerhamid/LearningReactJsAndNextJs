import React from 'react'
import { useAccordionContext } from './Accordian'
import { useAccordionItemContext } from './AccordionItem'

function AccordionTitle({ children, className }) {
    const id = useAccordionItemContext()
    const { toggleItem } = useAccordionContext()


    function handleClick() {
        toggleItem(id)
    }
    return (
        <h3 onClick={handleClick} className={className}>{children}</h3>
    )
}

export default AccordionTitle

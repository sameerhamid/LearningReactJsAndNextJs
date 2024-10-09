import React from 'react'
import { useAccordionContext } from './Accordian'
import { useAccordionItemContext } from './AccordionItem'

function AccordionContent({ children, className }) {
    const id = useAccordionItemContext()
    const { openItemId,
    } = useAccordionContext()
    const isOpen = openItemId === id
    return (
        <div className={isOpen ? `${className ?? ""} open` : `${className} close`}>{children}</div>
    )
}

export default AccordionContent

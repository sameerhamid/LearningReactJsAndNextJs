import React from 'react'
import { useAccordionContext } from './Accordian'

function AccordionItem({ id, title, children, className }) {
    const { openItemId,
        toggleItem } = useAccordionContext()
    const isOpen = openItemId === id

    function handleClick() {
        toggleItem(id)
    }
    return (
        <li className={className}>
            <h3 onClick={handleClick}>{title}</h3>
            <div className={isOpen ? 'accordion-item-content open' : "accordion-item-content"}>{children}</div>
        </li>
    )
}

export default AccordionItem

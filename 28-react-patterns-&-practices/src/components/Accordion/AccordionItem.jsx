import React from 'react'
import AccordionTitle from './AccordionTitle'


function AccordionItem({ children, className }) {

    return (
        <li className={className}>
            {children}
        </li>
    )
}

export default AccordionItem

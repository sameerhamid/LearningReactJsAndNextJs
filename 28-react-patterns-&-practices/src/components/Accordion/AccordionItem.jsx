import React, { createContext, useContext } from 'react'
const AccordionItemContext = createContext()

export const useAccordionItemContext = () => {
    const ctx = useContext(AccordionItemContext)
    if (!ctx) {
        throw new Error('Accordion-related components must be wrapped by <Accordion.item>.')
    }
    return ctx
}
function AccordionItem({ id, children, className }) {

    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
    )
}

export default AccordionItem

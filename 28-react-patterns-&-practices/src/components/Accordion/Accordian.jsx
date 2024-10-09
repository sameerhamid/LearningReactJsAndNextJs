import { createContext, useContext, useState } from 'react'
import AccordionItem from './AccordionItem'

const AccordionContext = createContext()

export function useAccordionContext() {
    const ctx = useContext(AccordionContext)
    if (!ctx) {
        throw new Error('Accordion-related compnents must wrapped by <Accordian>')
    }
    return ctx
}
function Accordian({ children, className }) {
    const [openItemId, setOpenItemId] = useState()


    function toggleItem(id) {
        setOpenItemId(pvevId => pvevId === id ? null : id)
    }
    const contextValue = {
        openItemId: openItemId,
        toggleItem,
    }
    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>

    )
}

export default Accordian


Accordian.Item = AccordionItem
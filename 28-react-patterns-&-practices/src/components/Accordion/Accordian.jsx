import { createContext, useContext, useState } from 'react'

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

    function openItem(id) {
        setOpenItemId(id)
    }

    function closeItem(id) {
        setOpenItemId(null)
    }
    const contextValue = {
        openItemId: openItemId,
        openItem: openItem,
        closeItem: closeItem,
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

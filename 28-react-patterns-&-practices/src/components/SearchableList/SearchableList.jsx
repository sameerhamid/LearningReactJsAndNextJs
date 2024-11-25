import React, { useRef, useState } from 'react'

function SearchableList({ items, itemKey, children }) {
    const [searchTerm, setSearchTerm] = useState('')
    const lastChange = useRef(null)
    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))
    const handleChange = (e) => {
        // debounsing
        if (lastChange.current) {
            clearTimeout(lastChange.current)
        }
        lastChange.current = setTimeout(() => {
            console.log('changed');
            lastChange.current = null
            setSearchTerm(e.target.value)
        }, 500)

    }
    return (
        <div className='searchable-list'>
            <input type="search" placeholder='Search' onChange={handleChange} />
            <ul>
                {searchResults.map((item) => {
                    return <li key={itemKey(item)}>{children(item)}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchableList

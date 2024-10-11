import React, { useState } from 'react'

function SearchableList({ items, itemKey, children }) {
    const [searchTerm, setSearchTerm] = useState('')
    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className='searchable-list'>
            <input type="search" placeholder='Search' onChange={handleChange} value={searchTerm} />
            <ul>
                {searchResults.map((item) => {
                    return <li key={itemKey(item)}>{children(item)}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchableList

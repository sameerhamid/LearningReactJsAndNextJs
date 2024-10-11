import React, { useState } from 'react'

function SearchableList({ items, children }) {
    const [searchTerm, setSearchTerm] = useState('')
    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className='searchable-list'>
            <input type="search" placeholder='Search' onChange={handleChange} value={searchTerm} />
            <ul>
                {searchResults.map((item, index) => {
                    return <li key={index}>{children(item)}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchableList

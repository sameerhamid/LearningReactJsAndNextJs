import React from 'react'

function SearchableList({ item }) {
    return (
        <div className='searchable-list'>
            <input type="search" placeholder='Search' />
            <ul>
                {item.map((item, index) => {
                    return <li key={index}>{item.toString()}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchableList

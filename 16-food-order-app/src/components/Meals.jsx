import React, { useEffect, useState } from 'react'

function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost:3000/meals')
            if (!response.ok) {
                // ...
            }
            const meals = await response.json()
            setLoadedMeals(meals)
        }
        fetchMeals()
    }, [])

    if (loadedMeals.length === 0) {
        return <p>Loading meals...</p>
    }
    return (
        <ul id='meals'>
            {loadedMeals.map(meal => {
                return (
                    <li key={meal.id}>
                        <span>{meal.name}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default Meals

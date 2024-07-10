import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'

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
                    <MealItem meal={meal} key={meal.id} />
                )
            })}
        </ul>
    )
}

export default Meals

import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import useHttp from '../hooks/useHttp'
import Error from './UI/Error'
const requestConfig = {}
function Meals() {
    const { data: loadedMeals, isLoading, error } = useHttp('meals', requestConfig, [])

    if (isLoading) {
        return <p className='center'>Fething meals...</p>
    }

    if (error) {
        return <Error title="Failed to fetch meals" message={error} />
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

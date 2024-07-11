import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import useHttp from '../hooks/useHttp'
const requestConfig = {}
function Meals() {
    const { data: loadedMeals, isLoading, error } = useHttp('meals', requestConfig, [])

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

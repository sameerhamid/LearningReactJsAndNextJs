import React from 'react'

function MealItem({ meal, onAddCartClick }) {
    return (
        <li className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price'>Price: ${meal.price}</p>
                    <p className='meal-item-description'>{meal.description}</p>

                    <p className='meal-item-actions'>
                        <button onClick={() => onAddCartClick(meal.id)}>Add to Cart</button>
                    </p>
                </div>
            </article>
        </li>
    )
}

export default MealItem

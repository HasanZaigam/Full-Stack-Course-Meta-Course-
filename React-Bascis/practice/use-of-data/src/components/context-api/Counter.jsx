import React from 'react'
import { useMealsListContext } from './MealProvider';
const Counter = () => {
    const { meals } = useMealsListContext();
    const count = Array.isArray(meals) ? meals.length : 0;
  return (
    <div>
        <h3> Number of Meals today : {count} </h3> 
    </div>
  )
}

export default Counter
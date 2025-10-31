import { useMealsListContext } from './MealProvider';
const MealLists = () => {
  // the provider returns an object: { meals }
  const { meals } = useMealsListContext();

  return (
  <div>
    <h1>Meals List using context API</h1>
    {(!meals || meals.length === 0) ? (
      <p>No meals available.</p>
    ) : (
      meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))
    )}
  </div>
  )
}

export default MealLists
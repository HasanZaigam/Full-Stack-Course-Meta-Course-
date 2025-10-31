import React, {createContext, useContext, useState} from 'react';

const MealsContext = createContext();
const todaysMeals = [ "Baked Potatos", "Pasta", "Salad" ];

const MealProvider = ({children}) => {
    const [meals] = useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () =>useContext(MealsContext);
export default MealProvider;
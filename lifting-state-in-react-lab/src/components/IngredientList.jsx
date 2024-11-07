/// src/components/IngredientList.jsx
import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          ingredient={ingredient}
          onClick={() => addToBurger(ingredient)}
          buttonLabel="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;



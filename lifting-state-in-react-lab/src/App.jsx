// src/App.jsx
import React, { useState } from 'react'; // Added React and useState import
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import './App.css';

const availableIngredients = [
  { id: 1, name: 'Kaiser Bun', color: 'saddlebrown' },
  { id: 2, name: 'Sesame Bun', color: 'sandybrown' },
  { id: 3, name: 'Gluten Free Bun', color: 'peru' },
  { id: 4, name: 'Lettuce Wrap', color: 'olivedrab' },
  { id: 5, name: 'Beef Patty', color: '#3F250B' },
  { id: 6, name: 'Soy Patty', color: '#3F250B' },
  { id: 7, name: 'Black Bean Patty', color: '#3F250B' },
  { id: 8, name: 'Chicken Patty', color: 'burlywood' },
  { id: 9, name: 'Lettuce', color: 'lawngreen' },
  { id: 10, name: 'Tomato', color: 'tomato' },
  { id: 11, name: 'Bacon', color: 'maroon' },
  { id: 12, name: 'Onion', color: 'lightyellow' },
  { id: 13, name: 'Cheddar Cheese', color: '#FDE18B' },
  { id: 14, name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]); // Initialize stack state

  // Function to add an ingredient to the stack
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  // Function to remove an ingredient from the stack
  const removeFromBurger = (index) => {
    setStack(stack.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList 
          ingredients={availableIngredients} 
          addToBurger={addToBurger} // Pass addToBurger function as a prop
        /> 
        <BurgerStack 
          stack={stack} // Pass stack state as a prop
          removeFromBurger={removeFromBurger} // Pass removeFromBurger function as a prop
        />
      </section>
    </main>
  );
};

export default App;

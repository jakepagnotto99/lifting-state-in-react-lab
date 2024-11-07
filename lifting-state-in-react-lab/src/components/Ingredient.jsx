// src/components/Ingredient.jsx
import React from 'react';

const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
  return (
    <li
      style={{
        backgroundColor: ingredient.color,
        padding: '5px',
        margin: '5px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '4px',
      }}
    >
      {ingredient.name}
      <button onClick={onClick}>{buttonLabel}</button>
    </li>
  );
};

export default Ingredient;

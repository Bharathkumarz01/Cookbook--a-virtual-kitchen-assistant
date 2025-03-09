import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const handleSaveFavorite = () => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!existingFavorites.some(fav => fav.URL === recipe.URL)) {
      const updatedFavorites = [...existingFavorites, recipe];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      console.log(`Saved ${recipe.TranslatedRecipeName} to favorites`);
      alert(`Saved ${recipe.TranslatedRecipeName} to favorites`)
    } else {
      console.log(`${recipe.TranslatedRecipeName} is already in favorites`);
    }
  };

  return (
    <div className="card">
      <img src={recipe['image-url']} alt={recipe.TranslatedRecipeName} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{recipe.TranslatedRecipeName}</h3>
        <p className="card-text">{recipe.Cuisine}</p>
        <div className="card-actions">
          <Link to={`/recipe/${recipe.URL.split('/').pop()}`} className="btn">View Recipe</Link>
          <button onClick={handleSaveFavorite} className="btn btn-save">
            Save to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
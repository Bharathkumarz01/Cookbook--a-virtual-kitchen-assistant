import React, { useEffect, useState } from 'react';
import RecipeCard from '../../components/RecipeCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (recipeURL) => {
    const updatedFavorites = favorites.filter(fav => fav.URL !== recipeURL);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-page">
      <h1>Your Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p>No favorites saved yet!</p>
      ) : (
        <div className="recipe-grid">
          {favorites.map((recipe) => (
            <div key={recipe.URL} className="favorite-item">
              <RecipeCard recipe={recipe} />
              <button 
                onClick={() => removeFavorite(recipe.URL)}
                className="btn btn-remove"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
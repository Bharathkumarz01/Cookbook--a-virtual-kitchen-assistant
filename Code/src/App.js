import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './features/recipes/Home';
import Category from './features/recipes/Category';
import RecipeDetails from './features/recipes/RecipeDetails';
import SearchResults from './features/recipes/SearchResults';
import Favorites from './features/recipes/Favorites';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class RecipesIndex extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
      const url = "http://localhost:3001/recipes/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ recipes: response }))
        .catch(() => this.props.history.push("/"));
  }

  render() {
    const { recipes } = this.state;
    const allRecipes = recipes.map((recipe, index) => (
      <div key={index}>
        <div className="recipe-show-container">
          <a href={`/recipe/${recipe.id}`}><img className="recipesImage"
            src={recipe.image}
            alt={`${recipe.dish} image`}
          /></a>
        <div>
            <h1>{recipe.dish}</h1>
          </div>
        </div>
      </div>
    ));
    const noRecipe = (
      <div>
        <h4>
          No recipes yet. Why not <Link to="/new_recipe">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section>
          <div>
            <h1 className='API-title'>Recipes for every occasion</h1>
          </div>
        </section>
        <div>
          <main>
            <div>
              <Link to="/recipe" className='create-link'>
                Create New Recipe
              </Link>
            </div>
            <div>
              <Link to="/webrecipes"
                className='create-link a' >
                Inspiration
              </Link>
            </div>
            <div>
              <Link to="/"
                className='create-link b' >
                Home
              </Link>
            </div>
            <div>
              {recipes.length > 0 ? allRecipes : noRecipe}
            </div>
          </main>
        </div>
      </>
    );
  }
}






export default RecipesIndex;

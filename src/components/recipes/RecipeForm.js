import React from "react";
import { Link } from "react-router-dom";

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: "",
      image: "",
      serves: "",
      time: "",
      ingredients: "",
      method: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }


    onChange(event) {
      this.setState({ [event.target.dish]: event.target.value });
    }

    onSubmit(event) {
      event.preventDefault();
      const url = "http://localhost:3001/recipes/create";
      const { dish, image, serves, time, ingredients, method } = this.state;

      if (dish.length == 0 || ingredients.length == 0 || method.length == 0)
        return;

      const body = {
        dish,
        ingredients,
        method: method.replace(/\n/g, "<br> <br>")
      };

      const token = document.querySelector('meta[name="csrf-token"]').content;
      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.props.history.push(`/recipe/${response.id}`))
        .catch(error => console.log(error.message));
    }

    render() {
      return (
        <div>
          <div>
            <div>
              <h1>
                Add a new recipe to our awesome recipe collection.
              </h1>
              <form onSubmit={this.onSubmit}>
                <div>
                  <label htmlFor="recipeName">Recipe name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={this.onChange}
                  />
                </div>
                <div>
                  <label htmlFor="recipeIngredients">Ingredients</label>
                  <input
                    type="text"
                    name="ingredients"
                    required
                    onChange={this.onChange}
                  />
                  <small>
                    Separate each ingredient with a comma.
                  </small>
                </div>
                <label htmlFor="instruction">Method:</label>
                <textarea
                  name="instruction"
                  rows="5"
                  required
                  onChange={this.onChange}
                />
                <button type="submit">
                  Create Recipe
                </button>
                <Link to="/recipesindex">
                  Back to recipes
                </Link>
              </form>
            </div>
          </div>
        </div>
      );
    }
}

export default RecipeForm;

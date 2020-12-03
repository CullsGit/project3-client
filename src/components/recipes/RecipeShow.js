import React from "react";
import { Link } from "react-router-dom";

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipe: { ingredients: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `http://localhost:3001/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ recipe: response }))
      .catch(() => this.props.history.push("/recipesindex"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
     const { recipe } = this.state;
     let ingredientList = "No ingredients available";

     if (recipe.ingredients.length > 0) {
       ingredientList = recipe.ingredients
         .map((ingredient, index) => (
           <li key={index} className="list-group-item">
             {ingredient}
           </li>
         ));
     }
     const recipeInstruction = this.addHtmlEntities(recipe.method);

     return (
       <div className="api-recipe-column">
         <img className='recipe-image'
           src={recipe.image}
           alt={`${recipe.dish} image`}
         />
         <div>

           <div/>
           <h1>
             {recipe.dish}
           </h1>
         </div>
         <div>
           <div>
             <div>
               <ul className="list-group">
                 <h5 className='recipe-sub-headers'>Ingredients</h5>
                 {ingredientList}
               </ul>
             </div>
             <div>
               <h5 className='recipe-sub-headers'>Method</h5>
               <div
                 dangerouslySetInnerHTML={{
                   __html: `${recipeInstruction}`
                 }}
               />
             </div>
           </div>
           <Link to="/recipesindex">
             <button className='show-title'>
             Back to recipes
             </button>
           </Link>
         </div>
       </div>
     );
   }

}

export default RecipeShow;

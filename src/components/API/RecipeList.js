import React from 'react';


const RecipeList = ({title, image, serves, time, ingredients, link}) => {
  return(
    <div>
      <h1> {title} </h1>  
      <a href={link}><img src={image} alt="" /></a>
      <p>Serves: {serves} people </p>
      <p>Total time: {time} minutes</p>
      <ul>
        {ingredients.map(i => (
          <li>{i.text}</li>
        ))}
      </ul>

    </div>
  )
}


export default RecipeList;

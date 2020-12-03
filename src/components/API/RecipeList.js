import React from 'react';


const RecipeList = ({title, image, serves, time, ingredients, link}) => {
  return(
    <div className='api-recipe-row'>
      <div className='api-recipe-column'>
        <h1> {title} </h1>
        <a href={link}><img src={image} alt="" /></a>
        <p>Serves: {serves} people </p>
        <p>Total time: {time} minutes</p>
        <ul className='list-group'>
          {ingredients.map(i => (
            <li>{i.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default RecipeList;

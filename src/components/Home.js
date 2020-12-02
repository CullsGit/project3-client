import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import WebRecipes from './API/WebRecipes';
import RecipesShow from './recipes/RecipeShow';
import RecipesIndex from './recipes/RecipesIndex';

const Home = (props) => {

  const handleClick = () => {
      axios.delete('http://localhost:3001/logout', {withCredentials: true})
      .then(response => {
        props.handleLogout()
        props.history.push('/')
      })
      .catch(error => console.log(error))
    }



  return (
    <div>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      {
        props.loggedInStatus ?
        <Link to='/logout' onClick={handleClick}>Log Out</Link> :
        null
      }
      {
        props.loggedInStatus ?
        <Link to='/webrecipes'>Inspiration</Link> :
        null
      }
      {
        props.loggedInStatus ?
        <Link to='/recipesindex'>Recipe list</Link> :
        null
      }

    </div>
  );
};

export default Home;

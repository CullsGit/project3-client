import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import WebRecipes from './API/WebRecipes';
import RecipesShow from './recipes/RecipeShow';
import RecipesIndex from './recipes/RecipesIndex';
import './styling.css';

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
    <div className='centered'>
      <h1 className='login-page'>Welcome to myCookBook</h1>
      <Link to='/login' className='rego-link'>Log In</Link>
      <br></br>
      <Link to='/signup' className='rego-link'>Sign Up</Link>
      <br></br>




    </div>
    {
      props.loggedInStatus ?
      <Link to='/logout' className='create-link b' onClick={handleClick}>Log Out</Link> :
      null
    }
    {
      props.loggedInStatus ?
      <Link to='/recipesindex' className='create-link a'>Recipe list</Link> :
      null
    }
    {
      props.loggedInStatus ?
      <Link to='/webrecipes' className='create-link'>Inspiration</Link> :
      null
    }
  </div>
  );
};

export default Home;

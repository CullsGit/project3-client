import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class RecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dish: "",
      image: "",
      serves: "",
      time: "",
      ingredients: "",
      method: ""
    };

    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3001/recipes/create', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }






    render() {
      const {dish, image, serves, time, ingredients, method} = this.state
      return (
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                type="text"
                name="dish"
                placeholder="Vegetable Lasagna"
                value={dish}
                onChange={this.changeHandler}>
              </input>
            </div>
            <div>
              <input
                type="text"
                name="image"
                placeholder="http://"
                value={image}
                onChange={this.changeHandler}>
              </input>
            </div>
            <div>
              <input
                type="number"
                name="serves"
                placeholder="4"
                value={serves}
                onChange={this.changeHandler}>
              </input>
            </div>
            <div>
              <input
                type="number"
                name="time"
                placeholder="60"
                value={time}
                onChange={this.changeHandler}>
              </input>
            </div>
            <div>
              <input
                type="textarea"
                name="ingredients"
                placeholder="Eggs, Olive oil..."
                value={ingredients}
                onChange={this.changeHandler}>
              </input>
            </div>
            <div>
              <input
                type="text"
                name="method"
                placeholder="Step 1, Chop onions..."
                value={method}
                onChange={this.changeHandler}>
              </input>
            </div>
              <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
}

export default RecipeForm;

import React, { Component } from "react";
import jsonPrefix from "../data/jsonPrefix";
import { NavLink } from "react-router-dom";
import "isomorphic-fetch";

const styles = theme => ({});

class CategoryLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };
  }
  componentDidMount() {
    let categoryURL = jsonPrefix + "categories/" + this.props.id;
    fetch(categoryURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          category: response
        });
      });
  }

  render() {
    if (this.state.category) {
      return (
        <NavLink to={"/news/" + this.state.category.slug}>
          {this.state.category.name}
        </NavLink>
      );
    } else {
      return null;
    }
  }
}

export default CategoryLink;

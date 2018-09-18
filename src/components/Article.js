import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArticleCard from "../components/ArticleCard.js";
import jsonPrefix from "../data/jsonPrefix";
import "isomorphic-fetch";

const styles = theme => ({});

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }
  componentDidMount() {
    let postURL = jsonPrefix + "posts/" + this.props.id + "?_embed";
    fetch(postURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          post: response
        });
      });
  }

  render() {
    if (this.state.post) {
      return (
        <Grid item xs={12}>
          {this.state.post._embedded["wp:featuredmedia"] ? (
            <ArticleCard
              title={this.state.post.title.rendered}
              alt={this.state.post._embedded["wp:featuredmedia"]["0"].alt_text}
              content={this.state.post.content.rendered}
              pic={
                this.state.post._embedded["wp:featuredmedia"]["0"].source_url
              }
            />
          ) : (
            <ArticleCard
              title={this.state.post.title.rendered}
              content={this.state.post.content.rendered}
            />
          )}
        </Grid>
      );
    } else {
      return null;
    }
  }
}

export default withStyles(styles)(Article);

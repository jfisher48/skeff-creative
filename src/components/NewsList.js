import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/NewsCard.js";
import jsonPrefix from "../data/jsonPrefix";
import "isomorphic-fetch";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    let postsURL = jsonPrefix + "posts?_embed";
    fetch(postsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          posts: response
        });
      });
  }

  render() {
    let posts = this.state.posts.map((post, index) => {
      return (
        <Grid item xs={12} key={index}>
          {post._embedded["wp:featuredmedia"] ? (
            <NewsCard
              title={post.title.rendered}
              alt={post._embedded["wp:featuredmedia"]["0"].alt_text}
              excerpt={post.excerpt.rendered}
              pic={post._embedded["wp:featuredmedia"]["0"].source_url}
              link={"/news/" + post.slug}
              date={post.date}
              author={post._embedded["author"]["0"].name}
              category={post.categories}
            />
          ) : (
            <NewsCard
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
              link={"/news/" + post.slug}
              author={post._embedded["author"]["0"].name}
              category={post.categories}
            />
          )}
        </Grid>
      );
    });
    return (
      <Grid container spacing={16}>
        {posts}
      </Grid>
    );
  }
}

export default NewsList;

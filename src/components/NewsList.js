import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/NewsCard.js";
import "isomorphic-fetch";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    let postsURL = "https://admin.skeffcreative.com/wp-json/wp/v2/posts?_embed";
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
        <Grid item xs={12}>
          {post._embedded["wp:featuredmedia"] ? (
            <NewsCard
              key={index}
              title={post.title.rendered}
              alt={post._embedded["wp:featuredmedia"]["0"].alt_text}
              excerpt={post.excerpt.rendered}
              pic={post._embedded["wp:featuredmedia"]["0"].source_url}
              link={"/news/" + post.id}
            />
          ) : (
            <NewsCard
              key={index}
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
              link={"/news/" + post.id}
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

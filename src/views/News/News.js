import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import NewsList from "../../components/NewsList.js";
import CategoryList from "../../components/CategoryList.js";
import TagList from "../../components/TagList.js";
import CategoryWidget from "../../components/CategoryWidget";
import TagWidget from "../../components/TagWidget";
//import ListWidget from "../../components/ListWidget";
//import archiveData from "../../data/archiveData";
import { Switch, Route } from "react-router-dom";
import Article from "../../components/Article";
import jsonPrefix from "../../data/jsonPrefix";
import "isomorphic-fetch";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./styleNews";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      categories: [],
      tags: []
    };
  }
  componentDidMount() {
    let postsURL = jsonPrefix + "posts?_embed";
    let categoriesURL =
      jsonPrefix + "categories?per_page=100&filter[orderby]=name&order=asc";
    let tagsURL = jsonPrefix + "tags?per_page=100&orderby=count&order=desc";
    fetch(postsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          posts: response
        });
      });
    fetch(categoriesURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          categories: response
        });
      });
    fetch(tagsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          tags: response
        });
      });
  }

  render() {
    const classes = this.props.classes;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        <Helmet>
          <title>News and Announcements | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#4caf50"
          view="0 0 34 34"
          svgPath="M17.56,10.57,28.42,5.85V3.4Z M17.56,9.51l8-5.37V1.83Z M2.53,26.11l13.87,6,.05.05V11.5l-13.92-6Z M16.45,10.57,5.58,5.85V3.4Z M16.45,9.51l-8-5.37V1.83Z M31.47,5.48l-13.91,6V32.17l13.91-6ZM29.72,24.21l-10,4.49V27.36l10-4.44Zm0-3.6-10,4.48V23.75l10-4.44Zm0-3.61-10,4.49V20.15l10-4.44Z"
          pageTitle="News and Announcements"
        />
        <Grid container spacing={16}>
          <Grid item xs={12} lg={7} xl={6}>
            <Switch>
              <Route exact path="/news" component={NewsList} />
              {this.state.posts.map((post, index) => {
                let postID = post.id;
                return (
                  <Route
                    key={index}
                    path={"/news/" + post.slug}
                    render={props => <Article id={postID} />}
                    exact
                  />
                );
              })}
              {this.state.categories.map((category, index) => {
                let categoryID = category.id;
                return (
                  <Route
                    key={index}
                    path={"/news/" + category.slug}
                    render={props => <CategoryList catID={categoryID} />}
                    exact
                  />
                );
              })}
              {this.state.tags.map((tag, index) => {
                let tagID = tag.id;
                return (
                  <Route
                    key={index}
                    path={"/news/" + tag.slug}
                    render={props => <TagList tagID={tagID} />}
                    exact
                  />
                );
              })}
            </Switch>
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6} lg={12} xl={6}>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <CategoryWidget className={classes.card} />
                  </Grid>
                  <Grid item xs={12}>
                    <TagWidget className={classes.card} />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <ListWidget
                      className={classes.card}
                      list={archiveData}
                      title="Archives"
                    />
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} lg={12} xl={6}>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    {/* <Card className={classes.card}>
                      <CardContent>
                        <Typography
                          className={classes.postTitle}
                          color="textSecondary"
                        >
                          Word of the Day
                        </Typography>
                        <Typography variant="headline" component="h2" />
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                        >
                          adjective
                        </Typography>
                        <Typography component="p">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

const styledComponent = withStyles(styles)(News);

export default connect(mapStateToProps)(styledComponent);

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import NewsList from "../../components/NewsList.js";
import CategoryList from "../../components/CategoryList.js";
import TagList from "../../components/TagList.js";
import CategoryWidget from "../../components/CategoryWidget";
import TagWidget from "../../components/news/TagWidget/TagWidget";
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
  componentDidMount(prevState) {
    if (this.state !== prevState) {
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
          color="#f6c02f"
          view="0 0 19.402 21.271"
          svgPath="M9.658,20.271a4.639,4.639,0,0,1-2.217-1.095,6.873,6.873,0,0,0-1.588-.942L7.2,16.887a.876.876,0,0,1,.648-.29,1.453,1.453,0,0,1,.5.1c.213.078.366.139.513.2.252.1.469.189.912.327a.5.5,0,0,0,.148.021,1.758,1.758,0,0,0,.5-.112l.036-.011A1.988,1.988,0,0,1,11.052,17a.813.813,0,0,1,.314.059c.468.191.719.4.768.648.059.293-.186.586-.433.834l-1.274,1.408A1.043,1.043,0,0,1,9.658,20.271ZM4.1,18.238h0a4.168,4.168,0,0,1-2.746-1.353C.036,15.568-.392,13.853.4,13.064l1.3-1.3A6.559,6.559,0,0,0,3.676,6.545c0-.106,0-.21,0-.311A8.64,8.64,0,0,0,4.762,8.477,6.624,6.624,0,0,1,3.73,11.389a3.724,3.724,0,0,0,1.143,1.994,3.835,3.835,0,0,0,1.964,1.136,6.729,6.729,0,0,1,2.922-1.042A8.892,8.892,0,0,0,11.9,14.531h-.221a6.538,6.538,0,0,0-5.206,2.013l-1.3,1.3A1.479,1.479,0,0,1,4.1,18.238Zm9.513-4.044c-1.562,0-3.88-1.347-6.049-3.516A14.338,14.338,0,0,1,4.445,6.345c-.555-1.339-.529-2.408.074-3.01a1.754,1.754,0,0,1,1.292-.473c1.562,0,3.879,1.348,6.049,3.517a14.354,14.354,0,0,1,3.118,4.333c.555,1.339.529,2.407-.073,3.009A1.755,1.755,0,0,1,13.612,14.194ZM6.25,4.589a1.13,1.13,0,0,0-.408.069C5.435,5.711,6.921,7.961,8.6,9.639c1.362,1.362,3.374,2.829,4.573,2.829a1.132,1.132,0,0,0,.408-.069c.407-1.053-1.08-3.3-2.76-4.981C9.46,6.055,7.449,4.589,6.25,4.589Zm4.092,5.634h0C9.908,9.855,9.5,9.481,9.13,9.11S8.4,8.347,8.016,7.9a1.373,1.373,0,0,1,.868-.315,1.7,1.7,0,0,1,1.2.572,1.469,1.469,0,0,1,.258,2.067Zm5.215-1.274A.507.507,0,0,1,15.3,8c.021-.012,2.069-1.189,2.081-1.194a.505.505,0,0,1,.679.228l.123.246a.508.508,0,0,1-.226.68L15.786,8.9l-.031.013A.51.51,0,0,1,15.557,8.949Zm-2.3-3.464a.507.507,0,0,1-.381-.843l.016-.018,1.58-1.773A.508.508,0,0,1,14.82,2.7h.013a.513.513,0,0,1,.36.149l.194.2a.506.506,0,0,1,0,.716L13.751,5.221l-.153.137A.507.507,0,0,1,13.262,5.485ZM9.8,3.189a.506.506,0,0,1-.466-.7c.009-.022.941-2.194.947-2.2a.506.506,0,0,1,.68-.227L11.2.177a.509.509,0,0,1,.228.68c0,.009-1.183,2.059-1.2,2.08A.508.508,0,0,1,9.8,3.189Z"
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

const styledNews = withStyles(styles)(News);

export default connect(mapStateToProps)(styledNews);

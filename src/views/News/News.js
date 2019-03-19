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
          color="#4caf50"
          view="0 0 46.333 35"
          svgPath="M4.25,34A4.255,4.255,0,0,1,0,29.75V8.5A1.417,1.417,0,0,1,1.417,7.083h4.25V1.417A1.417,1.417,0,0,1,7.083,0H43.916a1.417,1.417,0,0,1,1.417,1.417V28.333A5.673,5.673,0,0,1,39.667,34ZM8.5,29.75a4.226,4.226,0,0,1-.248,1.417H39.667A2.837,2.837,0,0,0,42.5,28.333V2.833H8.5Zm-5.666,0a1.417,1.417,0,0,0,2.833,0V9.916H2.833Zm10.625-2.834a1.417,1.417,0,0,1,0-2.833H37.542a1.417,1.417,0,1,1,0,2.833Zm0-5.666a1.417,1.417,0,0,1,0-2.833H37.542a1.417,1.417,0,0,1,0,2.833Zm14.874-5.666a1.417,1.417,0,1,1,0-2.833h9.209a1.417,1.417,0,0,1,0,2.833Zm-11.422,0a4.25,4.25,0,0,1,0-8.5h2.834a4.25,4.25,0,0,1,0,8.5ZM28.333,9.916a1.417,1.417,0,1,1,0-2.833h9.209a1.417,1.417,0,0,1,0,2.833Z"
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

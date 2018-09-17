import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../components/PageHeading.js";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NewsIco from "../icons/news_b.svg";
import NewsList from "../components/NewsList.js";
import CategoryWidget from "../components/CategoryWidget";
import TagWidget from "../components/TagWidget";
import ListWidget from "../components/ListWidget";
import catData from "../data/catData";
import { Switch, Route } from "react-router-dom";
import Article from "../components/Article";
import jsonPrefix from "../data/jsonPrefix";
import "isomorphic-fetch";

const styles = theme => ({});

class News extends Component {
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
    const classes = this.props.classes;

    return (
      <div>
        <Helmet>
          <title>News and Announcements | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={NewsIco}>News and Announcements</PageHeading>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={7} xl={6}>
            <Switch>
              <Route exact path="/news" component={NewsList} />
              {this.state.posts.map((post, index) => {
                let postID = post.id;
                return (
                  <Route
                    key={index}
                    path={"/news/" + postID}
                    render={props => <Article id={postID} />}
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
                  <Grid item xs={12}>
                    <ListWidget
                      className={classes.card}
                      list={catData}
                      title="Archives"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} lg={12} xl={6}>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <Card className={classes.card}>
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
                    </Card>
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

export default withStyles(styles)(News);

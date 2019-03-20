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
          view="0 0 27.615 24.37"
          svgPath="M5.193,23.37a1.5,1.5,0,0,1-1.223-.645,1.2,1.2,0,0,1-.375-.734L.032,5.826A1.424,1.424,0,0,1,.284,4.663a1.318,1.318,0,0,1,1.049-.495H2.2s.328-.007.328.267v.62c0,.272-.328.266-.328.266H1.332a.221.221,0,0,0-.179.069.239.239,0,0,0-.028.2s1.825,8,2.461,10.469c.009.028.13-.2.1-.707-.22-3.469,0-13.789,0-13.789A1.537,1.537,0,0,1,5.193,0H25.1a1.537,1.537,0,0,1,1.508,1.559V21.81A1.536,1.536,0,0,1,25.1,23.37ZM4.8,1.559V21.81a.4.4,0,0,0,.392.406H25.1a.4.4,0,0,0,.392-.406V1.559a.4.4,0,0,0-.392-.4H5.193A.4.4,0,0,0,4.8,1.559ZM16.523,19.387a.313.313,0,0,1-.306-.319v-.653a.311.311,0,0,1,.306-.316h6.812a.311.311,0,0,1,.306.316v.653a.314.314,0,0,1-.306.319Zm-9.616,0a.314.314,0,0,1-.308-.319v-.653a.312.312,0,0,1,.308-.316h6.811a.312.312,0,0,1,.308.316v.653a.314.314,0,0,1-.308.319Zm9.616-3.51a.313.313,0,0,1-.306-.318V14.9a.312.312,0,0,1,.306-.318h6.812a.313.313,0,0,1,.306.318v.654a.314.314,0,0,1-.306.318Zm-9.616,0a.314.314,0,0,1-.308-.318V14.9a.313.313,0,0,1,.308-.318h6.811a.313.313,0,0,1,.308.318v.654a.314.314,0,0,1-.308.318Zm9.616-3.51a.313.313,0,0,1-.306-.319V11.4a.313.313,0,0,1,.306-.319h6.812a.313.313,0,0,1,.306.319v.653a.314.314,0,0,1-.306.319Zm-9.616,0a.314.314,0,0,1-.308-.319V11.4a.314.314,0,0,1,.308-.319h6.811a.314.314,0,0,1,.308.319v.653a.314.314,0,0,1-.308.319Zm-.2-3.337a.281.281,0,0,1-.276-.283V3.277a.281.281,0,0,1,.276-.283H23.534a.28.28,0,0,1,.274.283V8.746a.28.28,0,0,1-.274.283ZM19.194,7.135c-.025.066-.08.275-.08.275a.286.286,0,0,0,.156.338,2.338,2.338,0,0,0,.744.165,1.116,1.116,0,0,0,1.278-1.1c0-.526-.277-.859-.924-1.117-.471-.187-.622-.334-.622-.6,0-.2.146-.441.558-.441a1.163,1.163,0,0,1,.458.084.225.225,0,0,0,.32-.141l.076-.231c.014-.036-.024-.066-.024-.066l-.021-.012a1.564,1.564,0,0,0-.8-.184,1.071,1.071,0,0,0-1.184,1.042c0,.5.3.841.953,1.079.491.2.588.376.588.62,0,.315-.242.513-.628.513a1.436,1.436,0,0,1-.743-.217l-.063-.039h-.008A.038.038,0,0,0,19.194,7.135ZM16.919,5.791c.02.095.056.247.079.34l.347,1.494a.315.315,0,0,0,.292.236h.122a.321.321,0,0,0,.294-.23l.874-3.185a.233.233,0,0,0-.031-.2.21.21,0,0,0-.173-.083h-.113a.314.314,0,0,0-.292.234l-.408,1.607c-.064.267-.124.533-.172.752-.018.057-.025.007-.031-.022-.057-.278-.113-.532-.115-.547-.022-.1-.056-.246-.078-.341L17.18,4.4a.311.311,0,0,0-.29-.235h-.122a.318.318,0,0,0-.294.234l-.41,1.606c-.059.23-.121.5-.167.7-.01.053-.031.111-.057.017-.068-.323-.115-.537-.117-.543-.019-.094-.053-.246-.076-.339L15.321,4.4a.311.311,0,0,0-.29-.236H14.9a.212.212,0,0,0-.173.083.23.23,0,0,0-.035.2l.78,3.181a.315.315,0,0,0,.292.234h.122a.32.32,0,0,0,.3-.231l.44-1.664c.072-.258.136-.541.179-.736C16.856,5.51,16.915,5.775,16.919,5.791Zm-4.49-1.363V7.6a.255.255,0,0,0,.251.259h1.579a.256.256,0,0,0,.253-.259V7.567a.257.257,0,0,0-.253-.26H13.12a.085.085,0,0,1-.084-.088V6.3a.084.084,0,0,1,.084-.087h.986a.257.257,0,0,0,.253-.261V5.922a.257.257,0,0,0-.253-.261H13.12a.085.085,0,0,1-.084-.088V4.809a.084.084,0,0,1,.084-.086h1.063a.258.258,0,0,0,.253-.262V4.428a.257.257,0,0,0-.253-.261h-1.5A.256.256,0,0,0,12.429,4.428Zm-2.73.81c.176.336.348.625.36.645.048.083.127.218.175.3l.9,1.491a.423.423,0,0,0,.33.187h.108a.255.255,0,0,0,.253-.259V4.428a.256.256,0,0,0-.253-.261H11.5a.256.256,0,0,0-.252.261v1.3c0,.365.017.755.031,1.012,0,.04-.019.022-.028,0-.156-.294-.321-.584-.33-.6-.048-.085-.128-.219-.178-.3L9.829,4.354a.42.42,0,0,0-.33-.187H9.356a.257.257,0,0,0-.252.261V7.6a.256.256,0,0,0,.252.259h.077A.255.255,0,0,0,9.686,7.6V6.27c0-.365-.01-.773-.019-1.03,0-.013.005-.024.013-.024S9.693,5.223,9.7,5.238Z"
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

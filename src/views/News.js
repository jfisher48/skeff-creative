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
import NewsCard from "../components/NewsCard.js";
import newsData from "../data/newsData";

const styles = theme => ({
  postCard: {
    marginBottom: "16px"
  },
  postContent: {
    paddingBottom: "22px",
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingTop: "40px"
  },
  postTitle: {
    fontSize: "2.25em",
    lineHeight: "1.25",
    color: "#2a2f43",
    "& a": {
      color: "#2a2f43",
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    }
  },
  postDesc: {
    color: "#7f828f",
    marginTop: "25px",
    fontSize: "1em",
    lineHeight: "24px"
  },
  postActions: {
    paddingBottom: "40px",
    paddingLeft: "40px",
    padddingRight: "40px"
  },
  postButton: {
    boxShadow: "none",
    fontSize: "0.75",
    margin: 0
  }
});

class News extends Component {
  state = {};
  render() {
    const classes = this.props.classes;
    const news = newsData.map((prop, key) => {
      return (
        <Grid item xs={12}>
          <NewsCard title={prop.title} content={prop.content} />
        </Grid>
      );
    });
    return (
      <div>
        <Helmet>
          <title>News and Announcements | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={NewsIco}>News and Announcements</PageHeading>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} container>
            {news}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.postTitle} color="textSecondary">
                  Word of the Day
                </Typography>
                <Typography variant="headline" component="h2" />
                <Typography className={classes.pos} color="textSecondary">
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
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.postTitle} color="textSecondary">
                  Word of the Day
                </Typography>
                <Typography variant="headline" component="h2" />
                <Typography className={classes.pos} color="textSecondary">
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
      </div>
    );
  }
}

export default withStyles(styles)(News);

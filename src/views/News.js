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
import WidgetCard from "../components/WidgetCard";
import {
  List,
  ListItem,
  ListItemIcon
} from "../../node_modules/@material-ui/core";
import PlayArrow from "@material-ui/icons/PlayArrow";
import newsData from "../data/newsData";
import catData from "../data/catData";

const styles = theme => ({
  // widgetContent: {
  //   padding: "30px"
  // },
  // widgetTitle: {
  //   fontSize: "1.5em",
  //   fontWeight: "500",
  //   marginBottom: "20px"
  // },
  widgetList: {
    padding: "0"
  },
  widgetItem: {
    padding: "0",
    marginBottom: "5px",
    color: "#2a2f43"
  },
  catName: {
    textDecoration: "none",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: ".95em",
    lineHeight: "1.5em",
    "&:visited": {
      color: "inherit"
    },
    "&:hover": {
      color: theme.palette.secondary.main
    }
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
    const categories = catData.map((prop, key) => {
      return (
        <ListItem className={classes.widgetItem}>
          <ListItemIcon>
            <PlayArrow style={{ fontSize: 13 }} />
          </ListItemIcon>
          <a className={classes.catName} href="#">
            {prop.category}
          </a>
        </ListItem>
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
            <WidgetCard className={classes.card} title="Categories">
              <List className={classes.widgetList}>{categories}</List>
            </WidgetCard>
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

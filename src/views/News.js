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
import ListWidget from "../components/ListWidget";
import newsData from "../data/newsData";
import catData from "../data/catData";

const styles = theme => ({});

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
          <Grid item xs={12} lg={8} xl={7}>
            <Grid container spacing={16}>
              {news}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} xl={5}>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6} lg={12} xl={6}>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <ListWidget
                      className={classes.card}
                      list={catData}
                      title="Categories"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ListWidget
                      className={classes.card}
                      list={catData}
                      title="Categories"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ListWidget
                      className={classes.card}
                      list={catData}
                      title="Categories"
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

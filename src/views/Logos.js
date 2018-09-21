import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../components/PageHeading.js";
import LogosIco from "../icons/brand_b.svg";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import LogoCard from "../components/LogoCard";
import bud_light from "../images/bud_light.png";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Switch, Route } from "react-router-dom";

const styles = theme => ({});

class Logos extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Logos | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={LogosIco}>Logos</PageHeading>
        <Grid container spacing={16}>
          <Grid item container spacing={16} xs={12} lg={8} xl={7}>
            <LogoCard link="/logos" title="Bud Light" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
            <LogoCard link="/logos" title="Brand Name" pic={bud_light} />
          </Grid>
          <Grid item xs={12} lg={4} xl={5}>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6} lg={12} xl={6}>
                <Grid container spacing={16}>
                  <Grid item xs={12} />
                  <Grid item xs={12} />
                  <Grid item xs={12} />
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

export default withStyles(styles)(Logos);

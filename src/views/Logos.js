import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../components/PageHeading.js";
import LogosIco from "../icons/brand_b.svg";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import LogoCard from "../components/LogoCard";
import jsonPrefix from "../data/jsonPrefix";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const styles = theme => ({});

class Logos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logos: []
    };
  }
  componentDidMount() {
    let logosURL =
      jsonPrefix +
      "logos?_embed&per_page=100&filter[orderby]=menu_order&order=asc";
    fetch(logosURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          logos: response
        });
      });
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    let logos = this.state.logos.map((logo, index) => {
      return (
        <LogoCard
          key={index}
          alt={logo.title.rendered}
          linkID={logo.acf.file_id}
          title={logo.title.rendered}
          pic={logo._embedded["wp:featuredmedia"]["0"].source_url}
        />
      );
    });
    return (
      <div>
        <Helmet>
          <title>Logos | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={LogosIco}>Logos</PageHeading>
        <Grid container spacing={16}>
          <Grid item container spacing={16} xs={12} sm={8} xl={7}>
            {logos}
          </Grid>
          <Grid item xs={12} sm={4} xl={5}>
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

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

const styledComponent = withStyles(styles)(Logos);

export default connect(mapStateToProps)(styledComponent);

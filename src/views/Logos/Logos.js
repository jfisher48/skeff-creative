import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import Grid from "@material-ui/core/Grid";
import LogoCard from "../../components/LogoCard";
import jsonPrefix from "../../data/jsonPrefix";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./styleLogos";

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
        <PageHeading
          color="#f5941f"
          view="0 0 32.859 25.642"
          svgPath="M29.442,24.642H2.417a1.22,1.22,0,0,1-1.2-1.107L0,7.841A1.014,1.014,0,0,1,1.028,6.733h29.8a1.015,1.015,0,0,1,1.025,1.108L30.638,23.535A1.22,1.22,0,0,1,29.442,24.642Zm-14.251-5.86-.007.012,0,.007a3.367,3.367,0,0,1-.891,1.4.094.094,0,0,0-.013.081c.051.11.107.228.169.341a15.849,15.849,0,0,0,1.5,2.23.113.113,0,0,0,.016.016l.006.006.026-.03.021-.024.226-.308c.219-.3.444-.6.657-.91a9.152,9.152,0,0,0,.752-1.291c.022-.047.038-.081-.011-.127a3.217,3.217,0,0,1-.817-1.208c-.017-.041-.032-.081-.048-.122l-.028-.073-.149.153c-.209.214-.417.428-.63.649l-.319-.326Zm2.939-1.953-.01.013a.058.058,0,0,0-.011.018,6.477,6.477,0,0,1-.923,1.392.316.316,0,0,0-.065.354,2.878,2.878,0,0,0,1.467,1.75.157.157,0,0,0,.067.021c.028,0,.05-.016.072-.05.035-.054.071-.106.106-.159a3.6,3.6,0,0,0,.22-.352,3.973,3.973,0,0,0,.4-2.166.1.1,0,0,0-.061-.068,3.317,3.317,0,0,1-1.084-.6Zm-4.317,0a.6.6,0,0,1-.064.055,3.189,3.189,0,0,1-1.169.687.128.128,0,0,0-.1.143,4.779,4.779,0,0,0,.065,1.087,3.439,3.439,0,0,0,.67,1.532.09.09,0,0,0,.073.048.136.136,0,0,0,.059-.018,2.882,2.882,0,0,0,1.511-1.9.134.134,0,0,0-.023-.1c-.062-.081-.125-.162-.189-.242-.079-.1-.16-.2-.238-.307a5.808,5.808,0,0,1-.594-.985Zm.983-1.434h0a4.9,4.9,0,0,1-.641,1.067.106.106,0,0,0-.01.094l.039.083a4.32,4.32,0,0,0,.2.387,8.253,8.253,0,0,0,.955,1.293c.147.169.3.331.456.5l.187.2L16,18.985a.532.532,0,0,1,.039-.052A12.84,12.84,0,0,0,17.1,17.71a5.374,5.374,0,0,0,.7-1.153.107.107,0,0,0-.015-.115c-.2-.3-.349-.526-.487-.745a1.992,1.992,0,0,1-.112-.222c-.015-.032-.029-.065-.045-.1l-.164.187c-.137.157-.266.305-.405.451s-.264.266-.406.4l-.215.209-.5-.536q-.328-.351-.653-.7Zm-2.851-.71h0a.1.1,0,0,0-.076.049l-.047.1c-.051.1-.1.213-.147.322a3.578,3.578,0,0,0-.22,2.093c.015.071.045.1.113.1a2.863,2.863,0,0,0,1.532-.469,3.7,3.7,0,0,0,1.323-1.645.337.337,0,0,0-.044-.41A3.781,3.781,0,0,1,14.1,14.4c-.033-.053-.067-.106-.1-.16a3.8,3.8,0,0,1-1.749.451c-.1,0-.2,0-.3-.013Zm5.989-.426-.01.014-.106.158c-.117.175-.238.355-.355.534a.123.123,0,0,0-.01.095,3.742,3.742,0,0,0,1.132,1.627,2.829,2.829,0,0,0,1.789.655h.006a.086.086,0,0,0,.1-.088c.008-.077.019-.155.029-.231a3.3,3.3,0,0,0,.042-.45,3.945,3.945,0,0,0-.463-1.809.116.116,0,0,0-.117-.08h-.026c-.095.009-.191.013-.287.013a3.415,3.415,0,0,1-1.1-.189c-.135-.047-.264-.1-.4-.157C18.087,14.316,18.011,14.285,17.933,14.254Zm-3.774-.569h0a15.115,15.115,0,0,0,1.818,2.372,15.181,15.181,0,0,0,1.879-2.327,3.6,3.6,0,0,0,1.628.544c.087.009.172.013.252.013a2.335,2.335,0,0,0,1.26-.4c.054-.032.065-.064.041-.116a6.131,6.131,0,0,0-4.729-2.977L16.37,9.22a.4.4,0,0,0-.8,0l.062,1.569a5.323,5.323,0,0,0-3.485,1.436,4.765,4.765,0,0,0-1.172,1.647.031.031,0,0,1-.032.021.113.113,0,0,1-.043-.011l0,0a2.4,2.4,0,0,0,1.1.391c.09.009.182.013.272.013a3.227,3.227,0,0,0,1.333-.3,4.462,4.462,0,0,0,.554-.3ZM2.879,6.317h-1.5V1.041A1.042,1.042,0,0,1,2.417,0h8.915a1.907,1.907,0,0,1,1.551.953l.385.76a2.056,2.056,0,0,0,1.674,1.029h14.5a1.042,1.042,0,0,1,1.041,1.041V6.315h-1.5V5.9A1.112,1.112,0,0,0,27.868,4.79H3.99A1.112,1.112,0,0,0,2.879,5.9v.416Z"
          pageTitle="Logos"
        />
        <Grid container spacing={16}>
          <Grid item container spacing={16} xs={12} sm={8}>
            {logos}
          </Grid>
          <Grid item xs={12} sm={4}>
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

const styledLogos = withStyles(styles)(Logos);

export default connect(mapStateToProps)(styledLogos);

import React, { Component } from "react";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ShelfStrips extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>Shelf Strips | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#457385"
          view="0 0 36.838 33.608"
          svgPath="M32.194,32.608H3a3,3,0,0,1-3-3V22.4a3,3,0,0,1,3-3h29.2a3,3,0,0,1,3,3v7.205A3,3,0,0,1,32.194,32.608ZM3,21.816a.589.589,0,0,0-.589.588v7.205A.589.589,0,0,0,3,30.2h9.265V21.816Zm32.411-2.559,0,0A4.464,4.464,0,0,0,32.194,17.9H8.67L30.66,12.5a3,3,0,0,1,3.627,2.194l1.12,4.559ZM7.465,16.645h0L27.524,6.158a3,3,0,0,1,4.047,1.269l2.174,4.162a.167.167,0,0,1-.02-.015.086.086,0,0,0-.017-.014,4.506,4.506,0,0,0-2.329-.653,4.561,4.561,0,0,0-1.078.13L7.466,16.644Zm-1.478-.927h0L22.964.749a3,3,0,0,1,4.234.265l3.1,3.521-.008,0-.006,0a.115.115,0,0,0-.028-.01,4.509,4.509,0,0,0-1.356-.21,4.434,4.434,0,0,0-2.078.515L5.989,15.717Z"
          pageTitle="Shelf Strips"
        />
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

export default connect(mapStateToProps)(ShelfStrips);

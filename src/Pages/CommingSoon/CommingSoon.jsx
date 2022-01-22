import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./CommingSoon.scss";
export const CommingSoon = () => {
  return (
    <div className="CommingSoonContainer">
      <Container className="ContainerCmsoon">
        <Grid container container>
          <Grid item md={6}></Grid>
          <Grid item sm={12} md={6}  className="CommingSoonBody">
            <h1>We’re built differently</h1>
            <p>
              Experience uncompromising performance with our bare-metal servers.
              Let’s discuss what we can build and make possible for you
            </p>
            <button>COMING SOON</button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};









import { Container, Grid } from '@material-ui/core';
import React from 'react';

export const P1S8 = () => {
  return   <Container maxWidth={"xl"} className="footerContainer">
  <Grid container>
    <Grid item sm={12} md={2}>
      <a href="">© 2022 Ultra.One</a>{" "}
    </Grid>
    <Grid item sm={12} md={8}>
      <Grid container justifyContent="center">
        <Grid item className="FooterA" sm={12} md={1}>
          <a href="">Products</a>
        </Grid>
        <Grid item className="FooterA" sm={12} md={1}>
          <a href="">About Us</a>
        </Grid>
        <Grid item className="FooterA" sm={12} md={1}>
          <a href="">Our Network</a>
        </Grid>
        <Grid item className="FooterA" sm={12} md={1}>
          <a href="">Contacts</a>
        </Grid>
      </Grid>
    </Grid>
    <Grid item sm={12} md={2}>
      <a href="">Privacy Policy</a>{" "}
    </Grid>
  </Grid>
</Container>;
};

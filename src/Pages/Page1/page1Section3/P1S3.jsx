import { Container, Grid } from '@material-ui/core';
import React from 'react';

export const P1S3 = () => {
  return       <Container className="OurNetworkContainer">
  <Grid container>
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <h1>Our Network</h1>
    </Grid>
    <Grid item xs={12} sm={12} md={12}>
      <Grid
        container
        spacing={3}
        className="ContainerCountry"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        {/* <Grid item className="CardCountry" md={1}>
          <p>Netherlands</p>
        </Grid>
        <Grid item className="CardCountry" md={1}>
          <p>Germany</p>
        </Grid>
        <Grid item className="CardCountry" md={1}>
          <p>United Kingdom</p>
        </Grid>
        <Grid item className="CardCountry" md={1}>
          <p>Singapore</p>
        </Grid> */}
        <Grid item className="CardCountry" md={12} sm={12} xs={12}>
          <p>United States</p>
        </Grid>
        {/* <Grid item className="CardCountry" md={1}>
          <p>Hong Kong</p>
        </Grid>
        <Grid item className="CardCountry" md={1}>
          <p>Australia</p>
        </Grid>
        <Grid item className="CardCountry" md={1}>
          <p>Japan</p>
        </Grid> */}
      </Grid>
    </Grid>
    <Grid item xs={12} sm={12} data-aos="fade-down" data-aos-duration="1500">
      <Grid container spacing={2} className="ContainerButtonCountry">
        <Grid item sm={12} md={4} className="ButtonCountry">
          <button>Miami</button>
        </Grid>
       
        <Grid item sm={12} md={4} className="ButtonCountry">
          <button>New York City</button>
        </Grid>
        <Grid item sm={12} md={4} className="ButtonCountry">
          <button>Ashburn
</button>
        </Grid>
        {/* <Grid item className="ButtonCountry">
          <button>San-Francisco</button>
        </Grid>
        <Grid item className="ButtonCountry">
          <button>Washington, D.C.</button>
        </Grid>
        <Grid item className="ButtonCountry">
          <button>Seattle</button>
        </Grid>
        <Grid item className="ButtonCountry">
          <button>Phoenix</button>
        </Grid>
        <Grid item className="ButtonCountry">
          <button>Dallas</button>
        </Grid>
        <Grid item className="ButtonCountry">
          <button>Los Angeles</button>
        </Grid> */}
      </Grid>
    </Grid>
  </Grid>
</Container>;
};

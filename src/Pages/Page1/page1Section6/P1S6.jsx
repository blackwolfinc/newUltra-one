import { Container, Grid } from '@material-ui/core';
import React from 'react';

export const P1S6 = () => {
  return     <Container>
  <Grid container className="SectionBuildBody">
   
    <Grid item md={5}></Grid>
    <Grid item md={7}>
      <h1 data-aos="fade-down" data-aos-duration="800">
        We’re Built Differently...
      </h1>
      <Grid container>
        <Grid item md={6} className="SecBuildCard" >
          <h3
           data-aos="fade-right" data-aos-duration="800"
          >Priority & Platinum Traffic</h3>
          <p  data-aos="fade-right" data-aos-duration="1200">
            Our network is built to ensure that traffic get’s to it’s
            destination In the most efficient way. By default, your
            traffic is handled by our premium priority network. Need
            more? Then consider our further enhanced platinum service.
          </p>
        </Grid>
        <Grid item md={6} className="SecBuildCard">
          <h3    data-aos="fade-right" data-aos-duration="1000">Global VPLS Network</h3>
          <p data-aos="fade-right" data-aos-duration="1400">
            All of our facilities are connect via our redundant VPLS
            network. Enabling customers to take advantage of private,
            multi-site connectivity. Want to expand your LAN to the EU?
            Backup over a private connection, we got you covered.
          </p>
        </Grid>
        <Grid item md={6} className="SecBuildCard">
          <h3    data-aos="fade-right" data-aos-duration="1200">Ambitious Customer Support</h3>
          <p data-aos="fade-right" data-aos-duration="1600">
            We are determined to provide support that exceeds
            expectations. Whether you’re having an issue installing
            software, need someone to address and issue 1AM in the
            morning, or need advice on where next vacation should be, we
            are here for you.
          </p>
        </Grid>
        <Grid item md={6} className="SecBuildCard">
          <h3    data-aos="fade-right" data-aos-duration="1600">Custom Solution Friendly</h3>
          <p data-aos="fade-right" data-aos-duration="1800">
            Do you need something that’s not listed on our site, or
            possibly doesn’t exist elsewhere? Then let us build it for
            you. Our team is equipped with years of industry experience
            to build and advice on any solution. Whether be you need
            access to a specific carrier, or are in the market to lease
            a /16 IPv4, we got you.
          </p>
        </Grid>
        <button className="buttonContatUs"    data-aos="fade-up" data-aos-duration="800">Contact Us</button>
      </Grid>
    </Grid>
  </Grid>
</Container>;
};

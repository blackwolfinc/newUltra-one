import { Container, Grid } from "@material-ui/core";
import React from "react";
import logo1 from "../../../Assets/Icon/iconDraft/iconCard1.png";
import logo2 from "../../../Assets/Icon/iconDraft/iconCard2.png";
import logo3 from "../../../Assets/Icon/iconDraft/iconCard3.png";
import logo4 from "../../../Assets/Icon/iconDraft/iconCard4.png";
export const P1S6 = () => {
  return (
    <Container maxWidth="xl">
      <Grid container className="SectionBuildBody">
        <Grid item md={1} lg={5}></Grid>
        <Grid item md={12} lg={7}>
          <h1 data-aos="fade-down" data-aos-duration="800">
            We’re Built Differently...
          </h1>
          <Grid container>
            <Grid item md={6} className="SecBuildCard">
              <Grid container>
                <Grid item xs={1} sm={1} md={1} lg={1}>
                  <img src={logo1} alt="" />
                </Grid>
                <Grid item xs={11} sm={11} md={11}  lg={11}>
                  <h3 data-aos="fade-right" data-aos-duration="800">
                    Priority & Platinum Traffic
                  </h3>
                  <p data-aos="fade-right" data-aos-duration="1200">
                    Our network is built to ensure that traffic get’s to it’s
                    destination In the most efficient way. By default, your
                    traffic is handled by our premium priority network. Need
                    more? Then consider our further enhanced platinum service.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} className="SecBuildCard leftCard">
              <Grid container>
                <Grid item xs={1} sm={1}  md={1} lg={1}>
                  <img src={logo3} alt="" />
                </Grid>
                <Grid item xs={11} sm={11} md={11}  lg={11}>
                  <h3 data-aos="fade-right" data-aos-duration="800">
                    Ambitious Customer Support
                  </h3>
                  <p data-aos="fade-right" data-aos-duration="1200">
                    We are determined to provide support that exceeds
                    expectations. Whether you’re having an issue installing
                    software, need someone to address and issue 1AM in the
                    morning, or need advice on where next vacation should be, we
                    are here for you.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} className="SecBuildCard">
              <Grid container>
                <Grid item xs={1} sm={1} md={1} lg={1}>
                  <img src={logo2} alt="" />
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <h3 data-aos="fade-right" data-aos-duration="800">
                    Global VPLS Network
                  </h3>
                  <p data-aos="fade-right" data-aos-duration="1200">
                    All of our facilities are connect via our redundant VPLS
                    network. Enabling customers to take advantage of private,
                    multi-site connectivity. Want to expand your LAN to the EU?
                    Backup over a private connection, we got you covered.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} className="SecBuildCard leftCard">
              <Grid container>
                <Grid item xs={1} sm={1} md={1} lg={1}>
                  <img src={logo4} alt="" />
                </Grid>
                <Grid item xs={11} sm={11} md={11}  lg={11}>
                  <h3 data-aos="fade-right" data-aos-duration="800">
                    Custom Solution Friendly
                  </h3>
                  <p data-aos="fade-right" data-aos-duration="1200">
                    Do you need something that’s not listed on our site, or
                    possibly doesn’t exist elsewhere? Then let us build it for
                    you. Our team is equipped with years of industry experience
                    to build and advice on any solution. Whether be you need
                    access to a specific carrier, or are in the market to lease
                    a /16 IPv4, we got you.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <button
              className="buttonContatUs"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Contact Us
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

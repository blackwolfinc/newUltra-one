import { Container, Grid } from '@material-ui/core';
import React from 'react';
import iconP1 from "../../../Assets/Icon/IconProduct/Property 1=Server.png";
import iconP2 from "../../../Assets/Icon/IconProduct/Property 1=Custom.png";
import iconP3 from "../../../Assets/Icon/IconProduct/Property 1=Data.png";
import iconP4 from "../../../Assets/Icon/IconProduct/Property 1=Platinum.png";
import iconP5 from "../../../Assets/Icon/IconProduct/Property 1=IP.png";
import iconP6 from "../../../Assets/Icon/IconProduct/Property 1=Global.png";
export const P1S2 = () => {
  return    <Container>
  <Grid container className="ProductBody">
    <Grid
      item
      sm={12}
      className="ProductHeader"
      data-aos="fade-up"
      data-aos-duration="1400"
    >
      <h1>Our Products</h1>
      <p>
        Experience uncompromising performance with our bare-metal servers.
        Our servers by <br /> default are packaged with our Unlimited
        priority traffic plan
      </p>
    </Grid>
    <Grid container spacing={5}>
      <Grid
        item
        sm={12}
        className="CardProduct"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <img src={iconP1} alt="" />
        <h1> Baremetal Servers</h1>
        <p>
          {" "}
          Experience uncompromising performance with our bare-metal
          servers. Our servers by default are packaged with our Unlimited
          priority traffic plan
        </p>
        <a href=""> Learn more...</a>
      </Grid>
      <Grid
        item
        sm={12}
        className="CardProduct"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={iconP4} alt="" />
        <h1> Platinum DIA (pending)</h1>
        <p>
          {" "}
          Need more than priority? Then you can consider our Platinum DIA
          which gives you access to larger capacities
        </p>
        <a href=""> Learn more...</a>
      </Grid>
      <Grid
        item
        sm={12}
        className="CardProduct"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <img src={iconP5} alt="" />
        <h1>IP Resource Rental (pending)</h1>
        <p>
          {" "}
          If you are in the market for leasing resources then look no
          further. Let’s get you up and running as soon as possible
        </p>
        <a href=""> Learn more...</a>
      </Grid>
      <Grid
        item
        sm={12}
        className="CardProduct"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        <img src={iconP2} alt="" />
        <h1> Custom Solutions (pending)</h1>
        <p>
          {" "}
          Need to connect to a specific ISP? Want to peer to with a
          particular ASN? Let’s discuss what we can build and make
          possible for you
        </p>
        <a href=""> Learn more...</a>
      </Grid>
      <Grid
        item
        sm={12}
        className="CardProduct"
        data-aos="fade-up"
        data-aos-duration="2200"
      >
        <img src={iconP6} alt="" />
        <h1> Global VPLS (pending)</h1>
        <p>
          {" "}
          If you’re in the market for establishing a global LAN, then this
          Is the service for you. We enable you to receive, send and even
          backhaul traffic, all globally, all private
        </p>
        <a href=""> Learn more...</a>
      </Grid>
      <Grid
        item
        sm={12}
        className="CardProduct"
        data-aos="fade-up"
        data-aos-duration="2600"
      >
        <img src={iconP3} alt="" />
        <h1>Data Analytics</h1>
        <p>
          {" "}
          If you require a solution that enables you to gather data,
          rapidly from different geo-locations, then let’s chat about
          getting you connected with our tools & services
        </p>
        <a href=""> Learn more...</a>
      </Grid>
    </Grid>
  </Grid>
</Container>;
};

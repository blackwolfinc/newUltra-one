import { Container, Grid, Link } from "@material-ui/core";
import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import icon1 from "../../Assets/Icon/icon1.png";
import icon2 from "../../Assets/Icon/icon2.png";
import icon3 from "../../Assets/Icon/icon3.png";
import icon4 from "../../Assets/Icon/icon4.png";

import "./Page1.scss";
export const Page1 = () => {
  const [InerWidth, setInerWidth] = useState(window.innerWidth);

  return (
      <div className="GlobalWraper">

  
      <div className="page1Header">
        <Container >
          <Navbar />
          <Grid container className="Page1Body">
            <Grid item md={6}></Grid>
            {/* Header Text */}
            <Grid item md={6} className="Page1HeaderText">
              <h1>We’re built differently</h1>
              <p>
                Experience uncompromising performance with our bare-metal
                servers. Let’s discuss what we can build and make possible for
                you
              </p>
              <button>COMING SOON</button>
            </Grid>
          </Grid>
          {/* pemisah */}
          <Grid container className="ButtonBattom">
            <Grid item md={3}>
              <h1>Why Go Ultra?</h1>
            </Grid>
            <Grid item className="miniCard" md={2}>
              <img src={icon1}></img>
              <p>100% UNLIMITED TRAFFIC</p>
            </Grid>
            <Grid className="miniCard" item md={2}>
              <img src={icon2}></img>
              <p>GLOBALLY MULTI-SITE LAN</p>
            </Grid>
            <Grid className="miniCard" item md={2}>
              <img src={icon3}></img>
              <p>DEDICATED PERFORMANCE</p>
            </Grid>
            <Grid className="miniCard" item md={2}>
              <img src={icon4}></img>
              <p>24/7 HUMAN SUPPORT</p>
            </Grid>
          </Grid>
          {/* Product */}
        </Container>
      </div>
      {/* Product */}
      <Container>
      <Grid container className="ProductBody">
        <Grid item md={12} className="ProductHeader">
          <h1>Our Products</h1>
          <p>
            Experience uncompromising performance with our bare-metal servers.
            Our servers by <br /> default are packaged with our Unlimited priority
            traffic plan
          </p>
        </Grid>
      </Grid>
      </Container>
      </div>
  );
};

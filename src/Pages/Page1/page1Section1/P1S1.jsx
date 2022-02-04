import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import icon1 from "../../../Assets/Icon/icon1.png";
import icon2 from "../../../Assets/Icon/icon2.png";
import icon3 from "../../../Assets/Icon/icon3.png";
import icon4 from "../../../Assets/Icon/icon4.png";
export const P1S1 = () => {
  return (
    <Container>
      <Navbar />
      <Grid container className="Page1Body">
        <Grid item xs={1} md={6}></Grid>
        {/* Header Text */}
        <Grid
          item
          md={6}
          className="Page1HeaderText"
          data-aos="fade-left"
          data-aos-duration="1400"
        >
          <h1>We’re built differently</h1>
          <p>
            Experience uncompromising performance with our bare-metal servers.
            Let’s discuss what we can build and make possible for you
          </p>
          <button>SHOP SERVERS</button>
        </Grid>
      </Grid>
      {/* pemisah */}
      <Grid
        container
        className="ButtonBattom"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <Grid sm={12} item md={3} data-aos="fade-up" data-aos-duration="1300">
          <h1>Why Go Ultra?</h1>
        </Grid>
        <Grid item md={9}>
          <Grid container >
            <Grid
              item
              className="miniCard"
              md={3}
              sm={6}
              xs={12}

              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img src={icon1}></img>
              <p>100% UNLIMITED TRAFFIC</p>
            </Grid>
            <Grid
              className="miniCard"
              item
              md={3}
              sm={6}
              xs={12}

              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <img src={icon2}></img>
              <p>
                GLOBALLY <br /> MULTI-SITE LAN
              </p>
            </Grid>
            <Grid
              className="miniCard"
              item
              md={3}
              sm={6}
              xs={12}
              data-aos="fade-up"
              data-aos-duration="2100"
            >
              <img src={icon3}></img>
              <p>DEDICATED PERFORMANCE</p>
            </Grid>
            <Grid
              className="miniCard"
              item
              md={3}
              sm={6}
              xs={12}

              data-aos="fade-up"
              data-aos-duration="2400"
            >
              <img src={icon4}></img>
              <p>24/7 HUMAN <br /> SUPPORT</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Product */}
    </Container>
  );
};

import { Container, Grid } from "@material-ui/core";
import React from "react";
import iconLocation1 from "../../../Assets/Icon/iconLocation/Point_icon.png";
import iconLocation2 from "../../../Assets/Icon/iconLocation/Point_icon2.png";
import iconLocation3 from "../../../Assets/Icon/iconLocation/Point_icon3.png";
import iconLocation4 from "../../../Assets/Icon/iconLocation/Point_icon4.png";
import iconSocial from "../../../Assets/Icon/iconSocial/Social Icons.png";
import iconSocial2 from "../../../Assets/Icon/iconSocial/Social Icons2.png";
import iconSocial3 from "../../../Assets/Icon/iconSocial/Social Icons3.png";
import iconSocial4 from "../../../Assets/Icon/iconSocial/Social Icons4.png";
import LocationBackground from "../../../Assets/img/Locations.png";
export const P1S7 = () => {
  return (
    <Container maxWidth="xl" className="ContainerLocationWarp">
      <Grid container className="OurLocationWarp">
        <Grid
          item
          md={7}
          sm={12}
          className="containerKananLocation"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          {/* <img src={LocationBackground} alt="" className="imgLocationCostum" /> */}
          <h1>Our Locations</h1>
          <Grid container className="KananBody">
            <Grid item xs={12} sm={12} md={6}>
              <Grid container direction="column">
                <Grid item className="LocationCard" xs={12} sm={12} md={12}>
                  <div className="CardInside">
                    <img src={iconLocation1} alt="" />
                    <h2>New York</h2>
                    <h3>
                      60 Hudson st.Manhattan <br /> New York City
                    </h3>
                    <a href="">To the map</a>
                  </div>
                </Grid>
                <Grid item className="LocationCard" sm={12} md={12}>
                  <div className="CardInside">
                    <img src={iconLocation3} alt="" />
                    <h2>Miami</h2>
                    <h3>
                      36 ne 2nd street, <br /> Miami, Florida
                    </h3>
                    <a href=""></a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} className="downBottom">
              <Grid container direction="column">
                <Grid item className="LocationCard" sm={12} md={12}>
                  <div className="CardInside">
                    <img src={iconLocation2} alt="" />
                    <h2>Ashburn</h2>
                    <h3>
                      44274 round <br /> tableashburn, Virginia
                    </h3>
                    <a href="">To the map</a>
                  </div>
                </Grid>
                <Grid item className="LocationCard" sm={12} md={12}>
                  <div className="CardInside">
                    <img src={iconLocation4} alt="" />
                    <h2>London</h2>
                    <h3>
                      20 lanrick rd, Poplar, London, <br /> United Kingdom
                    </h3>
                    <a href="">To the map</a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} md={5}>
          <Grid container className="ContainerkiriLocation">
            <Grid item md={12}>
              <div
                className="IconSocial"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h4>Follow Us</h4>
                <img src={iconSocial} alt="" />
                <img src={iconSocial2} alt="" />
                <img src={iconSocial3} alt="" />
                <img src={iconSocial4} alt="" />
              </div>
            </Grid>
            <Grid
              item
              md={12}
              sm={12}
              className="ContactWarper WapSec"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>Contacts</h1>
              <div className="conatact">
                <h5>Support Portal</h5>
                <p> support.ultratelecom.net </p>
              </div>
              <div className="conatact">
                <h5>Phone Support</h5>
                <p>+1 (307) 200-8584 </p>
              </div>
              <div className="conatact">
                <h5>Email Support</h5>
                <p> support@ultratelecom.net </p>
              </div>
              <div className="conatact">
                <h5>Address</h5>
                <p>A 30N Gould ST, Sheridan, WY 82801, US</p>
              </div>
            </Grid>
            <Grid
              item
              md={12}
              sm={12}
              className="ContactWarper WapSec"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h1>Get in Touch</h1>
              <h3>Sign Up to our newletter</h3>
              <div className="emailSubmit">
                <input type="text" placeholder="Your Email" />
                <button className="ButtonSignUp"> Sign Up</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

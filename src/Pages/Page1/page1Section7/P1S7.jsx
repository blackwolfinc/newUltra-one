import { Container, Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
import iconLocation1 from "../../../Assets/Icon/iconLocation/Point_icon.png";
import iconLocation2 from "../../../Assets/Icon/iconLocation/Point_icon2.png";
import iconLocation3 from "../../../Assets/Icon/iconLocation/Point_icon3.png";
import iconLocation4 from "../../../Assets/Icon/iconLocation/Point_icon4.png";
import iconSocial from "../../../Assets/Icon/iconSocial/Social Icons.png";
import iconSocial2 from "../../../Assets/Icon/iconSocial/Social Icons2.png";
import iconSocial3 from "../../../Assets/Icon/iconSocial/Social Icons3.png";
import iconSocial4 from "../../../Assets/Icon/iconSocial/Social Icons4.png";
import LocationBackground from "../../../Assets/img/Locations.png";
import emailjs from "@emailjs/browser";
export const P1S7 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0b4jma8",
        "template_x34ljvs",
        form.current,
        "oiFR3H-QXCxnGywBw"
      )
      .then(
        (result) => {
          window.location.href = "/";
          alert(
            "E-mail has been sent , Thank you for sending us a message  , We will reply as soon as possible during business hours .         "
          );
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <div className="Container-Location">
      {" "}
      <Container maxWidth="xl" className="ContainerLocationWarp">
        <Grid container className="OurLocationWarp">
          <Grid md={12} className="ourLocationText">
            <h1 id="aboutUs">Our Locations</h1>
            <h4>
              Experience uncompromising performance with our bare-metal servers.
              Our servers by <br /> default are packaged with our Unlimited
              priority traffic plan
            </h4>
          </Grid>

          <Grid container className="LocationSmall">
            <Grid item md={12} className="CardLocationSmall">
              {" "}
              New York
            </Grid>
            <Grid item md={12} className="CardLocationSmall">
              {" "}
              London
            </Grid>
            <Grid item md={12} className="CardLocationSmall">
              {" "}
              Ashburn
            </Grid>
            <Grid item md={12} className="CardLocationSmall">
              Miami
            </Grid>
          </Grid>
          <Grid
            item
            md={7}
            sm={12}
            className="containerKananLocation"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            {/* <img src={LocationBackground} alt="" className="imgLocationCostum" /> */}

            <Grid container className="KananBody">
              <div className="Line-1"></div>
              <div className="Line-2"></div>
              <div className="Line-3"></div>
              <div className="Line-4"></div>

              <div className="CardInside NewYork">
                <div className="CardBorder">
                  <div className="CardInside-Header">
                    <img src={iconLocation1} alt="" />
                    <div>
                      <h2>New York</h2>
                      <p>New York City</p>
                    </div>
                  </div>

                  <div className="CardInsindeContent">
                    <p>
                      Experience uncompromising performance with our bare-metal
                      servers. Our servers by default are packaged with our
                      Unlimited priority traffic plan
                    </p>

                    {/* <a href="https://goo.gl/maps/sWp8kWgAwRLHBtcJ6">
                      To the map
                    </a> */}
                    <a><h3>CommingSoon . .</h3></a>
                  </div>
                </div>
              </div>

              <div className="CardInside Miami">
                <div className="CardBorder">
                  <div className="CardInside-Header">
                    <img src={iconLocation3} alt="" />
                    <div>
                      <h2>Miami</h2>
                      <p>Florida</p>
                    </div>
                  </div>

                  <div className="CardInsindeContent">
                    <p>
                      Experience uncompromising performance with our bare-metal
                      servers. Our servers by default are packaged with our
                      Unlimited priority traffic plan
                    </p>
                    {/* <a href="https://goo.gl/maps/nAVz135iQ8wjke6P8">
                      To the map
                    </a> */}
                    <a><h3>CommingSoon . .</h3></a>
                  </div>
                </div>
              </div>

              <div className="CardInside Ashburn">
                <div className="CardBorder">
                  <div className="CardInside-Header ">
                    <div>
                      <h2>Ashburn</h2>
                      <p>Virginia</p>
                    </div>
                    <img src={iconLocation2} alt="" />
                  </div>

                  <div className="CardInsindeContent">
                    <p>
                      Experience uncompromising performance with our bare-metal
                      servers. Our servers by default are packaged with our
                      Unlimited priority traffic plan
                    </p>

                    <a href="https://goo.gl/maps/Sr9eXnqDuNU1KTd96">
                      To the map
                    </a>
                  </div>
                </div>
              </div>

              <div className="CardInside London">
                <div className="CardBorder">
                  <div className="CardInside-Header">
                    <img src={iconLocation4} alt="" />
                    <div>
                      <h2>London</h2>
                      <p>United Kingdom</p>
                    </div>
                  </div>

                  <div className="CardInsindeContent">
                    <p>
                      Experience uncompromising performance with our bare-metal
                      servers. Our servers by default are packaged with our
                      Unlimited priority traffic plan
                    </p>

                    {/* <a href="https://goo.gl/maps/nAVz135iQ8wjke6P8">
                      To the map
                    </a> */}
                    <a><h3>CommingSoon . .</h3></a>
                  </div>
                </div>
              </div>

              <div className="CardInside London">
                <div className="CardBorder">
                  <div className="CardInside-Header">
                    <img src={iconLocation4} alt="" />
                    <div>
                      <h2>London</h2>
                      <p>United Kingdom</p>
                    </div>
                  </div>

                  <div className="CardInsindeContent">
                    <p>
                      Experience uncompromising performance with our bare-metal
                      servers. Our servers by default are packaged with our
                      Unlimited priority traffic plan
                    </p>
                    {/* <a href="https://goo.gl/maps/nAVz135iQ8wjke6P8">
                      To the map
                    </a> */}
                    <a><h3>CommingSoon . .</h3></a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item sm={12} md={5}>
            <Grid container className="ContainerkiriLocation">
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
                  <p> support.ultra.one </p>
                </div>
                <div className="conatact">
                  <h5>Phone Support</h5>
                  <p>+1 (240) 202-4606 </p>
                </div>
                <div className="conatact">
                  <h5>Email Support</h5>
                  <p> support@ultra.one</p>
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
                className="ContactWarper WapSec getTouch"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <h1>Get in Touch</h1>
                <h3>Sign Up to our newletter</h3>
                <div className="emailSubmit">
                  <form
                    className="ContactUsForm"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <input
                      type="email"
                      name="from_name"
                      placeholder="Your Email"
                      required
                    />
                    <button type="submit" value="Send" className="ButtonSignUp">
                      {" "}
                      Sign Up
                    </button>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

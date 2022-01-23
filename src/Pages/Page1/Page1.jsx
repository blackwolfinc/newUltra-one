import { Container, Grid, Link } from "@material-ui/core";
import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import icon1 from "../../Assets/Icon/icon1.png";
import icon2 from "../../Assets/Icon/icon2.png";
import icon3 from "../../Assets/Icon/icon3.png";
import icon4 from "../../Assets/Icon/icon4.png";
import iconP1 from "../../Assets/Icon/IconProduct/Property 1=Server.png";
import iconP2 from "../../Assets/Icon/IconProduct/Property 1=Custom.png";
import iconP3 from "../../Assets/Icon/IconProduct/Property 1=Data.png";
import iconP4 from "../../Assets/Icon/IconProduct/Property 1=Platinum.png";
import iconP5 from "../../Assets/Icon/IconProduct/Property 1=IP.png";
import iconP6 from "../../Assets/Icon/IconProduct/Property 1=Global.png";
import iconLocation1 from "../../Assets/Icon/iconLocation/Point_icon.png";
import iconLocation2 from "../../Assets/Icon/iconLocation/Point_icon2.png";
import iconLocation3 from "../../Assets/Icon/iconLocation/Point_icon3.png";
import iconLocation4 from "../../Assets/Icon/iconLocation/Point_icon4.png";
import iconSocial from "../../Assets/Icon/iconSocial/Social Icons.png";
import iconSocial2 from "../../Assets/Icon/iconSocial/Social Icons2.png";
import iconSocial3 from "../../Assets/Icon/iconSocial/Social Icons3.png";
import iconSocial4 from "../../Assets/Icon/iconSocial/Social Icons4.png";
import LocationBackground from "../../Assets/img/Locations.png";
import "./Page1.scss";
export const Page1 = () => {
  const [InerWidth, setInerWidth] = useState(window.innerWidth);

  return (
    <div className="GlobalWraper">
      <div className="page1Header">
        <Container>
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
            <Grid sm={12} item md={3}>
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
          <Grid item sm={12} className="ProductHeader">
            <h1>Our Products</h1>
            <p>
              Experience uncompromising performance with our bare-metal servers.
              Our servers by <br /> default are packaged with our Unlimited
              priority traffic plan
            </p>
          </Grid>
          <Grid container spacing={5}>
            <Grid item sm={12} className="CardProduct">
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
            <Grid item sm={12} className="CardProduct">
              <img src={iconP4} alt="" />
              <h1> Platinum DIA (pending)</h1>
              <p>
                {" "}
                Need more than priority? Then you can consider our Platinum DIA
                which gives you access to larger capacities
              </p>
              <a href=""> Learn more...</a>
            </Grid>
            <Grid item sm={12} className="CardProduct">
              <img src={iconP5} alt="" />
              <h1>IP Resource Rental (pending)</h1>
              <p>
                {" "}
                If you are in the market for leasing resources then look no
                further. Let’s get you up and running as soon as possible
              </p>
              <a href=""> Learn more...</a>
            </Grid>
            <Grid item sm={12} className="CardProduct">
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
            <Grid item sm={12} className="CardProduct">
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
            <Grid item sm={12} className="CardProduct">
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
      </Container>

      <Container className="OurNetworkContainer">
        <Grid container>
          <Grid item sm={12} md={12}>
            <h1>Our Network</h1>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={3} className="ContainerCountry">
              <Grid item className="CardCountry" md={1}>
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
              </Grid>
              <Grid item className="CardCountry" md={1}>
                <p>United States</p>
              </Grid>
              <Grid item className="CardCountry" md={1}>
                <p>Hong Kong</p>
              </Grid>
              <Grid item className="CardCountry" md={1}>
                <p>Australia</p>
              </Grid>
              <Grid item className="CardCountry" md={1}>
                <p>Japan</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={2} className="ContainerButtonCountry">
              <Grid item className="ButtonCountry">
                <button>Miami</button>
              </Grid>
              <Grid item className="ButtonCountry">
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
                <button>New York City</button>
              </Grid>
              <Grid item className="ButtonCountry">
                <button>Chicago</button>
              </Grid>
              <Grid item className="ButtonCountry">
                <button>Los Angeles</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container className="CardExplainContainer">
          <Grid item sm={3} className="CardExplain">
            <Grid container>
              <Grid item md={12} className="CardExplainHeader">
                <h1>1 x Intel Quad-Core Xeon E3-1230</h1>
              </Grid>
              <Grid item md={12}>
                <Grid container className="CardExplainBody">
                  <Grid item xs={6} sm={6} md={5}>
                    <p> CPU</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 1x4 Cores 3.20GHz</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p> HP DL120 G7</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 4 LFF bays</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p>RAM</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 16GB DDR3</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p> HDD</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 2x1TB SATA</p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={5}>
                    <p> TRAFFIC</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 10 TB </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} className="CardExplainBottom">
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <p> Availability</p>
                  </Grid>
                  <Grid item className="left" xs={5} sm={6} md={6}>
                    <p> 1 hr - 5 days </p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={7}>
                    <h2> US$41.41 pm</h2>
                  </Grid>
                  <Grid item sm={6} className="left" xs={5} sm={6} md={5}>
                    <h3> US$59.16 </h3>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item className="ButtonWarp" md={6}>
                    <button className="ButtonBuy">BUY NOW</button>
                  </Grid>
                  <Grid item className="ButtonWarp" md={6}>
                    <button className="ButtonCUSTOMIZE">CUSTOMIZE*</button>
                  </Grid>
                </Grid>
                <br />
                <p className="center">*One-off US$50.00 setup free applies.</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={3} className="CardExplain">
            <Grid container>
              <Grid item md={12} className="CardExplainHeader">
                <h1>1 x Intel Quad-Core Xeon E5-1620v4</h1>
              </Grid>
              <Grid item md={12}>
                <Grid container className="CardExplainBody">
                  <Grid item xs={6} sm={6} md={5}>
                    <p> CPU</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 1x4 Cores 3.20GHz</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p> HP DL120 G7</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 4 LFF bays</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p>RAM</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 16GB DDR4</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p> HDD</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 1x120GB SSD</p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={5}>
                    <p> TRAFFIC</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 10 TB </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} className="CardExplainBottom">
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <p> Availability</p>
                  </Grid>
                  <Grid item className="left" xs={5} sm={6} md={6}>
                    <p> 1 hr - 5 days </p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={7}>
                    <h2>US$60.52 pm</h2>
                  </Grid>
                  <Grid item sm={6} className="left" xs={5} sm={6} md={5}>
                    <h3> US$75.65 </h3>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item className="ButtonWarp" md={6}>
                    <button className="ButtonBuy">BUY NOW</button>
                  </Grid>
                  <Grid item className="ButtonWarp" md={6}>
                    <button className="ButtonCUSTOMIZE">CUSTOMIZE*</button>
                  </Grid>
                </Grid>
                <br />
                <p className="center">*One-off US$50.00 setup free applies.</p>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={3} className="CardExplain">
            <Grid container>
              <Grid item md={12} className="CardExplainHeader">
                <h1>1 x Intel Quad-Core Xeon E3-1270v5</h1>
              </Grid>
              <Grid item md={12}>
                <Grid container className="CardExplainBody">
                  <Grid item xs={6} sm={6} md={5}>
                    <p> CPU</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 1x4 Cores 3.60GHz</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p> HP DL120 G7</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p>2 LFF bays</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p>RAM</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 16GB DDR4</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p> HDD</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 1x120GB SSD</p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={5}>
                    <p> TRAFFIC</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 10 TB </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} className="CardExplainBottom">
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <p> Availability</p>
                  </Grid>
                  <Grid item className="left" xs={5} sm={6} md={6}>
                    <p> 1 hr - 5 days </p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={7}>
                    <h2 className="ColorDiverent"> US$73.71 pm</h2>
                  </Grid>
                  <Grid item sm={6} className="left" xs={5} sm={6} md={6}>
                    {/* <h3> US$59.16 </h3> */}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item className="ButtonWarp" md={6}>
                    <button className="ButtonBuy">BUY NOW</button>
                  </Grid>
                  <Grid item className="ButtonWarp" md={6}>
                    <button className="ButtonCUSTOMIZE">CUSTOMIZE*</button>
                  </Grid>
                </Grid>
                <br />
                <p className="center">*One-off US$50.00 setup free applies.</p>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={3} className="CardExplain">
            <Grid container>
              <Grid item md={12} className="CardExplainHeader">
                <h1>1 x Intel Quad-Core Xeon E3-2274G</h1>
              </Grid>
              <Grid item md={12}>
                <Grid container className="CardExplainBody">
                  <Grid item xs={6} sm={6} md={5}>
                    <p> CPU</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 1x4 Cores 4.00GHz</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p> HP DL120 G7</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 4 LFF bays</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p>RAM</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 32GB DDR4</p>
                  </Grid>

                  <Grid item xs={6} sm={6} md={5}>
                    <p> HDD</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 2x480GB SSD</p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={5}>
                    <p> TRAFFIC</p>
                  </Grid>
                  <Grid className="left" item xs={5} sm={6} md={7}>
                    <p> 10 TB </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} className="CardExplainBottom">
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <p> Availability</p>
                  </Grid>
                  <Grid item className="left" xs={5} sm={6} md={6}>
                    <p> 1 hr - 5 days </p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={7}>
                    <h2> US$110.96 pm</h2>
                  </Grid>
                  <Grid item sm={6} className="left" xs={5} sm={6} md={5}>
                    <h3> US$138.70 </h3>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item className="ButtonWarp" md={6}>
                    <button className="ButtonBuy">BUY NOW</button>
                  </Grid>
                  <Grid item className="ButtonWarp" md={6}>
                    <button className="ButtonCUSTOMIZE">CUSTOMIZE*</button>
                  </Grid>
                </Grid>
                <br />
                <p className="center">*One-off US$50.00 setup free applies.</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className="ContainerSectionBuild">
        <Container>
          <Grid container className="SectionBuildBody">
            <Grid item md={7}>
              <h1>We’re Built Differently...</h1>
              <Grid container>
                <Grid item md={6} className="SecBuildCard">
                  <h3>Priority & Platinum Traffic</h3>
                  <p>
                    Our network is built to ensure that traffic get’s to it’s
                    destination In the most efficient way. By default, your
                    traffic is handled by our premium priority network. Need
                    more? Then consider our further enhanced platinum service.
                  </p>
                </Grid>
                <Grid item md={6} className="SecBuildCard">
                  <h3>Priority & Platinum Traffic</h3>
                  <p>
                    Our network is built to ensure that traffic get’s to it’s
                    destination In the most efficient way. By default, your
                    traffic is handled by our premium priority network. Need
                    more? Then consider our further enhanced platinum service.
                  </p>
                </Grid>
                <Grid item md={6} className="SecBuildCard">
                  <h3>Priority & Platinum Traffic</h3>
                  <p>
                    Our network is built to ensure that traffic get’s to it’s
                    destination In the most efficient way. By default, your
                    traffic is handled by our premium priority network. Need
                    more? Then consider our further enhanced platinum service.
                  </p>
                </Grid>
                <Grid item md={6} className="SecBuildCard">
                  <h3>Priority & Platinum Traffic</h3>
                  <p>
                    Our network is built to ensure that traffic get’s to it’s
                    destination In the most efficient way. By default, your
                    traffic is handled by our premium priority network. Need
                    more? Then consider our further enhanced platinum service.
                  </p>
                </Grid>
                <button className="buttonContatUs">Contact Us</button>
              </Grid>
            </Grid>
            <Grid item md={5}></Grid>
          </Grid>
        </Container>
      </div>
      <Container maxWidth="xl" className="ContainerLocationWarp">
        <Grid container className="OurLocationWarp">
          <Grid item md={7} className="containerKananLocation">
            <img
              src={LocationBackground}
              alt=""
              className="imgLocationCostum"
            />
            <h1>Our Locations</h1>
            <Grid container className="KananBody">
              <Grid item sm={12} md={6}>
                <Grid container direction="column">
                  <Grid item className="LocationCard" md={12}>
                    <div className="CardInside">
                      <img src={iconLocation1} alt="" />
                      <h2>New York</h2>
                      <h3>60 Hudson st.Manhattan <br /> New York City</h3>
                      <a href="">To the map</a>
                    </div>
                  </Grid>
                  <Grid item className="LocationCard" md={12}>
                    <div className="CardInside">
                      <img src={iconLocation3} alt="" />
                      <h2>Miami</h2>
                      <h3>36 ne 2nd street, <br /> Miami, Florida</h3>
                      <a href=""></a>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={6} className="downBottom">
                <Grid container direction="column">
                  <Grid item className="LocationCard" md={12}>
                    <div className="CardInside">
                      <img src={iconLocation2} alt="" />
                      <h2>Ashburn</h2>
                      <h3>44274 round <br /> tableashburn, Virginia</h3>
                      <a href="">To the map</a>
                    </div>
                  </Grid>
                  <Grid item className="LocationCard" md={12}>
                    <div className="CardInside">
                      <img src={iconLocation4} alt="" />
                      <h2>London</h2>
                      <h3>20 lanrick rd, Poplar, London, <br /> United Kingdom</h3>
                      <a href="">To the map</a>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5}>
            <Grid container className="ContainerkiriLocation">
              <Grid item md={12}>
                <div className="IconSocial">
                  <h4>Follow Us</h4>
                  <img src={iconSocial} alt="" />
                  <img src={iconSocial2} alt="" />
                  <img src={iconSocial3} alt="" />
                  <img src={iconSocial4} alt="" />
                </div>
              </Grid>
              <Grid item md={12} className="ContactWarper WapSec">
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
              <Grid item md={12} className="ContactWarper WapSec">
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

      <Container maxWidth={"xl"} className="footerContainer">
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
      </Container>
    </div>
  );
};

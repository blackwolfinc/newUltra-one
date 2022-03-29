import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./Footer.scss";
import iconSocial from "../../Assets/Icon/iconSocial/Social Icons.png";
import iconSocial2 from "../../Assets/Icon/iconSocial/Social Icons2.png";
import iconSocial3 from "../../Assets/Icon/iconSocial/Social Icons3.png";
import iconSocial4 from "../../Assets/Icon/iconSocial/Social Icons4.png";
export const Footer = () => {
  return (
    <div>
      <Container maxWidth={"xl"} className="footerContainer2">
        <Grid container>
          <Grid item xs={12} sm={12} md={2}>
            <a href="">© 2022 Ultra.One</a>{" "}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container justifyContent="center" className="FooterContainer">
              <Grid item className="FooterA" xs={12} sm={12} md={2}>
                <a href="/#ourProduct">Products</a>
              </Grid>
              <Grid item className="FooterA" xs={12} sm={12} md={2}>
                <a href="/#aboutUs">About Us</a>
              </Grid>
              <Grid item className="FooterA" xs={12} sm={12} md={4}>
                <a href="/#ourNetwork">Our Network</a>
              </Grid>
              <Grid item className="FooterA" xs={12} sm={12} md={2}>
                <a href="ContactUs">Contacts</a>
              </Grid>
              <Grid item className="FooterA" xs={12} sm={12} md={2}>
                <a >Follow Us</a>
              </Grid>
              <Grid item className="FooterA IconSocial" xs={12} sm={12} md={2}>
          
              <img src={iconSocial} alt="" />
                <img src={iconSocial2} alt="" />
                <img src={iconSocial3} alt="" />
                <img src={iconSocial4} alt="" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          <a className='privacy' href="PrivacyPolicy">Privacy Policy</a>{" "}
        <a className='privacy' href="https://www.privacypolicies.com/live/b18c8446-d53f-4a0f-882e-c7298a1b4de8">Refund  Policy</a>{" "}
        <a className='privacy' href="AffiliatePolicy">Active user policy</a>{" "}
          </Grid>
        </Grid>
      </Container>
      ;
    </div>
  );
};

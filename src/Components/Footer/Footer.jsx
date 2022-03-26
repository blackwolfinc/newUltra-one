import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div>
      <Container maxWidth={"xl"} className="footerContainer2">
        <Grid container>
          <Grid item xs={12} sm={12} md={2}>
            <a href="">© 2022 Ultra.One</a>{" "}
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container justifyContent="center" className="FooterContainer">
              <Grid item className="FooterA" xs={12} sm={12} md={1}>
                <a href="/#ourProduct">Products</a>
              </Grid>
              <Grid item className="FooterA" xs={12} sm={12} md={1}>
                <a href="/#aboutUs">About Us</a>
              </Grid>
              <Grid item className="FooterA" xs={12} sm={12} md={1}>
                <a href="/#ourNetwork">Our Network</a>
              </Grid>
              <Grid item className="FooterA" xs={12} sm={12} md={1}>
                <a href="ContactUs">Contacts</a>
              </Grid>
              <Grid item className="FooterA IconSocial" xs={12} sm={12} md={2}>
          
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <a href="PrivacyPolicy">
              Privacy Policy
            </a>{" "}
          </Grid>
        </Grid>
      </Container>
      ;
    </div>
  );
};

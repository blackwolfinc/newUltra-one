import { Container, Grid } from '@material-ui/core';
import React from 'react';
import iconSocial from "../../../Assets/Icon/iconSocial/Social Icons.png";
import iconSocial2 from "../../../Assets/Icon/iconSocial/Social Icons2.png";
import iconSocial3 from "../../../Assets/Icon/iconSocial/Social Icons3.png";
import iconSocial4 from "../../../Assets/Icon/iconSocial/Social Icons4.png";
export const P1S8 = () => {
  return  <div className='footer-Container'>   
  <Container maxWidth={"xl"} className="footerContainer">
  <Grid container>
    <Grid item  xs={12} sm={12} md={2}>
      <a href="">© 2022 Ultra.One</a>{" "}
    </Grid>
    <Grid item  xs={12} sm={12} md={7}>
      <Grid container justifyContent="center" className='FooterContainer'>
        <Grid item className="FooterA" xs={12} sm={12} md={1}>
          <a href="">Products</a>
        </Grid>
        <Grid item className="FooterA" xs={12} sm={12} md={1}>
          <a href="">About Us</a>
        </Grid>
        <Grid item className="FooterA" xs={12} sm={12} md={1}>
          <a href="">Our Network</a>
        </Grid>
        <Grid item className="FooterA" xs={12} sm={12} md={1}>
          <a href="">Contacts</a>
        </Grid>
        <Grid item className="FooterA" xs={12} sm={12} md={1}>
          <a>Follow Us</a>
        </Grid>
        <Grid  item className="FooterA IconSocial"  xs={12} sm={12} md={2}>  

                <img src={iconSocial} alt="" />
                <img src={iconSocial2} alt="" />
                <img src={iconSocial3} alt="" />
                <img src={iconSocial4} alt="" />
            </Grid>
      </Grid>
    </Grid>
    <Grid item  xs={12} sm={12} md={3}>
      <a className='privacy' href="PrivacyPolicy">Privacy Policy</a>{" "}
      <a className='privacy' href="RefundPolicy">Refund  Policy</a>{" "}
      <a className='privacy' href="ActiveUserPolicy">Active user policy</a>{" "}
    </Grid>
  </Grid>
</Container>
</div>

};

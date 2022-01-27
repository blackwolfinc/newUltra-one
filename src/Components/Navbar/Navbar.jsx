import React from "react";
import { Container, Grid, Link } from "@material-ui/core";
import logo from "../../Assets/img/LogoUltra.png";
import DehazeIcon from '@material-ui/icons/Dehaze';
export const Navbar = () => {
  return (
    <div>
      <Container maxWidth={"lg"}>
        <Grid data-aos="fade-up" data-aos-duration="1000" container className="ContainerHeaderLogo">
          <Grid item sm={10} md={5} className="HeaderLogo">
            <img src={logo} alt="" />
          </Grid>
          <Grid item sm={12} md={5} className="HeaderBody">
            <Grid container spacing={1}>
              <Grid className="nav-itemHeader" item sm={12} md={2}>
                <a href="">Products</a>
              </Grid>
              <Grid className=" width nav-itemHeader" item sm={12} md={3}>
                <a href="">Our network</a>
              </Grid>
              <Grid className=" nav-itemHeader" item sm={12} md={3}>
                <a href="">About us</a>
              </Grid>

              <Grid className="Number nav-itemHeader" item sm={12} md={4}>
                <a href="">8(555) 560-9998</a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={2} className="HeaderButton">
            <button>CONTACT US</button>
          </Grid>
          <Grid item sm={2} md={5} className="HeaderButton2">
            <button><DehazeIcon/></button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

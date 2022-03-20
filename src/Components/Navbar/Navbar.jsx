import React, { useState } from "react";
import { Container, Grid, Link } from "@material-ui/core";
import logo from "../../Assets/img/LogoUltra.png";
import DehazeIcon from "@material-ui/icons/Dehaze";
import "./Navbar.scss"
export const Navbar = () => {
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <div className="navbar">
      <Container maxWidth={"lg"}>
        <Grid
          data-aos="fade-up"
          data-aos-duration="1000"
          container
          className="ContainerHeaderLogo"
        >
          <Grid item sm={10} md={5} className="HeaderLogo" >
          <a href="/">  <img  src={logo} alt="" /></a>
           
          </Grid>
          <Grid item sm={12} md={7} className="HeaderBody">
            <Grid container spacing={1}>
              <Grid className="nav-itemHeader" item sm={12} md={2}>
                <a href="/#ourProduct">Products</a>
              </Grid>
              <Grid className=" width nav-itemHeader" item sm={12} md={2}>
                <a href="/#ourNetwork">Our network</a>
              </Grid>
              <Grid className=" nav-itemHeader" item sm={12} md={2}>
                <a href="/#aboutUs">About us</a>
              </Grid>
              <Grid className=" nav-itemHeader  HeaderButton" item sm={12} md={3}>
              <a href="/ContactUs"><button>CONTACT US</button></a>
              </Grid>
              <Grid className="Number nav-itemHeader" item sm={12} md={3}>
                <a href="tel:+1(240)202-4606"> +1 (240) 202-4606</a>
              </Grid>
            </Grid>
          </Grid>
        
          <Grid item  onClick={()=>{
            setOpenModal(!OpenModal)
            } } sm={2} md={5} className="HeaderButton2">
            <button>
              <DehazeIcon />
            </button>
          </Grid>
        </Grid>
      </Container>
      {OpenModal ?  <Grid container className="showHeaderText">
        <Grid className="nav-itemHeader" item sm={12} md={2}>
        <a href="#ourProduct">Products</a>
        </Grid>
        <Grid className=" width nav-itemHeader" item sm={12} md={3}>
        <a href="#ourNetwork">Our network</a>
        </Grid>
        <Grid className=" nav-itemHeader
        " item sm={12} md={3}>
        <a href="#aboutUs">About us</a>
        </Grid>

        <Grid className="Number nav-itemHeader" item sm={12} md={4}>
          <a href="">8(555) 560-9998</a>
        </Grid>
      </Grid> : "" }
     
    </div>
  );
};



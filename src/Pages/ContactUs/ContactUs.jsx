import React, { useRef ,useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./ContactUs.scss";

import emailjs from "@emailjs/browser";
import { Footer } from "../../Components/Footer/Footer";

export const ContactUs = () => {
const [Aleret, setAleret] = useState("")
const form = useRef();


    


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0b4jma8",
        "template_gwsedso",
        form.current,
        "oiFR3H-QXCxnGywBw"
      )
      .then(
        (result) => {
     
          setAleret(result.text)
          window.location.href ="/"
          alert("E-mail has been sent , Thank you for sending us a message  , We will reply as soon as possible during business hours .         ")
        },
        (error) => {
            setAleret(error)
            alert(error)
        }
      );
  };
  return (
    <Container className="ContactUs">
      <Navbar />
        <div>
            
        </div>


      <form className="ContactUsForm" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name"  required/>
        <label>Email</label>
        <input type="email" name="from_name" required/>
        <label>Message</label>
        <textarea name="message" required/>
        <input className="ButtonSubmit" type="submit" value="Send" required/>
      </form>
      <Footer/>
    </Container>
  );
};

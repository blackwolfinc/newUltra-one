import { Container } from "@material-ui/core";
import React from "react";
import { CommingSoon } from "./CommingSoon/CommingSoon";
import { Page1 } from "./Page1/Page1";
import { Routes, Route, Link } from "react-router-dom";
import { ContactUs } from "./ContactUs/ContactUs";
import { PrivacyPolicy } from "./PrivacyPolice/PrivacyPolicy";
import { PrivacyUser } from "./PrivacyUser/PrivacyUser";
export const Layout = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={  <Page1/>} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="ActiveUserPolicy" element={<PrivacyUser/>} />
        
      </Routes>
        
    </div>
  );
};

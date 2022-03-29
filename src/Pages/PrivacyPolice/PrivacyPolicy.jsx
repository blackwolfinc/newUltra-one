import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import "./PrivacyPolicy.scss";
export const PrivacyPolicy = () => {
  return (
    <Container className="PrivacyPolicy">
      <Navbar />

      <p>
        <h1>Privacy Policy</h1>
        <hr></hr>
        This policy governs your use of Ultra One&rsquo;s products and services.
        You are responsible for understanding and complying with these policies,
        which take effect once your order is placed. This overview is provided
        for your convenience and does not replace or supersede the terms of the
        actual agreement.
        <br />
        <br />
        The order agreement will outline services and payment. Payment is due at
        in advance of services and within 14 days of receipt of the invoice,
        unless otherwise indicated. The provider may modify services or increase
        fees from time to time, with 30 days&rsquo; notice. Nonpayment will
        result in a suspension or termination of service.
        <br />
        <br />
        Services shall continue, with annual renewal, unless terminated by
        either party. The user may terminate the agreement with 30 days&rsquo;
        written notice to Ultra One.
        <br />
        <br />
        Services will be rendered in a timely manner by trained and qualified
        personnel and in compliance with legal requirements. The provider will
        not access the services without prior user consent, unless the user
        violates any of these conditions.
        <br />
        <br />
        The user agrees to cooperate with any security-related investigation
        conducted by or on behalf of the provider.
        <br />
        <br />
        The user agrees to indemnify Ultra One from any claim or action alleging
        infringement of intellectual property contained within user data, and
        agrees to comply with all applicable laws and regulations relating to
        the user&rsquo;s use and access to the service. This includes, but is
        not limited to: spam or phishing letters, open relay mail servers,
        forging of email or IP addresses, misusing intellectual property,
        accessing other networks of the provider, or contributing to a denial of
        service attack.
        <br />
        <br />
        The user will be solely responsible for any required regulatory
        approvals, and for baking up for its own benefit. The provider will not
        be responsible for inappropriate or unlawful use of the service, nor
        will it be liable for lost or corrupted data that would have been
        preserved if such backup systems were in place. Nor will the provider be
        liable for service deficiencies due to operator error or third-party
        components. The user indemnifies the provider against all losses.
        <br />
        <br />
        Each part agrees to keep confidential all information not otherwise in
        the public domain. This confidentiality agreement will remain in force
        after termination of the agreement.
      </p>
     
      <Footer />
    </Container>
  );
};

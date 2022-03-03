import { Container, Grid, Link } from "@material-ui/core";
import React, { useState } from "react";


import "./Page1.scss";
import { P1S1 } from "./page1Section1/P1S1";
import { P1S2 } from "./Page1Section2/P1S2";
import { P1S3 } from "./page1Section3/P1S3";
import { P1S4 } from "./page1Section4/P1S4";
import { P1S6 } from "./page1Section6/P1S6";
import { P1S7 } from "./page1Section7/P1S7";
import { P1S8 } from "./page1Section8/P1S8";
export const Page1 = () => {
  const [InerWidth, setInerWidth] = useState(window.innerWidth);

  return (
    <div className="GlobalWraper">
      <div className="page1Header">
      <P1S1/>
      </div>
      <P1S2/>
      <P1S3/>
      <P1S4/>
      <div className="ContainerSectionBuild">
      <P1S6/>
      </div>
      <div className="bottomSection">
      <P1S7/>
      <P1S8/>
      </div>
    </div>
  );
};

import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import DashboardMain from "components/forms/dash-main.js";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <DashboardMain />
      <Footer />
    </AnimationRevealPage>
  );
};

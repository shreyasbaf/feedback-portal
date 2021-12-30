import React from "react";
import { NotFound } from "./NotFound";
import {  StyledRoutesContainer } from "./style";
import Homepage from "../../../modules/homepage";
import Footer from "../footer";
import Navbar from "../navbar";
import Landingpage from "../../../modules/landing";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

const Routes: React.FC<any> = () => {
  return (
    <Router>
      <Navbar />
      <StyledRoutesContainer>
        <Switch>
          {/* <Route path="/dashboard" element={<Landingpage />} /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </StyledRoutesContainer>

      <Footer />
    </Router>
  );
};

export default Routes;

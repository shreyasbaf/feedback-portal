import React from "react";

import history from "../history";
import { Paths } from "./types";
import { NotFound } from "./NotFound";
import { StyledRoutes, StyledRoutesContainer, ThemeWrapper } from "./style";
import Homepage from "../../../modules/homepage";
import Footer from "../footer";
import Navbar from "../navbar";
import Landingpage from "../../../modules/landing";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

// const notFoundRoute: RouteDefinition = {
//   path: "*",
//   component: NotFound,
//   protected: false,
//   title: "",
// };

// export const routes: RouteDefinition[] = [
//   {
//     path: Paths.root,
//     component: Landingpage,
//     protected: false,
//     redirect: Paths.home,
//     title: "LANDINGPAGE",
//     pathType: 1,
//   },
//   {
//     path: Paths.home,
//     component: Homepage,
//     protected: false,
//     redirect: Paths.home,
//     title: "HOMEPAGE",
//     pathType: 2,
//   },
// ].concat(notFoundRoute as any); // Ensure that notFound is the last route

// export interface RouteDefinition {
//   path: string;
//   protected?: boolean;
//   redirect?: string;
//   component?: any;
//   routes?: RouteDefinition[];
//   title?: string;
//   pathType?: number;
// }

// interface Props {
//   // userLoaded: boolean
// }
// interface RoutesProps {}

// function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
//   return () => <route.component />;
// }

const Routes: React.FC<any> = () => {
  return (
    <Router>
      <Navbar />
      <StyledRoutesContainer>
        <Switch>
          <Route path="/home" element={<Landingpage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </StyledRoutesContainer>

      <Footer />
    </Router>
  );
};

export default Routes;

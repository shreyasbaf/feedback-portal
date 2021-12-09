import React from "react";

import { Logo, ButtonHolders } from "./style";
import Login from "../../../modules/login";
import Signup from "../../../modules/signup";
import { ThreeColumns } from "../../../shared/styles/styling";
import { Button } from "../button";

const Navbar = (props: any) => {
  const [show, setShow] = React.useState("");

  const Close = () => {
    setShow("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <ThreeColumns>
        <div></div>
        <Logo
          className="header-logo"
          src={require("../../../assets/images/logo.svg").default}
          alt="logo"
        />
        <ButtonHolders>
          <Button
            background="rgb(162,48,237)"
            color="white"
            onClick={() => setShow("login")}
          >
            Login
          </Button>
          <Button
            background="rgb(110,71,255)"
            color="white"
            onClick={() => setShow("signup")}
          >
            Signup
          </Button>
        </ButtonHolders>
      </ThreeColumns>
      <Login show={show == "login" ? true : false} Close={() => Close()} />
      <Signup show={show == "signup" ? true : false} Close={() => Close()} />
    </div>
  );
};
export default Navbar;

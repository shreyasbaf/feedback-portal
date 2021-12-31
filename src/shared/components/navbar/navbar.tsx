import React from "react";

import { Logo, ButtonHolders } from "./style";
import Login from "../../../modules/login";
import Signup from "../../../modules/signup";
import { ThreeColumns } from "../../../shared/styles/styling";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../Redux/User/actions";

const Navbar = (props: any) => {
  const dispatch = useDispatch();
  const {loginSuccess} = useSelector((state: any) => state.user)
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
        {loginSuccess ?
        <Button
            background="rgb(162,48,237)"
            color="white"
            onClick={() => dispatch(userLogout()) }
          >
            Logout
          </Button>:
          <Button
            background="rgb(162,48,237)"
            color="white"
            onClick={() => setShow("login")}
          >
            Login
          </Button>
        }
        {loginSuccess? '' : 
          <Button
            background="rgb(110,71,255)"
            color="white"
            onClick={() => setShow("signup")}
          >
            Signup
          </Button>
        }
        </ButtonHolders>
      </ThreeColumns>
      <Login show={show === "login" ? true : false} Close={() => Close()} />
      <Signup show={show === "signup" ? true : false} Close={() => Close()} />
    </div>
  );
};
export default Navbar;


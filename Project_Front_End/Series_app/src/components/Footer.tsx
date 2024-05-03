import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Footer() {
  const year = new Date().getFullYear();
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <footer className="m-6">
      {!isLoggedIn&&<p>Copyright ⓒ {year}  <br /> Guy  0534271418</p>}
    </footer>
  );
}

export default Footer;

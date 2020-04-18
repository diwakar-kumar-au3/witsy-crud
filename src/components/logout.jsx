import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

function Logout({ setuser }) {
  useEffect(() => {
    setuser(null);
    localStorage.clear();
  }, []);
  return <Redirect to="/" />;
}
export default Logout;

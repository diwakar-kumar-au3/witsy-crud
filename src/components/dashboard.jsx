import React, { useEffect } from "react";
import Table from "./table";
import { Link, Redirect } from "react-router-dom";
function Dashboard({ user }) {
  const redirect = () => {
    const logusr = localStorage.getItem("user");
    if (!user && logusr == null) {
      return <Redirect to="/" />;
    }
  };
  return (
    <div className="container mt-2">
      {redirect()}
      <div className="row p-3 my-4 rounded shadow-lg  bg-secondary">
        <div className="col-11 bg-secondary">
          <h1 className="text-light m-0">Dashboard</h1>
        </div>
        <div className="col-1">
          <Link
            to="/logout"
            className="btn btn-danger "
            style={{ cursor: "pointer" }}
          >
            Logout
          </Link>
        </div>
      </div>
      <div className="row p-3 rounded bg-secondary">
        <div className="col-12 py-2 rounded bg-light">
          <Table />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

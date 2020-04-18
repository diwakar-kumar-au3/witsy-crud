import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

function Login({ user, setuser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value,
      password = e.target.password.value;
    const value = { email, password };
    axios
      .post("api/user/login", value)
      .then((res) => {
        setuser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.username));
      })
      .catch((err) => console.log(err.data));
  };

  const red = () => {
    if (user) {
      return <Redirect to="/dashboard" />;
    }
  };
  return (
    <div className="container">
      {red()}
      <div className="d-flex justify-content-center">
        <div className="mx-auto">
          <h4 className="text-info my-4">Login</h4>
          <hr />
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="form-group">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </label>
            </div>
            <div class="form-group">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </label>
            </div>

            <button type="submit" class="btn btn-primary">
              login
            </button>
          </form>
          <p>
            Create an Account <Link to="/signup">signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;

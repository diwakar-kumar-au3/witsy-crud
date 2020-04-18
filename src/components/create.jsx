import React from "react";
import axios from "axios";

function Create({ formdata, setformdata, getuser, addFormControl }) {
  const handleCreate = () => {
    axios
      .post("api/user/signup", formdata)
      .then((res) => {
        getuser();
        addFormControl();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <tr>
        <td scope="row">
          <input
            className="form-control"
            placeholder="email"
            onChange={(e) =>
              setformdata({ ...formdata, email: e.target.value })
            }
          />
        </td>
        <td>
          <input
            className="form-control"
            placeholder="username"
            onChange={(e) =>
              setformdata({ ...formdata, username: e.target.value })
            }
          />
        </td>
        <td>
          <input
            className="form-control"
            placeholder="password"
            onChange={(e) =>
              setformdata({ ...formdata, password: e.target.value })
            }
          />
        </td>
        <td>
          <input
            className="form-control"
            placeholder="Region"
            onChange={(e) =>
              setformdata({ ...formdata, region: e.target.value })
            }
          />
        </td>
        <td>
          <button className="btn btn-primary" onClick={() => handleCreate()}>
            Submit
          </button>
        </td>
      </tr>
    </>
  );
}
export default Create;

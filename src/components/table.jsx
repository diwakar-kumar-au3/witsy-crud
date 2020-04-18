import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from "./create";
import { MdCheck, MdClose, MdDelete, MdEdit } from "react-icons/md";

function Table() {
  const initialData = { email: "", username: "", password: "", region: "" };
  const [add, setadd] = useState(false);
  const [data, setdata] = useState();
  const [formdata, setformdata] = useState(initialData);
  useEffect(() => {
    getuser();
  }, [add]);

  const getuser = () => {
    axios
      .get(`api/user/getinfo`)
      .then((res) => {
        let temp = res.data.map((v) => {
          return { ...v, isEditMode: false };
        });
        setdata(temp);
        // console.log(temp);
      })
      .catch((err) => console.log(err));
  };
  const setEditHandler = (id) => {
    let index;
    for (var i in data) {
      if (data[i]._id === id) {
        index = i;
      }
    }
    const { email, username, password, region } = data[index];
    setformdata({ email, username, password, region });
    let temp = data.map((v) => {
      return v._id === id
        ? { ...v, isEditMode: true }
        : { ...v, isEditMode: false };
    });

    // temp[index] = { ...temp[index], isEditMode: true };
    setdata(temp);
  };
  const editRequest = (id) => {
    const body = { ...formdata, id };
    axios
      .put("api/user/edit", body)
      .then((res) => {
        getuser();
      })
      .catch((err) => console.log(err));
  };
  const cancelEdit = () => {
    let temp = data.map((v) => ({ ...v, isEditMode: false }));
    setdata(temp);
    setformdata(initialData);
  };
  const handleDelete = (id) => {
    axios
      .delete(`api/user/delete/${id}`)
      .then((res) => {
        getuser();
      })
      .catch((err) => console.log(err));
  };
  const addFormControl = () => {
    setformdata(initialData);
    setadd(!add);
  };
  return (
    <>
      {/* {console.log(data)} */}
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between my-2">
            <h4 className="text-secondary m-0">Users</h4>
            <button
              className="btn-sm btn btn-secondary"
              onClick={() => addFormControl()}
            >
              {add ? "cancel" : "add"}
            </button>
          </div>
        </div>
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Region</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {add ? (
                <Create
                  formdata={formdata}
                  setformdata={setformdata}
                  getuser={getuser}
                  addFormControl={addFormControl}
                />
              ) : null}
              {data &&
                data.map((row) => (
                  <tr key={row._id}>
                    {row.isEditMode ? (
                      <td>
                        <input
                          value={formdata.email}
                          placeholder="email"
                          className="form-control"
                          onChange={(e) =>
                            setformdata({ ...formdata, email: e.target.value })
                          }
                        />
                      </td>
                    ) : (
                      <td>{row.email}</td>
                    )}
                    {row.isEditMode ? (
                      <td>
                        <input
                          value={formdata.username}
                          className="form-control"
                          placeholder="username"
                          onChange={(e) =>
                            setformdata({
                              ...formdata,
                              username: e.target.value,
                            })
                          }
                        />
                      </td>
                    ) : (
                      <td>{row.username}</td>
                    )}
                    {row.isEditMode ? (
                      <td>
                        <input
                          value={formdata.password}
                          className="form-control"
                          placeholder="password"
                          onChange={(e) =>
                            setformdata({
                              ...formdata,
                              password: e.target.value,
                            })
                          }
                        />
                      </td>
                    ) : (
                      <td>{row.password}</td>
                    )}
                    {row.isEditMode ? (
                      <td>
                        {" "}
                        <input
                          value={formdata.region}
                          className="form-control"
                          placeholder="region"
                          onChange={(e) =>
                            setformdata({ ...formdata, region: e.target.value })
                          }
                        />
                      </td>
                    ) : (
                      <td>{row.region}</td>
                    )}

                    {!row.isEditMode ? (
                      <td>
                        <MdEdit
                          className="mr-3 text-info"
                          onClick={() => setEditHandler(row._id)}
                          style={{ fontSize: "1.4rem" }}
                        />
                        <MdDelete
                          onClick={() => {
                            handleDelete(row._id);
                          }}
                          style={{ fontSize: "1.4rem" }}
                          className="text-danger"
                        />
                      </td>
                    ) : (
                      <td>
                        <MdCheck
                          className="mr-3 text-success font-weight-bold"
                          style={{ fontSize: "1.4rem" }}
                          onClick={() => editRequest(row._id)}
                        />
                        <MdClose
                          className="text-danger"
                          onClick={() => cancelEdit()}
                          style={{ fontSize: "1.4rem" }}
                        />
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Table;

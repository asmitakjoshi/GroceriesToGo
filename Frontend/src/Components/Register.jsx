import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.prevenDefault();
  };
  const changeField = (e) => {
    const { name, value } = e.target;
    setRegister((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={submitForm} className="form-container border p-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={register.name}
                  onChange={changeField} placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={register.email}
                  onChange={changeField} placeholder="Email address"
                />
              </div>
              <div className=" form-group">
                <input type="password" className="form-control"
                  name="password" id="password" value={register.password} onChange={changeField} placeholder="password" />
              </div>
              <Link to="#" class="btn btn-default bg-diff radius-0">
                Register
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
}

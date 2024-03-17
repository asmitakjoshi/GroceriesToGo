import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    isAdmin: false
  });

  const history = useNavigate();

  const changeField = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setLogin(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(login);
    if (login.isAdmin) {
      history.push('/addproducts'); // Redirect to Addproducts if isAdmin is true
    } else {
      history.push('/home')
    }
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={submitForm} className="form-container border p-3">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={login.email}
                  onChange={changeField}
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={login.password}
                  onChange={changeField}
                  placeholder="password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isAdmin"
                  name="isAdmin"
                  checked={login.isAdmin}
                  onChange={changeField}
                />
                <label className="form-check-label" htmlhtmlFor="isAdmin">Login as admin</label>
              </div>
              <button type="submit" className="btn btn-default bg-diff radius-0">Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

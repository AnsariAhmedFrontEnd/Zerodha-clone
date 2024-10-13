import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const newUser = { name, email, password };

        const response = await axios.post(
          "http://localhost:5000/signup",
          newUser,
          {
            withCredentials: true,
          }
        );

        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    setValidated(true);
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-8">
        <div className="col-7">
          <img
            src="media/images/signup.png"
            style={{ width: "90%" }}
            alt="signup"
          />
        </div>
        <div className="col-4 ms-3 border-start">
          <h4 className="ms-5">Signup now</h4>
          <p className="ms-5 text-muted mt-2">
            Already have an account ? <Link to="/login"> Login</Link>
          </p>
          <form
            onSubmit={formSubmitHandler}
            className={`mt-2 ms-5 needs-validation ${
              validated ? "was-validated" : ""
            }`}
            noValidate
          >
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <div className="invalid-feedback">Please enter a valid name.</div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="invalid-feedback">
                Please enter a valid email.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="invalid-feedback">
                Please enter a valid email.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="mb-2">
              <button type="submit" className="btn btn-primary mt-3">
                Signup Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

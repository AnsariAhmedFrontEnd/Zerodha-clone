import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const newUser = { email, password };

        await login(newUser);

        setEmail("");
        setPassword("");
        navigate("/dashboard");
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
          <h4 className="ms-5">Login</h4>
          <p className="ms-5 text-muted mt-2">
            Don't have an account ? <Link to="/signup"> Signup</Link>
          </p>
          <form
            onSubmit={formSubmitHandler}
            className={`mt-2 ms-5 needs-validation ${
              validated ? "was-validated" : ""
            }`}
            noValidate
          >
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

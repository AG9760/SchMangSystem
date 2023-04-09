import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { MarkEmailRead } from "@mui/icons-material";
// import { InputAdornment, IconButton, SearchIcon } from "@mui/icons-material";

console.log(localStorage.getItem("role"));
const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("./register");
  };

  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    //   console.log(user);
    //   // setFormValues({ ...formValues, [name]: value });
    //   // console.log(formValues);
  };

  const login = () => {
    console.log("Login");
    axios.post("http://localhost:8080/login", user).then((res) => {
      console.log(res.data);
      if (res.data.message === "login success") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.data.role);
        localStorage.setItem("id", res.data.data.id);
        console.log(
          localStorage.getItem("token"),
          localStorage.getItem("role")
        );
        window.location = "/Navbar";
      }

      // setLoginUser(res.data.user);
      history.push("/login");
    });
  };

  const initialValues = { email: "", password: "" };
  const [user, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   // console.log(e.target);
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
    }
  });

  const validate = (user) => {
    const errors = {};
    const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (!user.email) {
      errors.email = "email is required!";
    } else if (!validEmail.test(user.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!user.password) {
      errors.password = "password is required!";
    } else if (user.password.length < 4) {
      errors.password = "password must be more than 4 characters";
    } else if (user.password.length > 10) {
      errors.password = "password cannot more than 10 characters";
    } else if (!validPassword.test(user.password)) {
      errors.password = "This is not a valid password format!";
    }
    return errors;
  };

  return (
    <div>
      <form action="" className="loginbox" onSubmit={handleSubmit}>
        <div className="login">
          <h1 className="loginheading"> Login</h1>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Enter your Email"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MarkEmailRead
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                </InputAdornment>
              ),
            }}
          ></input>
          <div className="errormessage">{formErrors.email}</div>

          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your Password"
            onChange={handleChange}
          ></input>
          <div className="errormessage">{formErrors.email}</div>

          <Link to="/email-send" style={{ textDecoration: "none" }}>
            <p className="forgot-password">
              <b>Forgot Password ?</b>
            </p>
          </Link>

          <div className="button" onClick={login}>
            Login
          </div>

          <div style={{ color: "black" }}>or</div>
          <div className="button" onClick={handleClick}>
            Register
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;

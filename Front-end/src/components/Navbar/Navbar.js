import React from "react";
import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Header = styled(AppBar)`
  ${"" /* background: #111111; */}
  background: rgb(238,174,202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;
let role = localStorage.getItem("role");

//logout here
const logout = (e) => {
  e.preventDefault();
  axios
    .post("http://localhost:8080/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    .then((res) => {
      localStorage.removeItem("role");
      console.error("heyaa", res);
      if (!res.status === 200) {
        const error = new Error(res.error);
        console.error("hey", error);
        throw error;
      }
      window.location.href = "/login";
    })
    .catch((err) => {
      console.error(err);
    });
};
const Navbar = () => {
  return (
    <Header>
      <Toolbar>
        <Tabs to="/InfoObject"> InfoObjects</Tabs>

        {role === "Teacher" ? (
          <div>
            <Tabs to="/AllUsers">All Users</Tabs>{" "}
            <Tabs to="/AddUser">Add User</Tabs>{" "}
            <Tabs to="/circular">Add Circular</Tabs>{" "}
            <Tabs to="/showcircular">show Circular</Tabs>{" "}
            <Tabs to="/addnotes">Add Notes</Tabs>
          </div>
        ) : (
          <div>
            <Tabs to="/myprofile">My Profile</Tabs>{" "}
            <Tabs to="/showcircular">show Circular</Tabs>{" "}
            <Tabs to="/shownotes">show Notes</Tabs>
          </div>
        )}

        <Button className="logoutbutton" variant="contained" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </Header>
  );
};

export default Navbar;

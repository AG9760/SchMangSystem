import React from "react";
import { Link } from "react-router-dom";
import "./selectionpage.css";
// import LoginIcon from "@mui/icons-material";
import { Login } from "@mui/icons-material";

// const styleForButton = {
//   fontsize: "2.5em",
// };

export default function SelectionPage() {
  return (
    // <div className="">
    //   <h1 className="text"> Student Management System </h1>
    //   <div>
    //     <Link to="/login">
    //       <button className="loginbutton">
    //         {" "}
    //         <b> Login </b>
    //         <Login className="loginicon" sx={{ fontSize: "40px" }} />
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <div>
      <div className="split left">
        <div className="centered">
          <img src="/assets/login3.png" alt="React Image" />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <h1 className="text"> Student Management System </h1>
          <div>
            <Link to="/login" className="link">
              <button className="loginbutton">
                {" "}
                <b> Login </b>
                <Login className="loginicon" sx={{ fontSize: "40px" }} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

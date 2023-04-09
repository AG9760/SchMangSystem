import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/homepage";
import Register from "./components/Register/register";
import { useState } from "react";
import SelectionPage from "./components/selectionpage/SelectionPage";
import Navbar from "./components/Navbar/Navbar";
import AddUser from "./components/AddUser/AddUser";
import AllUsers from "./components/AllUsers/AllUsers";
import InfoObject from "./components/InfoObject/InfoObject";
import EditUser from "./components/EditUser/EditUser";
import ResetPasswordPage from "./components/Reset Password/resetpassword";
import OTPVerifyPage from "./components/verify/otpverify";
import Logout from "./components/Logout/logout";
import Myprofile from "./components/Myprofile/myprofile";
import Circular from "./components/Circular/circular";
import ShowCircular from "./components/ShowCircular/showcircular";
import AddNotes from "./components/Addnotes/addnotes";
import Shownotes from "./components/Shownotes/shownotes";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SelectionPage />
          </Route>
          <Route path="/login">
            {" "}
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            {" "}
            <Register />{" "}
          </Route>
          <Route path="/homepage">
            {" "}
            <Homepage />{" "}
          </Route>

          <Route path="/Navbar">
            {" "}
            <Navbar />{" "}
          </Route>
          <Route path="/InfoObject">
            {" "}
            <InfoObject />{" "}
          </Route>
          <Route path="/AddUser">
            {" "}
            <AddUser />{" "}
          </Route>
          <Route path="/AllUsers">
            {" "}
            <AllUsers />{" "}
          </Route>
          <Route path="/EditUser/:id">
            {" "}
            <EditUser />{" "}
          </Route>
          <Route path="/email-send">
            {" "}
            <ResetPasswordPage />{" "}
          </Route>
          <Route path="/otp-verify">
            {" "}
            <OTPVerifyPage />{" "}
          </Route>
          <Route path="/logout">
            {" "}
            <Logout />{" "}
          </Route>
          <Route path="/myprofile">
            {" "}
            <Myprofile />{" "}
          </Route>
          <Route path="/circular">
            {" "}
            <Circular />{" "}
          </Route>
          <Route path="/showcircular">
            {" "}
            <ShowCircular />{" "}
          </Route>
          <Route path="/addnotes">
            {" "}
            <AddNotes />{" "}
          </Route>
          <Route path="/shownotes">
            {" "}
            <Shownotes />{" "}
          </Route>
        </Switch>
      </Router>

      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/StudentLanding" element={<StudentLanding />} />
      </Routes> */}
    </div>
  );
}

export default App;

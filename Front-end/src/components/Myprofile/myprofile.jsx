import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import Navbar from "../Navbar/Navbar";
// import { Button } from "@mui/material";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
  id: "",
  gender: "",
  password: "",
  rollNo: "",
  dob: "",
};

const Myprofile = () => {
  const [user, setUser] = useState(initialValue);

  const getUser = (id) => {
    try {
      const url = "http://localhost:8080/" + id;
      //   return await axios.get(url);
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          console.log("here", response);
          setUser(response.user[0]);
          //   return data;
        });
    } catch (error) {
      console.log("error while calling gettinr user", error);
    }
  };

  const loadUserDetails = async () => {
    let contacts = localStorage;
    console.log("loading user details", contacts);
    getUser(contacts.id);
    return true;
  };
  useEffect(() => {
    let a = loadUserDetails();
  }, []);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer
          className="py-5"
          style={{ width: "1000px", marginTop: "30px" }}
        >
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  {/* <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">
                    Message
                  </MDBBtn>
                </div> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          value={user.name}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Username</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          value={user.name}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          value={user.email}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          value={user.phone}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Gender</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          value={user.gender}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Roll No.</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          value={user.rollNo}
                          onChange={(e) => onValueChange(e)}
                          readOnly
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Date of Birth</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          value={user.dob}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBBtn style={{ float: "right" }}>Update Profile</MDBBtn>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Myprofile;

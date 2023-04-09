import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

const Container = styled(FormGroup)`
  ${"" /* border: 2px solid red; */}
  ${"" /* width: 300%; */}
  ${"" /* margin: 3% auto 0 auto; */}
  & > div {
    margin-top: 20px;
  }
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
  gender: "",
  password: "",
  rollNo: "",
  dob: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addstudent = () => {
    const { name, username, email, phone, gender, password, rollno, dob } =
      user;
    if (
      name &&
      username &&
      email &&
      phone &&
      gender &&
      password &&
      rollno &&
      dob
    ) {
      axios
        .post("http://localhost:8080/addstudent", user)
        .then((res) => console.log(res));
      window.location.href = "/AllUsers";
    } else {
      alert("invalid input");
    }
  };

  return (
    <div>
      <Navbar />
      <Container className="adduser">
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="gender" />
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="password" />
        </FormControl>
        <FormControl>
          <InputLabel>Roll No.</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="rollNo" />
        </FormControl>
        <FormControl>
          <InputLabel>Date of Birth</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="dob" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={addstudent}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddUser;

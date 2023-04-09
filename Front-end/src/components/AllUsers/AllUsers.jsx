import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 10% auto 0 auto;
`;

const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const AllUsers = () => {
  // const getUsers = async () => {
  //   try {
  //     return await axios.get("http://localhost:8080/AllUsers");
  //     // console.log('')
  //   } catch (error) {
  //     console.log("error while calling getusers API", error);
  //   }
  // };
  // const getAllUsers = async () => {
  //   let response = await getUsers();
  //   console.log(response);
  // };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // let response = await getUsers();
    //   console.log(response);
    fetch("http://localhost:8080/AllUsers")
      .then((users) => {
        console.log(users);
        return users.json();
      })
      .then((u) => {
        setUsers(u.user);
        console.log(u);
      });
    // getAllUsers();
  }, []);

  const handleActive = async (id, flag) => {
    try {
      const response = await axios({
        method: "put",
        url: "http://localhost:8080/InActive/" + id,
        data: {
          flag: flag,
        },
      });
      window.location.href = "/AllUsers";
    } catch (error) {
      console.log("error while calling gettinr user", error);
    }
  };

  return (
    <div>
      <Navbar />
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TBody>
              <TableCell
                style={user.isActive ? { color: "green" } : { color: "red" }}
              >
                {user._id}
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/EditUser/${user._id}`}
                >
                  Edit
                </Button>
                {user.isActive ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={(e) => handleActive(user._id, false)}
                  >
                    In-Active
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={(e) => handleActive(user._id, true)}
                  >
                    Activate
                  </Button>
                )}
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default AllUsers;

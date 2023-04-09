import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";

// import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
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

const ShowCircular = () => {
  return (
    <div>
      <Navbar />

      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Content</TableCell>

            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          <TBody>
            <TableCell>12</TableCell>
            <TableCell>Basant</TableCell>
            <TableCell>12/02/2023</TableCell>
            <TableCell>mndgouv </TableCell>
          </TBody>
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default ShowCircular;

import React, { useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import Navbar from "../Navbar/Navbar";

export default function Shownotes() {
  const [data, setData] = useState();
  const [std, setStd] = useState();

  const getNotes = () => {
    try {
      const url = "http://localhost:8080/shownotes";
      axios
        .get(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.json())
        .then((response) => {
          console.log("here", response);
          setData(response);
        });

      // }
      //   return await axios.get(url);
      // fetch(url)
      //   .then((response) => response.json())
      //   .then((response) => {
      //     console.log("here", response);
      //     setData(response);
      //   });
    } catch (error) {
      console.log("error while calling gettinr user", error);
    }
  };

  return (
    <div
      className="row"
      style={{ backgroundColor: "gray", padding: "65px", margin: "25px" }}
    >
      <Navbar />
      <h3
        className="notesheading"
        style={{ fontFamily: "Bodoni", fontSize: "30px" }}
      >
        My Notes
      </h3>
      <select className="form-control col-md-9">
        <option value="">Choose Subject</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
      </select>
      <center>
        <button className="btn btn-primary col-md-3" onClick={getNotes}>
          Search
        </button>
      </center>

      <div style={{ padding: "28px" }}>
        <MDBRow>
          {data ? (
            <MDBCol sm="6">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Special title treatment</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn href="#">Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ) : (
            <h3>No data available</h3>
          )}
        </MDBRow>
      </div>
    </div>
  );
}

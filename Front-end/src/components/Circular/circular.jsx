import React from "react";
import "./circular.css";
import Navbar from "../Navbar/Navbar";

export default function circular() {
  return (
    <div>
      <Navbar />
      <form className="circular">
        <h3 className="circularheading"> Create Circular Notice</h3>
        <input type="text" name="Title" placeholder="Enter your Title"></input>
        <textarea
          type="textarea"
          name="Content"
          placeholder="Enter your Content"
          rows={4}
          cols={40}
        ></textarea>
        <input type="date" name="dob" placeholder="Enter date"></input>

        <button className="buttonadd">Add Circular</button>
      </form>
    </div>
  );
}

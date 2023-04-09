import React from "react";
import "./addnotes.css";
import Navbar from "../Navbar/Navbar";

export default function addnotes() {
  return (
    <div>
      <Navbar />
      <form className="addnotes">
        <h3 className="notesheading"> Add Notes</h3>

        <select>
          <option value="">Choose Class</option>
          <option value="Class 9">Class 9</option>
          <option value="Class 10">Class 10</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
        </select>

        <select>
          <option value="">Choose Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
        </select>

        <input type="file" />

        <input
          type="type"
          name="comment"
          placeholder="Enter your comment"
        ></input>

        <button className="notesadd">Add Notes</button>
      </form>
    </div>
  );
}

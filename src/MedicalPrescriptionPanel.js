import React, { useState } from "react";
import "./stylesheet/index.css";

export const MedicalPrescriptionPanel = () => {
  //using useState for defining getter and setter method
  const [treatId, setTreatId] = useState(1);
  const [treatCourseId, setTreatCourseId] = useState(1);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [dateIssued, setDateIssued] = useState(null);

  //handle FormSubmit

  const handleFormSubmit = (e) => {
    e.preventDefault(); //prevent the default function of form. That is stop refreshing the page after submit
    //updating the tbody element with new form data
    document.getElementById("tbody").innerHTML += `
        <tr key=${treatId}>
            <th scope="row">${treatId}</th>
            <td scope="row">${treatCourseId}</td>
            <td>${name}</td>
            <td>${type}</td>
            <td>${category}</td>
            <td>${dateIssued}</td>
        </tr>
    `;
    //reset form
    e.target.reset();
  };

  return (
    <div className="container mt-3 mb-5">
      <div className="text-center">
        <h1>Medical Prescription Panel</h1>
      </div>

      {/* Form Submission  */}
      <form className="row g-3 mt-2 mb-2" onSubmit={handleFormSubmit}>
        {/* Treat Id  */}
        <div className="col-md-6">
          <label htmlFor="treatId" className="form-label">
            Treat Id
          </label>
          <input
            type="number"
            className="form-control"
            id="treat-id"
            required
            onChange={(e) => {
              setTreatId(e.target.value);
            }}
          />
        </div>
        {/* Treat Course Id input tag*/}
        <div className="col-md-6">
          <label htmlFor="treatCourseId" className="form-label">
            Treat Course Id
          </label>
          <input
            type="number"
            className="form-control"
            id="treat-course-id"
            required
            onChange={(e) => {
              setTreatCourseId(e.target.value);
            }}
          />
        </div>

        {/* Name input tag  */}
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        {/* Type input tag */}
        <div className="col-md-4">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <input
            type="text"
            className="form-control"
            id="type"
            required
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>

        {/* Category input tag*/}
        <div className="col-md-4">
          <label htmlFor="inputZip" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            required
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>

        {/* Date Issued input tag */}
        <div className="col-md-4">
          <label htmlFor="inputZip" className="form-label">
            Date Issued
          </label>
          <input
            type="date"
            className="form-control"
            id="inputZip"
            required
            onChange={(e) => {
              setDateIssued(e.target.value);
            }}
          />
        </div>
        {/* Button container  */}
        <div className="col-12">
          {/* Submit button  */}
          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>

          {/* Reset button  */}
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>

      {/* Displaying the form data*/}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">TreatId</th>
            <th scope="col">TreatCourseId</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Category</th>
            <th scope="col">DateIssued</th>
          </tr>
        </thead>
        {/* display the form data  */}
        <tbody id="tbody">{/* Content  */}</tbody>
      </table>
    </div>
  );
};

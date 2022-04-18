import React from "react";

export const MedicalPrescription = ({
  // props parameter
  //these props are passed through App.js
  treatId,
  treatCourseId,
  type,
  category,
  name,
  dateIssued,
}) => {
  return (
    <div className="container mb-5">
      <div className="text-center mb-3 border-bottom">
        <h1>Medical Prescription</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Treat ID</th>
            <th scope="col">Treat Course ID</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Category</th>
            <th scope="col">Data Issued</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Displaying th props in the table structure */}
            <th scope="row">{treatId}</th>
            <td>{treatCourseId}</td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{category}</td>
            <td>{dateIssued}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

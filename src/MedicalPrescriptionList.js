import React, { useState } from "react";

export const MedicalPrescriptionList = ({ prescriptionList }) => {
  return (
    <div className="containe">
      <div className="mb-2 text-center mt-3">
        <h1>Medical Prescription List</h1>
      </div>

      {/* (Task 2 (2)) array.map function to display all the prescription list. 
       Since, prescription list is an array of object, map is used to loop throw the array. 
      And the data is an JSON object i used key index to access data of each object value presented 
      in array
      */}
      {prescriptionList.map((item, index) => (
        <ul className="list-group mb-4" key={index}>
          <li className="list-group-item list-group-item-action">
            <b>Treat Id:</b> {item.treatId}
          </li>
          <li className="list-group-item list-group-item-action ">
            <b>Treat Course Id:</b> {item.treatCourseId}
          </li>
          <li className="list-group-item list-group-item-action">
            <b>Name:</b> {item.name}
          </li>
          <li className="list-group-item list-group-item-action">
            <b>Type:</b> {item.type}
          </li>
          <li className="list-group-item list-group-item-action">
            <b>Category:</b> {item.category}
          </li>
          <li className="list-group-item list-group-item-action">
            <b>Date Issued:</b> {item.dateIssued}
          </li>
        </ul>
      ))}
    </div>
  );
};

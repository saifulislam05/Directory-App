import React from "react";

const TableHead = () => {
  return (
    <thead className="bg-primary text-primary-content">
      <tr className="*:border *:text-center">
        <th>Name</th>
        <th>Date of Birth</th>
        <th>Aadhaar Number</th>
        <th>Mobile Number</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHead;

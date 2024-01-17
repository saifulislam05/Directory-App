// TableBody.jsx
import React from "react";

const TableBody = ({ data, setData }) => {
  const deleteHandler = (id) => {
    setData(() => {
      const filteredData = data.filter((item) => item.id !== id);
      localStorage.setItem("Entries", JSON.stringify(filteredData));
      return filteredData;
    });
  };
  return (
    <tbody className="bg-accent text-accent-content">
      {data.map((item) => {
        const { id, name, dateOfBirth, aadharNumber, mobileNumber, age } = item;
        return (
          <tr key={id} className="*:border *:text-center">
            <th>{name}</th>
            <td>{dateOfBirth}</td>
            <td>{aadharNumber}</td>
            <td>{mobileNumber}</td>
            <td>{age}</td>
            <td>
              {" "}
              <button
                className="btn btn-xs btn-error"
                onClick={() => deleteHandler(id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;

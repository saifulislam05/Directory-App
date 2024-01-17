// TableBody.jsx
import React from "react";

const TableBody = () => {
  return (
    <tbody className="bg-accent text-accent-content">
      <tr className="*:border *:text-center">
        <th>Saiful Islam</th>
        <td>07/12/2001</td>
        <td>123456789987</td>
        <td>7586066768</td>
        <td>22</td>
        <td> <button className="btn btn-xs btn-error">Delete</button></td>
      </tr>
    </tbody>
  );
};

export default TableBody;

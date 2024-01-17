import React, { useState } from "react";

const InputTableRow = ({addEntry}) => {
  const [name, setName] = useState("");
  return (
    <tbody className="bg-accent text-accent-content">
      <tr className="*:border ">
        <td>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input input-sm input-primary border-2 bg-transparent outline-none focus:outline-none rounded-md w-full placeholder:text-neutral"
          />
        </td>
        <td>
          <input
            type="date"
            className="input input-sm input-primary border-2 bg-transparent outline-none focus:outline-none rounded-md w-full placeholder:text-neutral"
          />
        </td>
        <td>
          <input
            type="number"
            min="12"
            max="12"
            placeholder="Aadhar Number"
            className="input input-sm input-primary border-2 bg-transparent outline-none focus:outline-none rounded-md w-full placeholder:text-neutral"
          />
        </td>

        <td>
          <input
            type="number"
            min="10"
            max="10"
            placeholder="Mobile Number"
            className="input input-sm input-primary border-2 bg-transparent outline-none focus:outline-none rounded-md w-full placeholder:text-neutral"
          />
        </td>

        <td colSpan="2" className="">
          <div className="flex justify-center items-center">
            <button className="btn btn-primary btn-sm px-5 w-fit mx-auto">
              Save
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default InputTableRow;

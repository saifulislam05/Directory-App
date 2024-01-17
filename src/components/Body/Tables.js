
import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import InputTableRow from "./InputTableRow";

const Tables = () => {
  const [visibleInput, setVisibleInput] = useState(false);

  return (
    <div className="overflow-x-auto">
      <table className="table border-collapse border border-primary-content overflow-hidden rounded-xl ">
        <TableHead />
        <TableBody />

        {visibleInput && <InputTableRow/>}
      </table>
      <div className="w-full flex justify-center items-center mt-4">

      <button className="btn btn-sm btn-primary w-fit mx-auto" onClick={()=>setVisibleInput(true)}>Add New Entry</button>
      </div>
    </div>
  );
};

export default Tables;

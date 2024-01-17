import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import InputTableRow from "./InputTableRow";

const Tables = () => {
  const [inputVisibility, setInputVisibility] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storageData = localStorage.getItem("Entries");
    if (storageData) {
      setData(JSON.parse(storageData));
    }
  }, []);

  useEffect(() => {
    setInputVisibility(false);
  },[data])

  return (
    <div className="overflow-x-auto">
      <table className="table border-collapse border border-primary-content overflow-hidden rounded-xl ">
        <TableHead />
        <TableBody data={data} setData={setData} />

        {inputVisibility && <InputTableRow setData={setData} setInputVisibility={setInputVisibility} />}
      </table>
      {data.length === 0 && <p className="text-lg text-warning text-center mt-4">No Data Found!</p>}
      <div className="w-full flex justify-center items-center mt-4">
        <button
          className="btn btn-sm btn-primary w-fit mx-auto"
          onClick={() => setInputVisibility(true)}
        >
          Add New Entry
        </button>
      </div>
    </div>
  );
};

export default Tables;

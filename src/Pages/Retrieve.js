import React, { useState } from "react";

const Retrieve = () => {
  const [aadhaarInput, setAadhaarInput] = useState("");
  return (
    <div className="w-11/12 mx-auto ">
      <h1 className="text-xl font-bold w-fit mx-auto border-b-2 pb-2 my-4">
        Retrieve Information
      </h1>
      <div className="">
        <div className="w-full flex flex-col md:flex-row justify-center items-center mx-auto gap-6">
          <input
            type="text"
            placeholder="Find with Aadhaar Number"
            className="input input-primary min-w-64"
          />
          <button className="btn btn-primary px-9 text-lg">Find</button>
        </div>
        <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto mt-10">
          <div className="card-body">
            <table>
              <tbody className="text-lg font-semibold">
                <tr>
                  <td>Name :</td>
                  <td>Saiful Islam</td>
                </tr>
                <tr>
                  <td>Date Of Birth :</td>
                  <td>07/12/2001</td>
                </tr>
                <tr>
                  <td>Aadhaar Number :</td>
                  <td>000012222111</td>
                </tr>
                <tr>
                  <td>Mobile Number :</td>
                  <td>000012222111</td>
                </tr>
                <tr>
                  <td>Age :</td>
                  <td>22 years</td>
                </tr>
              </tbody>
            </table>

            {/* <h2 className="card-title">Name: Saiful Islam</h2>
            <h2 className="card-title">Date Of Birth: 07/12/2001</h2>
            <h2 className="card-title">Aadhaar No.: 000012222111</h2>
            <h2 className="card-title">Mobile No.: 000012222111</h2>
            <h2 className="card-title">Age: 22 Years</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retrieve;

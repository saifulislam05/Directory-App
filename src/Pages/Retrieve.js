import React, { useState } from "react";
import InfoCard from "../components/Body/InfoCard";

const Retrieve = () => {
  const [aadhaarInput, setAadhaarInput] = useState("");
  const [info, setInfo] = useState({});
  const [isFound, setIsFound] = useState(false);
  const [incorrectAadhar, setIncorrectAadhar] = useState(false);

  const findHandler = () => {
    if (aadhaarInput.length !== 12) {
      setIncorrectAadhar(true);
      return;
    }

    setIsFound(false);
    const entries = localStorage.getItem("Entries");
    const parsedData = JSON.parse(entries);
    const foundedData = parsedData.find(
      (item) => item.aadharNumber === aadhaarInput
    );

    setIsFound(true);
    setInfo(foundedData);
  };

  const inputHandler = (e) => {
    const inputValue = e.target.value;
    const isInputValid = inputValue.length === 12;

    setIncorrectAadhar(!isInputValid);
    setAadhaarInput(inputValue);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-xl font-bold w-fit mx-auto border-b-2 pb-2 my-4">
        Retrieve Information
      </h1>
      <div className="">
        <div className="w-full flex flex-col md:flex-row justify-center items-center mx-auto gap-6">
          <input
            type="text"
            placeholder="Find with Aadhaar Number"
            className={`input input-primary min-w-64 ${
              incorrectAadhar ? "input-error" : ""
            }`}
            value={aadhaarInput}
            onChange={inputHandler}
          />
          <button
            className="btn btn-primary px-9 text-lg"
            onClick={findHandler}
          >
            Find
          </button>
        </div>
        {isFound ? (
          info !== undefined ? (
            <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto mt-10">
              <div className="card-body">
                <InfoCard info={info} />
              </div>
            </div>
          ) : (
            <p className="text-center text-xl font-bold mt-10 text-error">
              No Match Found!
            </p>
          )
        ) : null}
      </div>
    </div>
  );
};


export default Retrieve;

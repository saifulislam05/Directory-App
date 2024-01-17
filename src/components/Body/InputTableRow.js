import React, { useState } from "react";
import { nanoid } from "nanoid";

const InputTableRow = ({ setData, setInputVisibility }) => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const calculateAge = (dob) => {
    const birthdate = new Date(dob);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthdate.getFullYear();

    if (
      currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDate() < birthdate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSave = () => {
    setIsFormValid(false);
    console.log(Date());
    if (
      name &&
      dateOfBirth &&
      aadharNumber.toString().length === 12 &&
      mobileNumber.toString().length === 10
    ) {
      const age = calculateAge(dateOfBirth);
      const newEntry = {
        id:nanoid(),
        name,
        dateOfBirth,
        aadharNumber,
        mobileNumber,
        age,
      };

      setData((prevData) => {
        localStorage.setItem(
          "Entries",
          JSON.stringify([...prevData, newEntry])
        );
        return [...prevData, newEntry];
      });

      setName("");
      setDateOfBirth("");
      setAadharNumber("");
      setMobileNumber("");
    } else {
      setIsFormValid(true);
    }
  };

  const handleCancel = () => {
    setName("");
    setDateOfBirth("");
    setAadharNumber("");
    setMobileNumber("");
    setInputVisibility(false);
  };

  return (
    <tbody className="bg-accent text-accent-content">
      <tr className="*:border ">
        <td>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className={`input input-sm input-primary border-2 bg-transparent outline-none focus:outline-none rounded-md w-full placeholder:text-neutral ${
              isFormValid && !name ? "border-error" : ""
            }`}
          />
        </td>
        <td>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className={`input input-sm input-primary border-2 bg-transparent outline-none focus:outline-none rounded-md w-full placeholder:text-neutral ${
              isFormValid && !dateOfBirth ? "border-error" : ""
            }`}
          />
        </td>
        <td>
          <input
            type="number"
            min="12"
            max="12"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            placeholder="Aadhar Number"
            className={`input input-sm input-primary border-2 bg-transparent outline-none focus:outline-none rounded-md w-full placeholder:text-neutral ${
              isFormValid && aadharNumber.length !== 12 ? "border-error" : ""
            }`}
          />
        </td>

        <td>
          <input
            type="number"
            min="10"
            max="10"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Mobile Number"
            className={`input input-sm input-primary border-2 bg-transparent outline-none focus:outline-none rounded-md w-full placeholder:text-neutral ${
              isFormValid && mobileNumber !== 10 ? "border-error" : ""
            }`}
          />
        </td>

        <td colSpan="2" className="">
          <div className="flex justify-center items-center">
            <button
              className={`btn btn-primary btn-sm px-5 w-fit mx-auto `}
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className={`btn btn-error btn-sm px-5 w-fit mx-auto `}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default InputTableRow;

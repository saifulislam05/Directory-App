import React from 'react'

const InfoCard = ({info}) => {
  return (
    <table>
      <tbody className="text-lg font-semibold">
        <tr>
          <td>Name :</td>
          <td>{info.name}</td>
        </tr>
        <tr>
          <td>Date Of Birth :</td>
          <td>{info.dateOfBirth}</td>
        </tr>
        <tr>
          <td>Aadhaar Number :</td>
          <td>{info.aadharNumber}</td>
        </tr>
        <tr>
          <td>Mobile Number :</td>
          <td>{info.mobileNumber}</td>
        </tr>
        <tr>
          <td>Age :</td>
          <td>{info.age} years</td>
        </tr>
      </tbody>
    </table>
  );
}

export default InfoCard
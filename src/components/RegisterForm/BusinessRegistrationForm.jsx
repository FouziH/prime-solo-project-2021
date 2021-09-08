import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function BusinessRegistrationForm() {
    const [companyName, setCompanyName] = useState('')
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = usState('')


    return (
      <form onSubmit={registerCompany}>
        <h2>Register Company</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="CompanyName">Company Name</label>
          <input
            type="company name"
            name="CompanyName"
            value={CompanyName}
            required
            onChange={(event) => setCompanyName(event.target.value)}
          />
          <input
            type="address"
            name="address"
            value={address}
            required
            onChange={(event) => setAddress(event.target.value)}
          />
          <input
            type="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            required
            onChange={(event) => phoneNumber(event.target.value)}
          />
          <input
            type="city"
            name="city"
            value={city}
            required
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            type="state"
            name="state"
            value={state}
            required
            onChange={(event) => setState(event.target.value)}
          />
          <input
            type="zip"
            name="zip"
            value={zip}
            required
            onChange={(event) => setZip(event.target.value)}
          />
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="cancel" />
        </div>
      </form>
    );
}

export default BusinessRegistrationForm;

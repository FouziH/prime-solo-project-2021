import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, NavDropdown, Container} from "react-bootstrap";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useHistory } from "react-router";

function RegisterForm() {
  const history = useHistory();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailAddress, setEmailAddress] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();
    console.log(emailAddress)

    dispatch({
      type: 'REGISTER',
      payload: {
        username: userName,
        password: password,
        emailaddress: emailAddress
      },
    });
  }; // end registerUser

  return (
    <>
    <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand onClick={() => history.push('/')}>Law Audit</Navbar.Brand>
          </Container>
          <NavDropdown title={< IoReorderThreeSharp />} id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => history.push('/')}>Home</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </Container>
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={userName}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="emailAddress"
            value={emailAddress}
            required
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
      
    </form>
    </>
  );
}

export default RegisterForm;

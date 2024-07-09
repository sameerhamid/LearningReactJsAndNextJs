import React, { useState } from 'react'
import { InputNames } from './inputNames';

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')

  const [enteredValues, setEnteredValues] = useState({
    [InputNames.EMAIL]: '',
    [InputNames.PASSWORD]: '',
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("input values:>>>", enteredValues);

  }

  // const handleEmailChange = (event) => {
  //   setEnteredEmail(event.target.value)
  // }
  // const handlePasswordChange = (event) => {
  //   setEnteredPassword(event.target.value)
  // }

  const handleChange = (identifier, event) => {
    setEnteredValues(prevValues => {
      return { ...prevValues, [identifier]: event.target.value }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
            value={enteredValues.email}
            onChange={(event) => handleChange(InputNames.EMAIL, event)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            value={enteredValues.password}
            onChange={(event) => handleChange(InputNames.PASSWORD, event)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

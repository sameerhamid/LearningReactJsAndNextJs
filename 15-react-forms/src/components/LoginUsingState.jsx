import React, { useState } from 'react'
import { InputNames } from './inputNames';

export default function LoginUsingState() {
    // const [enteredEmail, setEnteredEmail] = useState('')
    // const [enteredPassword, setEnteredPassword] = useState('')

    const [enteredValues, setEnteredValues] = useState({
        [InputNames.EMAIL]: '',
        [InputNames.PASSWORD]: '',
    })

    const emailIsValid = enteredValues[InputNames.EMAIL] !== '' && !enteredValues[InputNames.EMAIL].includes('@')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("input values:>>>", enteredValues);

        // reset the input values on submit

        setEnteredValues({
            [InputNames.EMAIL]: '',
            [InputNames.PASSWORD]: '',
        })
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
                        value={enteredValues[InputNames.EMAIL]}
                        onChange={(event) => handleChange(InputNames.EMAIL, event)}
                    />
                    <div className="control-error">
                        {emailIsValid && <p>Please enter a valid email address.</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password"
                        value={enteredValues[InputNames.PASSWORD]}
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

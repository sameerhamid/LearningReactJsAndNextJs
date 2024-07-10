import React from "react";
import { InputNames } from "./inputNames";
import CustomInput from "./CustomInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import useInput from "../hooks/useInput";

export default function LoginUsingState() {
    // const [enteredEmail, setEnteredEmail] = useState('')
    // const [enteredPassword, setEnteredPassword] = useState('')

    // const [enteredValues, setEnteredValues] = useState({
    //     [InputNames.EMAIL]: "",
    //     [InputNames.PASSWORD]: "",
    // });
    // const [didEdit, setDidEdit] = useState({
    //     [InputNames.EMAIL]: false,
    //     [InputNames.PASSWORD]: false,
    // });

    const {
        value: eamilValue,
        handleChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailIsInvalid,
        handleResetValue: handleResetEmail
    } = useInput("", (val) => isEmail(val) && isNotEmpty(val));

    const {
        value: passwordValue,
        handleChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordIsInvalid,
        handleResetValue: handleResetPassword
    } = useInput("", (val) => hasMinLength(val, 6) && isNotEmpty(val)
    );


    // const emailIsInvalid =
    //     (didEdit[InputNames.EMAIL] && !isEmail(enteredValues[InputNames.EMAIL])) ||
    //     !isNotEmpty(enteredValues[InputNames.EMAIL]);

    // const passwordIsInvalid =
    //     (didEdit[InputNames.PASSWORD] &&
    //         !hasMinLength(enteredValues[InputNames.PASSWORD], 6)) ||
    //     !isNotEmpty(enteredValues[InputNames.PASSWORD]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("input values:>>>", enteredValues);

        // // reset the input values on submit

        if (passwordIsInvalid || emailIsInvalid) {
            return
        }
        console.log("email:>>>", eamilValue);
        console.log("password:>>>", passwordValue);
        handleResetEmail()
        handleResetPassword()
        // setEnteredValues({
        //     [InputNames.EMAIL]: "",
        //     [InputNames.PASSWORD]: "",
        // });
    };

    // const handleInputBlur = (identifier) => {
    //     setDidEdit((prevState) => {
    //         return {
    //             ...prevState,
    //             [identifier]: true,
    //         };
    //     });
    // };

    // const handleEmailChange = (event) => {
    //   setEnteredEmail(event.target.value)
    // }
    // const handlePasswordChange = (event) => {
    //   setEnteredPassword(event.target.value)
    // }

    // const handleChange = (identifier, event) => {
    //     setEnteredValues((prevValues) => {
    //         return { ...prevValues, [identifier]: event.target.value };
    //     });

    //     setDidEdit((prevState) => {
    //         return {
    //             ...prevState,
    //             [identifier]: false,
    //         };
    //     });
    // };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <CustomInput
                    label="Email"
                    id={InputNames.EMAIL}
                    type="email"
                    name={InputNames.EMAIL}
                    value={eamilValue}
                    onChange={handleEmailChange}
                    //  onBlur is called when a user leaves an input field:
                    onBlur={handleEmailBlur}
                    error={emailIsInvalid && "Please enter a valid email!"}
                />

                {/* <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"
                        value={enteredValues[InputNames.EMAIL]}
                        onChange={(event) => handleChange(InputNames.EMAIL, event)}
                        //  onBlur is called when a user leaves an input field:
                        onBlur={() => handleInputBlur(InputNames.EMAIL)}
                    />
                    <div className="control-error">
                        {emailIsValid && <p>Please enter a valid email address.</p>}
                    </div>
                </div> */}

                <CustomInput
                    label="Password"
                    id={InputNames.PASSWORD}
                    type="password"
                    name={InputNames.PASSWORD}
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    //  onBlur is called when a user leaves an input field:
                    onBlur={handlePasswordBlur}
                    error={passwordIsInvalid && "Please enter a valid password!"}
                />

                {/* <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password"
                        value={enteredValues[InputNames.PASSWORD]}
                        onChange={(event) => handleChange(InputNames.PASSWORD, event)}
                    />
                </div> */}
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}

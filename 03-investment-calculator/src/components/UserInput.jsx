import React from "react";
import { InputFieldNames } from "../util/inputFieldNames";

function UserInput({ userInput, handleChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor={InputFieldNames.INITIAL_INVESTMENT}>
                        Initial Input
                    </label>
                    <input
                        value={userInput.initialInvestment}
                        type="number"
                        required
                        id={InputFieldNames.INITIAL_INVESTMENT}
                        onChange={(event) =>
                            handleChange(
                                InputFieldNames.INITIAL_INVESTMENT,
                                event.target.value
                            )
                        }
                    />
                </p>
                <p>
                    <label htmlFor={InputFieldNames.ANNUAL_INVESTMENT}>
                        Annual Investment
                    </label>
                    <input
                        value={userInput.annualInvestment}
                        type="number"
                        required
                        id={InputFieldNames.ANNUAL_INVESTMENT}
                        onChange={(event) =>
                            handleChange(
                                InputFieldNames.ANNUAL_INVESTMENT,
                                event.target.value
                            )
                        }
                    />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor={InputFieldNames.EXPECTED_RETRUN}>
                        Expected Return
                    </label>
                    <input
                        value={userInput.expectedReturn}
                        type="number"
                        required
                        id={InputFieldNames.EXPECTED_RETRUN}
                        onChange={(event) =>
                            handleChange(
                                InputFieldNames.EXPECTED_RETRUN,
                                event.target.value
                            )
                        }
                    />
                </p>
                <p>
                    <label htmlFor={InputFieldNames.DURATION}>Duration</label>
                    <input
                        value={userInput.duration}
                        type="number"
                        required
                        id={InputFieldNames.DURATION}
                        onChange={(event) =>
                            handleChange(
                                InputFieldNames.DURATION,
                                event.target.value
                            )
                        }
                    />
                </p>
            </div>
        </section>
    );
}

export default UserInput;

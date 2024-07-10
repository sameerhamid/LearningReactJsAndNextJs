import React, { useRef, useState } from 'react'
export default function Login() {

  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValid = emailRef.current.value.includes('@')
    if (!emailValid) {
      setIsEmailInvalid(true)
      return
    }

    setIsEmailInvalid(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" ref={emailRef} />
          <div className="control-error">
            {isEmailInvalid && <p>Please enter a valid email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

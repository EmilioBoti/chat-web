import { useState, useEffect } from "react"

import "../../App.css"
import { login } from "../../domain/auth/authLogic"

export function FormLogin() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if(error) {
      console.log("An error ocurr")
    }
  }, [error])

  function sutmit(e) {
    e.preventDefault()

    login({ email, password }, (state) => {
      state
        ? window.location.pathname = "/home"
        : setError("Email or password might be incorrect.")
    })
  }
  
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="login-title">Welcome to login page</h1>
        <form action="" className="form" onSubmit={sutmit}>
          <div className="input-box error">
            <span>{error}</span>
          </div>
          <div className="input-box">
            <input
              className="input-login"
              type="email"
              placeholder="Email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="input-box">
            <input
              className="input-login"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="input-box">
            <button id="btnLogin">Log in</button>
            <small id="password-forget">Has you forgotten your password?</small>
          </div>
        </form>
      </div>
    </div>
  )
}

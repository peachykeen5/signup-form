import "./App.css";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isConfirmSecure, setIsConfirmSecure] = useState(true);

  const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validate = () => {
    if (!password || !confirmPassword || !email) {
      alert("Please fill out all required fields");
    } else if (!emailRe.test(email)) {
      alert("Email is not valid");
    } else if (password.length < 12 || confirmPassword.length < 12) {
      alert("Passwords must be at least 12 characters");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("success!");
    }
  };

  return (
    <div className="App" style={{ display: "flex", padding: "10rem" }}>
      <img
        src={
          "https://s3-us-west-2.amazonaws.com/bt-prod-marketing-site-bananatag.com/wp-content/uploads/2019/12/12094636/bananatag-logo.png"
        }
        alt="Bananatag-logo"
        style={{
          maxWidth: "35px",
          position: "absolute",
          top: "5rem",
          left: "10rem",
        }}
      />
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <h1 style={{ margin: 2 }}>Sign up</h1>
        <p style={{ marginTop: 5 }}>Welcome to Bananatag!</p>
        <div
          className="form-group"
          style={{ display: "flex", flexDirection: "column", width: "150%" }}
        >
          <input
            id="email-field"
            type="text"
            className="form-control"
            name="email"
            required
            placeholder="Email (Account ID)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              id="password-field"
              type={isPasswordSecure ? "password" : "text"}
              className="form-control"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={(p) => setPassword(p.target.value)}
              size="12"
              style={{ flex: 2 }}
            />
            <span toggle="#password-field" className="toggle-password">
              <p style={{ margin: 0, color: "#008ada", fontSize: 14}} onClick={() => setIsPasswordSecure(!isPasswordSecure)}>
                Show
              </p>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              id="confirm-password-field"
              type={isConfirmSecure ? "password" : "text"}
              className="form-control"
              name="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              required
              onChange={(c) => setConfirmPassword(c.target.value)}
              size={12}
              style={{ flex: 2 }}
            />
            <span toggle="#password-field" className="toggle-password">
              <p style={{ margin: 0, color: "#008ada", fontSize: 14}} onClick={() => setIsConfirmSecure(!isConfirmSecure)}>
                Show
              </p>
            </span>
          </div>
          <input
            className="submit-button"
            type="submit"
            value="Create account"
            style={{
              backgroundColor: "#008ada",
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            onClick={() => validate()}
          />
        </div>

      </div>
    </div>
  );
}

export default App;

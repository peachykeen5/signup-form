import React, { useState } from "react";
import { Input } from "./Inputs";

export const SignupForm = () => {
  const [signUpState, setSignupState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validate = () => {
    if (
      !signUpState.password ||
      !signUpState.confirmPassword ||
      !signUpState.email
    ) {
      alert("Please fill out all required fields");
    } else if (!emailRe.test(signUpState.email)) {
      alert("Email is not valid");
    } else if (
      signUpState.password.length < 11 ||
      signUpState.confirmPassword.length < 11
    ) {
      alert("Passwords must be at least 12 characters");
    } else if (signUpState.password !== signUpState.confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("success!");
    }
  };

  return (
    <div
      className="form-group"
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <Input
        inputType="email"
        placeholder="Email (Account ID)"
        onChange={(e) => {
          setSignupState({ ...signUpState, email: e });
        }}
      />
      <Input
        inputType="password"
        placeholder="Password"
        onChange={(e) => setSignupState({ ...signUpState, password: e })}
      />
      <Input
        inputType="password"
        placeholder="Confirm password"
        onChange={(e) => setSignupState({ ...signUpState, confirmPassword: e })}
      />
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
  );
};
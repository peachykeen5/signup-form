import "./App.css";
import React from "react";
import { SignupForm } from "./components/Form";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        paddingTop: "10rem",
        paddingLeft: "10rem",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <img
        src={
          "https://s3-us-west-2.amazonaws.com/bt-prod-marketing-site-bananatag.com/wp-content/uploads/2019/12/12094636/bananatag-logo.png"
        }
        alt="Bananatag-logo"
        style={{
          maxWidth: "35px",
          marginBottom: "2rem",
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
        <SignupForm />
      </div>
      <footer
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "linear-gradient(to right, red , yellow)",
        }}
      ></footer>
    </div>
  );
}

export default App;

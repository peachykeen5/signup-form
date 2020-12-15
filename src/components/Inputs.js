import React, { useEffect, useState } from "react";

export const Input = ({ inputType, placeholder, onChange }) => {
  const [isSecure, setIsSecure] = useState(true);
  const [type, setType] = useState("text");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (inputType === "password" && isSecure) {
      setType("password");
    } else {
      setType("text");
    }
  }, [inputType, isSecure]);

  const handleChange = (e) => {
    setInput(e);
    return onChange(input);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        id={`${placeholder}-field`}
        type={type}
        className="form-control"
        name={placeholder}
        placeholder={placeholder}
        value={input}
        required
        onChange={(e) => handleChange(e.target.value)}
        size={12}
        style={{ flex: 2, fontSize: 14 }}
      />
      {inputType === "password" ? (
        <span toggle="#password-field" className="toggle-password">
          <p
            style={{
              margin: 0,
              color: "#008ada",
              fontSize: 14,
            }}
            onClick={() => setIsSecure(!isSecure)}
          >
            Show
          </p>
        </span>
      ) : null}
    </div>
  );
};

import React from "react";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import "./input.css";

const InputBox = ({
  placeholder,
  icon,
  type,
  value,
  onChange,
  onKeyUp,
  required,
  isSubmit,
}) => {
  const [Error, setError] = useState(false);
  const [length, setLength] = useState(1);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (length === 1) setError(isSubmit);
  }, [isSubmit, length]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <>
      <div className="input-wraper">
        <div className="container">
          <span className="icon">{icon}</span>
          <input
            type={type !== "" && !isPasswordVisible ? type : "text"}
            placeholder={placeholder}
            className="input"
            value={value}
            onChange={(event) => {
              if (event.target.value.length <= 0 && required === true) {
                setLength(event.target.value.length);
                setError(true);
              } else {
                setLength(event.target.value.length);
                setError(false);
              }
              onChange(event.target.value);
            }}
            onKeyUp={onKeyUp}
            required={required}
          />
          {type === "password" && (
            <span className="toggleIcon" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
      </div>
      <ErrorMsg
        value={value}
        valid={!Error}
        msg={"Please Enter " + placeholder + " "}
      />
    </>
  );
};

export default InputBox;

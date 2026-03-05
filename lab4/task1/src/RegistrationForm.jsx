import React, { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  const [success, setSuccess] = useState(false);
  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) return "Invalid email format";
    return "";
  };

  const validateAge = (value) => {
    if (!value) return "Age is required";
    if (isNaN(value)) return "Age must be a number";
    if (Number(value) < 18) return "You must be at least 18";
    return "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const nError = validateName(name);
    const eError = validateEmail(email);
    const aError = validateAge(age);

    setNameError(nError);
    setEmailError(eError);
    setAgeError(aError);

    if (nError || eError || aError) {
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            const value = e.target.value;
            setName(value);
            setNameError(validateName(value));
          }}
        />
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}

        {}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
            setEmailError(validateEmail(value));
          }}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}

        {}
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            const value = e.target.value;
            setAge(value);
            setAgeError(validateAge(value));
          }}
        />
        {ageError && <p style={{ color: "red" }}>{ageError}</p>}

        <button type="submit">Submit</button>
      </form>

      {success && (
        <p style={{ color: "green" }}>
          Registration successful!
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;
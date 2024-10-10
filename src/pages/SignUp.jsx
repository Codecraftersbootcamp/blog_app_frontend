/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setIsLoggedIn, setUser }) {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    try {
      //check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const response = await fetch(
        "http://localhost:3000/auth/create-account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
          }),
        }
      );
      const result = await response.json();

      const user = result.user;

      const userString = JSON.stringify(user);

      localStorage.setItem("user", userString);

      setIsLoggedIn(true);
      setUser(user);

      navigate("/");
      alert(result.message);
    } catch (error) {
      console.log(error.message);
      alert("Error has occurred");
    }
  }

  return (
    <div className="auth-container">
      <form className="form" onSubmit={handleSignUp}>
        <h1 className="form-title">Blog app</h1>
        <h2 className="form-sub-title">Sign Up</h2>

        <div className="inputs-container">
          <input
            className="form-input"
            placeholder="Enter First Name"
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
          <input
            className="form-input"
            placeholder="Enter last name"
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            required
          />
          <input
            className="form-input"
            placeholder="Enter email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="form-input"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="form-input"
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button className="submit-button">Sign up</button>

        <p className="form-info">
          Already have an account? <span>Log in here</span>{" "}
        </p>
      </form>
    </div>
  );
}

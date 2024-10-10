import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-container">
      <form className="form">
        <h1 className="form-title">Blog app</h1>
        <h2 className="form-sub-title">Login</h2>

        <div className="inputs-container">
          <input
            className="form-input"
            placeholder="Enter email"
            type="email"
          />
          <input
            className="form-input"
            placeholder="Enter password"
            type="password"
          />
        </div>

        <button className="submit-button">Login</button>
        <p className="form-info">
          Don&apos;t have an account? <Link to={"/sign-up"}>Sign up here</Link>
        </p>
      </form>
    </div>
  );
}

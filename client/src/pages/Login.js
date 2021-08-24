import React from "react";
import "./Login.css";

function LogIn() {
  return (
    <div className="auth-page">
      <nav>
        <h1>
          <a href="/">ECI Dashboard</a>
        </h1>
        <ul>
          <li>
            <a href="/signup" class="btn">
              Back
            </a>
          </li>
        </ul>
      </nav>
      <form action="/signup">
        <h2>Login</h2>
        <label for="email">Email</label>
        <input type="text" name="email" required />
        <div class="email error"></div>
        <label for="password">Password</label>
        <input type="password" name="password" required />
        <div class="password error"></div>
        <button>login</button>
      </form>
      <footer>Siemens Digital Industries Software</footer>
    </div>
  );
}

export default LogIn;

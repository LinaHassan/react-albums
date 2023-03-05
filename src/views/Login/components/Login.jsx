import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import { AuthenticationService } from "../../../services";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [formState, setFormState] = useState(false);

  useEffect(() => {
    if (!formState) {
      AuthenticationService.logout();
    }
  }, [formState]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const verifiedUser = await AuthService.login(email);

      if (!verifiedUser) {
        setErrMsg("Invalid Credentials!");
      } else {
        navigate("/albums");
        setFormState(true);
      }
    } catch (error) {
      setErrMsg("Something went wrong.");
    }
  };
  return (
    <main className="loginMain" onSubmit={handleSubmit}>
      <form className="form">
        <h1 className="header">Log in</h1>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
        <p>{errMsg}</p>
      </form>
    </main>
  );
};

export default Login;

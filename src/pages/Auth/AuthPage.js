import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <div className="auth-container">
      <h1>SIGN IN or SIGN UP</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </div>
  );
}

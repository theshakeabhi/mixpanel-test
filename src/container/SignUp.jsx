import { useState } from "react";
import mixpanel from "mixpanel-browser";

const SignUp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    mixpanel.track("Sign up", {
      source: "Check?",
      isLoggedIn: isLoggedIn,
    });
  };
  return (
    <div>
      <button disabled={isLoggedIn} onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
};

export default SignUp;

import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
          className="opacity-97 h-full truncate"
        />
      </div>

      <form className="absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white w-[450px] px-[68px] pt-[60px] pb-[40px] bg-opacity-90">
        <h1 className="font-semibold h-[39px] w-[314px] text-[32px] mb-7">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="mb-5 w-[314px] px-[20px] h-[50px] pt-[4px] bg-[#333] rounded-md text-start"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="mb-5 w-[314px] px-[20px] h-[50px] pt-[4px] bg-[#333] rounded-md text-start"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-[314px] px-[20px] h-[50px] pt-[2px] bg-[#333] rounded-md text-start"
        />
        <button className="w-[314px] h-[48px] pb-4 pt-3 mt-6 mb-3 bg-[#e50914] text-white align-text-top font-medium rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="pt-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

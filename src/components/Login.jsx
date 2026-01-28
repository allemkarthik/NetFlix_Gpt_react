import Header from "./Header";
import bgimage from "../assets/Bg-image.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignIn = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgimage} alt="bgimage"></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New User? Sign Up! Now"
            : "ALready Registered! Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;

import Header from "./Header";
import bgimage from "../assets/Bg-image.jpg";
import { useRef, useState } from "react";
import { checkvalidData } from "../utils/validate.js";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const handlebuttonClick = () => {
    //validate the form data
    checkvalidData();
  };
  const toggleSignIn = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgimage} alt="bgimage"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
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
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handlebuttonClick}
        >
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

import React, { useEffect, useState } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removerUser } from "../utils/store/userDataSlice";
import { SUPPORTED_LANGUAGES, userAvatar } from "../utils/constants";
import { toggleGptSearchView } from "../utils/store/gptSlice";
import { changeLanguage } from "../utils/store/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptShowVlaue = useSelector((store) => store.gpt.showGptSearch);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removerUser());
        navigate("/");
      }
    });
    // unsubscribe when the component is unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    //toggle Gpt search
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full  px-2 sm:px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      {/* Logo on left */}
      <img className="w-28 sm:w-32 md:w-48" src={logo} alt="logo" />

      {/* User controls */}
      {user && (
        <div className="flex items-center w-auto relative">
          {/* Mobile: avatar left, actions right */}
          <div className="flex md:hidden items-center space-x-2">
            <img
              src={userAvatar}
              alt="avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />

            {/* Action icons/buttons (appear on tap or always visible) */}
            {menuOpen && (
              <div className="flex flex-col space-y-1 bg-gray-900 text-white rounded-md shadow-lg p-2 absolute top-12 right-0 w-40">
                <button
                  className="text-left py-1 px-2 hover:bg-gray-800 rounded"
                  onClick={handleGptSearch}
                >
                  {gptShowVlaue ? "HomePage" : "GptSearch"}
                </button>
                <button
                  className="text-left py-1 px-2 hover:bg-gray-800 rounded"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
                <select
                  className="bg-gray-800 text-white p-1 rounded"
                  onChange={handleLanguageChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Language
                  </option>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Desktop / tablet: full controls */}
          <div className="hidden md:flex flex-col sm:flex-row items-center sm:space-x-2 md:space-x-4 p-2">
            {gptShowVlaue && (
              <select
                className="p-2 m-1 sm:m-0 bg-gray-900 text-white rounded-md w-full sm:w-auto text-sm sm:text-base"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-1 px-3 sm:py-2 sm:px-4 md:px-6 mx-0 sm:mx-2 my-1 sm:my-0 bg-purple-800 text-white rounded-lg w-full sm:w-auto text-sm sm:text-base"
              onClick={handleGptSearch}
            >
              {gptShowVlaue ? "HomePage" : "GptSearch"}
            </button>
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mt-1 sm:mt-0"
              alt="usericon"
              src={userAvatar}
            />
            <button
              onClick={handleSignOut}
              className="text-white font-bold mt-1 sm:mt-0 text-sm sm:text-base"
            >
              (Sign Out) {user.displayName}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

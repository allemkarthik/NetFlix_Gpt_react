import React, { useEffect } from "react";
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
  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={logo} alt="logo"></img>
      {user && (
        <div className="flex p-2">
          <select className="p-2 m-2 bg-gray-900 text-white " onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg "
            onClick={handleGptSearch}
          >
            GPT Search
          </button>
          <img className="w-12 h-12" alt="usericon" src={userAvatar}></img>
          <button onClick={handleSignOut} className="text-white font-bold">
            (Sign Out)
            {/* {user.photoURL} */}
            {user.displayName}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

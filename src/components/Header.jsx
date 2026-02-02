import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removerUser } from "../utils/store/userDataSlice";
import { userAvatar } from "../utils/constants";

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
    const unsubscribe=onAuthStateChanged(auth, (user) => {
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
    return ()=> unsubscribe()
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={logo} alt="logo"></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="usericon"
            src={userAvatar}
          ></img>
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

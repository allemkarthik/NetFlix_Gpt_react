import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={logo} alt="logo"></img>
      {user && <div className="flex p-2">
        <img
          className="w-12 h-12"
          alt="usericon"
          src="https://occ-0-1479-1480.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        ></img>
        <button onClick={handleSignOut} className="text-white font-bold">
          (Sign Out)
          {user.displayName}
        </button>
      </div>}
    </div>
  );
};

export default Header;

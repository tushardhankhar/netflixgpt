import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toogleGptSearch } from "../utils/gptSlice";

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  function toggleGPT() {
    dispatch(toogleGptSearch());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayNmae: displayName,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleSignOut(params) {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }
  return (
    <div className="bg-gradient-to-b fixed from-black w-[100vw] p-4 px-12 flex justify-between items-center z-50">
      <img
        className="h-20 opacity-190 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex items-center gap-6">
          <button
            className="text-white bg-red-700 p-4 rounded-xl font-semibold text-lg"
            onClick={toggleGPT}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <div>
            <img
              className="h-12 rounded-full opacity-190 cursor-pointer"
              src="https://media.licdn.com/dms/image/v2/C4E03AQGfKdc_hfPLXQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1625464780130?e=1733356800&v=beta&t=hkfCyQcTlT__YgAnNFl1vnxIvjvMJOj4gS3eMzuBiDk"
              alt="logo"
              onClick={() => setDropDown(true)}
            />
            {dropDown && (
              <div className=" text-white px-10 p-4 absolute right-12 top-24 bg-red-700 ">
                <div className="cursor-pointer" onClick={handleSignOut}>
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

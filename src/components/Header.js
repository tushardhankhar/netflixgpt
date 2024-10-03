import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    // this will be called everytime there is state change in firebase
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
    <div className="bg-gradient-to-b from-black w-[100vw] p-4 flex justify-between items-center">
      <img
        className="h-20 opacity-190 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div>
          <div>
            <img
              className="h-12 rounded-full opacity-190 cursor-pointer"
              src="https://media.licdn.com/dms/image/v2/C4E03AQGfKdc_hfPLXQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1625464780130?e=1733356800&v=beta&t=hkfCyQcTlT__YgAnNFl1vnxIvjvMJOj4gS3eMzuBiDk"
              alt="logo"
              onClick={() => setDropDown(true)}
            />
            {dropDown && (
              <div className="bg-black text-white p-4 absolute right-4">
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

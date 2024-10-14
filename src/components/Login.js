import React, { useState } from "react";
import Header from "./Header";
import { validateCredentials } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const { email, password } = credentials;

  const handleInputChange = (field) => (e) =>
    setCredentials((prev) => ({ ...prev, [field]: e.target.value }));

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrors({})
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const error = validateCredentials(credentials);
    if (Object.keys(error).length !== 0) {
      setErrors(error);
      return;
    }
    if (!isSignInForm) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        );
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const { uid, email, displayName } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
      } catch (error) {
        if(error.code === "auth/email-already-in-use"){
          setErrors({
            "already" : "Email already Exits"
          })
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        );
      } catch (error) {
        if(error.code === "auth/invalid-credential"){
          setErrors({
            "invalid" : "Email or Password Incorrect"
          })
        }
      }
    }
  }

  return (
    <div className='h-[100vh] bg-cover bg-no-repeat bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg")]'>
      <Header />
      <form className="md:w-1/4 w-3/4 bg-opacity-70 flex flex-col items-center gap-8 bg-black p-4 md:p-16 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="font-bold text-xl md:text-3xl w-full">
          {isSignInForm ? "Sign In" : "Register"}
        </h2>
        {!isSignInForm && (
          <input
            placeholder="Name"
            type="text"
            className="bg-black opacity-80 p-2 md:p-4 rounded-md w-full"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        )}
        <div className="w-full">
          <input
            placeholder="Email"
            type="email"
            className="bg-black opacity-80 p-2 md:p-4 rounded-md w-full"
            value={email}
            onChange={handleInputChange("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}{" "}
        </div>
        {/* Conditionally render */}
        <div className="w-full">
          {" "}
          <input
            placeholder="Password"
            type="password"
            className="rounded-md bg-black opacity-80 p-2 md:p-4 w-full text-lg"
            value={password}
            onChange={handleInputChange("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>

        <button
          className={`w-full p-2 md:p-4 rounded-md ${"bg-red-700"}`}
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Register"}
        </button>
        {errors.invalid && (
            <span className="text-red-500 text-sm">{errors.invalid}</span>
          )}
           {errors.already && (
            <span className="text-red-500 text-sm">{errors.already}</span>
          )}
        <h2 className="w-full text-sm md:text-lg">
          {isSignInForm ? " New to Netflix? " : "Already a user? "}
          <span className="font-semibold cursor-pointer" onClick={toggleForm}>
            {isSignInForm ? "Sign up now." : "Sign In now."}
          </span>
        </h2>
      </form>
    </div>
  );
}

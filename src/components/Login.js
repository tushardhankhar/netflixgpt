import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

  const handleInputChange = (field) => (e) =>
    setCredentials((prev) => ({ ...prev, [field]: e.target.value }));

  const isDisabled = !email || !password;

  return (
    <div className='h-[100vh] bg-cover bg-no-repeat bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg")]'>
      <Header />
      <form className="w-1/4 bg-opacity-70 flex flex-col items-center gap-8 bg-black p-16 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="font-bold text-3xl w-full">Sign In</h2>
        <input
          placeholder="Email"
          type="email"
          className="bg-black opacity-80 p-4 rounded-md w-full"
          value={email}
          onChange={handleInputChange("email")}
        />
        <input
          placeholder="Password"
          type="password"
          className="rounded-md bg-black opacity-80 p-4 w-full text-lg"
          value={password}
          onChange={handleInputChange("password")}
        />
        <button
          className={`w-full p-4 rounded-md ${
            isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-red-700"
          }`}
          disabled={isDisabled}
        >
          Sign In
        </button>
        <h2 className="w-full text-lg">
          New to Netflix?{" "}
          <span className="font-semibold cursor-pointer">Sign up now.</span>
        </h2>
      </form>
    </div>
  );
}

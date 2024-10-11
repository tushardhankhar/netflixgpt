import React from "react";
import { client } from "../utils/openai";

export default function SearchComponent() {
//   async function handleSearch(params) {
//     const chatCompletion = await client.chat.completions.create({
//       messages: [{ role: "user", content: "Say this is a test" }],
//       model: "gpt-3.5-turbo",
//     });
//     console.log(chatCompletion)
//   }
  return (
    <div className='h-[100vh] bg-cover  flex justify-center items-center bg-no-repeat bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg")]'>
      <div className="bg-black p-10 rounded-xl flex gap-4 w-1/2">
        <input
          className=" p-4 text-lg font-semibold rounded-lg w-full"
          placeholder="What would you like to search?"
        />
        <button className="bg-red-700 text-white p-4 text-lg font-semibold rounded-lg" onClick={""}>
          Search
        </button>
      </div>
    </div>
  );
}

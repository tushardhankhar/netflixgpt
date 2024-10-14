import React, { useState } from "react";
import { client } from "../utils/openai";

export default function SearchComponent() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  async function handleSearch(params) {
    try {
      setIsLoading(true);
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: "user", content: "Say this is a test" }],
        model: "gpt-3.5-turbo",
      });
      console.log(chatCompletion);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.code === "insufficient_quota") {
        setError("Api Limit Exceeded");
      }
    }
  }
  return (
    <div className='h-[100vh] bg-cover  flex justify-center items-center bg-no-repeat bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg")]'>
      <div className="bg-black p-10 rounded-xl  w-1/2">
        <div className="flex gap-4">
          <input
            className=" p-4 text-lg font-semibold rounded-lg w-full"
            placeholder="What would you like to search?"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-red-700 text-white p-4 text-lg font-semibold rounded-lg"
            onClick={handleSearch}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </div>
        {error ? <h3 className="text-red-700 mt-4">{error}</h3> : null}
      </div>
    </div>
  );
}

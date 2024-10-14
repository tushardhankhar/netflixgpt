import OpenAI from "openai";

console.log("api,",process.env.REACT_APP_OPENAPI_KEY)

export const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAPI_KEY,
  dangerouslyAllowBrowser: true,
});

import OpenAI from "openai";

export const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAPI_KEY,
  dangerouslyAllowBrowser: true,
});

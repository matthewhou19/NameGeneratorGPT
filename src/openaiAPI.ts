import { Configuration, OpenAIApi } from "openai";
export const configuration = new Configuration({
  apiKey: process.env.Openai_API,
});
export const openai = new OpenAIApi(configuration);

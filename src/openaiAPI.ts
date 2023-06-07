import { Configuration, OpenAIApi } from "openai";
export const configuration = new Configuration({
  apiKey: process.env.Openai_API,
});
export const openai = new OpenAIApi(configuration);

export const generateReply = async function (
  propmt: string
): Promise<void | string> {
  if (!configuration.apiKey) {
    alert(
      "OpenAI API key not configured, please follow instructions in README.md"
    );
    return "";
  }

  try {
    console.log(propmt);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: propmt,
      max_tokens: 1257,
      temperature: 0.3,
    })!;
    //const data = await JSON.parse(completion.data.choices[0].text!);
    //console.log(completion);

    //console.log(completion.data.choices[0].text!);
    return completion.data.choices[0].text!;
  } catch (err) {
    console.log(err);
  }
  return "";
};

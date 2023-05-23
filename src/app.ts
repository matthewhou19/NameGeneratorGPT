import { Configuration, OpenAIApi } from "openai";
export const configuration = new Configuration({
  apiKey: "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",
});
export const openai = new OpenAIApi(configuration);

(document.querySelector(".bannerBlock") as HTMLElement).style.height = "100px";

const submitBt = document.querySelector("#submitNameQuery");

class NameQeury {
  private gender: "male" | "female";
  constructor(gender: "male" | "female") {
    this.gender = gender;
  }
}

const submitBtnHandeler = function (event: Event) {
  event.preventDefault();
  console.log("aaa");
  const nameQeury = new NameQeury("female");

  generateNames(nameQeury);
};

function generatePrompt(nameQuery: NameQeury) {
  return `Suggest three names for newborn child.
  the child gender is ${nameQuery}.`;
}

export default async function generateNames(
  nameQuery: NameQeury
): Promise<void | string[]> {
  if (!configuration.apiKey) {
    alert(
      "OpenAI API key not configured, please follow instructions in README.md"
    );
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(nameQuery),
      temperature: 0.6,
    })!;
    //const data = await JSON.parse(completion.data.choices[0].text!);
    console.log(completion.data.choices[0].text!);
  } catch (err) {
    console.log(err);
  }
}

submitBt!.addEventListener("click", submitBtnHandeler);

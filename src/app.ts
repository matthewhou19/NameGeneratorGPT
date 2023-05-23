import { NameQeury } from "./NameQuery";
import { config } from "dotenv";
import { configuration, openai } from "./openaiApi";
// configuration
config();
(document.querySelector(".bannerBlock") as HTMLElement).style.height = "100px";

// submitbutton config
const submitBt = document.querySelector("#submitNameQuery");

const submitBtnHandeler = function (event: Event) {
  event.preventDefault();
  console.log("aaa");
  const nameQeury = new NameQeury("female");

  generateNames(nameQeury);
};

async function generateNames(nameQuery: NameQeury): Promise<void | string[]> {
  if (!configuration.apiKey) {
    alert(
      "OpenAI API key not configured, please follow instructions in README.md"
    );
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: nameQuery.generatePrompt(),
      temperature: 0.6,
    })!;
    //const data = await JSON.parse(completion.data.choices[0].text!);
    console.log(completion.data.choices[0].text!);
  } catch (err) {
    console.log(err);
  }
}

submitBt!.addEventListener("click", submitBtnHandeler);

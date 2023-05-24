import { NameQeury } from "./NameQuery";
import { config } from "dotenv";
import { configuration, openai } from "./openaiAPI";
// configuration
config();
(document.querySelector(".bannerBlock") as HTMLElement).style.height = "100px";

// submitbutton config
const submitBt = document.querySelector("#submitNameQuery");

const submitBtnHandeler = function (event: Event) {
  event.preventDefault();
  console.log("aaa");
  const nameQeury = new NameQeury("female", 2, "王", "we want chinese name");
  //

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
    console.log(nameQuery.generatePrompt());
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: nameQuery.generatePrompt(),
      max_tokens: 257,
      temperature: 0.3,
    })!;
    //const data = await JSON.parse(completion.data.choices[0].text!);
    console.log(completion);

    console.log(completion.data.choices[0].text!);
  } catch (err) {
    console.log(err);
  }
}

submitBt!.addEventListener("click", submitBtnHandeler);

import { NameQeury } from "./NameQuery";
import { config } from "dotenv";
import { configuration, openai, generateReply } from "./openaiAPI";
// configuration
config();
(document.querySelector(".bannerBlock") as HTMLElement).style.height = "100px";
(<HTMLInputElement>document.querySelector("#maleRadio")).checked = true;

// submitbutton config
const submitBt = document.querySelector("#submitNameQuery");

const submitBtnHandeler = function (event: Event) {
  event.preventDefault();

  const namelength = (<HTMLSelectElement>document.getElementById("nameLength"))
    .value as unknown as number;
  console.log(namelength);
  const lastName = (<HTMLInputElement>document.getElementById("LastName"))
    ?.value as string;
  const gender = (<HTMLInputElement>(
    document.querySelector('input[name="gender"]:checked')
  )).value as "male" | "female";
  const note = (<HTMLInputElement>document.querySelector("#parents_note"))
    .value as string;

  const language = (<HTMLInputElement>document.querySelector("#languageSelect"))
    .value as string;
  //
  const nameQeury = new NameQeury(gender, namelength, lastName, note, language);
  console.log(nameQeury);
  generateReply(nameQeury.generatePrompt()).then((data) => {
    console.log(data);
    if (data) {
      const reply = data.split(/\d\./);
      const list = document.querySelector("#result")!;
      list.innerHTML = "";
      for (let i = 0; i < reply.length; i++) {
        const st = reply[i].trim();
        if (st.length > 0) {
          const e = document.createElement("li");
          e.textContent = st;
          list.appendChild(e);
        }
        console.log(reply[i].trim());
        console.log("mark");
      }
    }
  });
};

submitBt!.addEventListener("click", submitBtnHandeler);

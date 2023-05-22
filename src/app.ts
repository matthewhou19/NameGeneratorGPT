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
  const nameQeury = new NameQeury("female");
  const names = generateNames(nameQeury);
};

function generateNames(nameQuery: NameQeury): string[] {}

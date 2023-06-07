export class NameQeury {
  private gender: "male" | "female";
  private lastName: string;
  private number: number;
  private note: string;
  private language: string;
  constructor(
    gender: "male" | "female",
    number: number,
    lastName = "",
    note = "",
    language = "english"
  ) {
    this.gender = gender;
    this.lastName = lastName;
    this.note = note;
    this.number = number;
    this.language = language;
  }

  get Gender(): string {
    return this.gender;
  }

  generatePrompt(): string {
    const lastNamePhrase = this.lastName
      ? `the child's last name is ${this.lastName}`
      : `we donnot have the child's last name`;
    const notePhrase = this.note
      ? `the child's parents has some note for name generation: ${this.note} .`
      : `the child's parents has no note for name generation`;

    const languagePhrase = `The child name should be in ${this.language}, and I want you reply this  meassage in ${this.language} language`;
    return `Suggest 3 first names for a newborn child.
    the child gender is ${this.gender}. New name should consider the child's gender.
    ${lastNamePhrase}
    ${notePhrase}
    ${languagePhrase}
    the child's first name should has ${this.number} words.
    I want you to generate name from the classical masterpieces.You can't simply use the existed name of those masterpieces. And also give me the reference part text of the names from the masterpieces.And also expain the meaning of the name.
    `;
    // Your answer should be like 1. 真真 2. 爱爱 3.圆圆 4. 安安
    //
  }
}

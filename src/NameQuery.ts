type namelength = 1 | 2 | 3;
export class NameQeury {
  private gender: "male" | "female";
  private lastName: string;
  private number: namelength;
  private note: string;
  constructor(
    gender: "male" | "female",
    number: 1 | 2 | 3,
    lastName = "",
    note = ""
  ) {
    this.gender = gender;
    this.lastName = lastName;
    this.note = note;
    this.number = number;
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
    return `Suggest 3 names for newborn child.
    the child gender is ${this.gender}.
    ${lastNamePhrase}
    ${notePhrase}
    the child's first name should has ${this.number} words.
    I want you to generate name from the classical masterpieces. And also give me the reference part text of the names from the masterpieces.
    The answer should be the same language as the child's first name`;
    // Your answer should be like 1. 真真 2. 爱爱 3.圆圆 4. 安安
    //
  }
}

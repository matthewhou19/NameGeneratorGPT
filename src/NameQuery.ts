export class NameQeury {
  private gender: "male" | "female";
  constructor(gender: "male" | "female") {
    this.gender = gender;
  }

  get Gender(): string {
    return this.gender;
  }

  generatePrompt(): string {
    return `Suggest three names for newborn child.
    the child gender is ${this.gender}.`;
  }
}

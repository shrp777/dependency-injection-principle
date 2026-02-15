export class B {
  private mathOperation: "addition" | "multiplication";

  constructor(mathOperation: "addition" | "multiplication") {
    this.mathOperation = mathOperation;
  }

  calculate(a: number, b: number): number {
    if (this.mathOperation === "addition") return a + b;
    else if (this.mathOperation === "multiplication") return a * b;
    else throw new Error("Can't calculate (unknown Math Operation)");
  }
}

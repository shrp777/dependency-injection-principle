import { B } from "./B";

export class A {
  private b: B;

  constructor() {
    //la classe A créé une instance de la classe  B
    this.b = new B("addition");
  }

  calculateAndPrintResult(a: number, b: number) {
    const result = this.b.calculate(a, b);
    console.log(`result = ${result}`);
  }
}

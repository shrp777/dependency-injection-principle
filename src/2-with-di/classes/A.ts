import type { B } from "./B";

export class A {
  private b: B;

  constructor(b: B) {
    //la classe A dépend d'une classe concrète B
    this.b = b;
  }

  caculateAndPrintResult(a: number, b: number) {
    const result = this.b.calculate(a, b);
    console.log(`result = ${result}`);
  }
}

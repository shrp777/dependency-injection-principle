import { A } from "./classes/A";
import { B } from "./classes/B";

const b: B = new B("addition");
const a: A = new A(b); //injection de dépendance
//A dépend de B

a.caculateAndPrintResult(2, 5); //result = 7

const b2: B = new B("multiplication");
const a2: A = new A(b2);

a2.caculateAndPrintResult(2, 5); //result = 10

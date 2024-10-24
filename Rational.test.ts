import { Rational } from './Rational';

const r1 = new Rational(6, 8);
const r2 = r1.normalize();
console.log(`R1: ${r1.toString()}`);  // 應該輸出 6/8
console.log(`R2: ${r2.toString()}`);  // 應該輸出 3/4

const r3 = new Rational(12, 4);
console.log(`R3: ${r3.toString()}`);  // 應該輸出 12/4

// 使用新的方法解析多個有理數
const R4 = Rational.parseMultipleRationals(["1", "3"], ["4", "1"]);
console.log(R4.map(r => r.toString())); // 輸出: [ '1/4', '3/1' ]

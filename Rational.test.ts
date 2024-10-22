import { Rational } from './Rational';

const r1 = new Rational(6, 8);
console.log(`R1: ${r1.toString()}`);  // 應該輸出 6/8

const r2 = r1.normalize();
console.log(`R2: ${r2.toString()}`);  // 應該輸出 3/4

const r3 = new Rational(12, 4);
console.log(`R3: ${r3.toString()}`);  // 應該輸出 12/4

// 測試 equals 方法
const r4 = new Rational(3, 4);
console.log(`R1 等於 R4: ${r1.equals(r4)}`);  // 應該輸出 false
console.log(`R2 等於 R4: ${r2.equals(r4)}`);  // 應該輸出 true

// 測試 parseRational 方法（需要自己實現該方法，這裡暫不提供）

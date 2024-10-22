import { Rational } from './Rational';

const main = () => {
    const R1 = new Rational(6, 4);
    const R2 = R1.normalize();
    const R3 = new Rational(12, 4);
    const R4 = Rational.parseRational(["1", "3"], ["4", "1"]);
    const R5 = Rational.parseRational("43/23");

    console.log(`R1 : ${R1.toString()}`);
    console.log(`R2 : ${R2.toString()}`);
    console.log(`R3 : ${R3.toString()}`);
    console.log();

    console.log(`R1.equals(R2) : ${R1.equals(R2)}`);
    console.log(`R1.isWhole() : ${R1.isWhole()}`);
    console.log(`R1.isDecimal() : ${R1.isDecimal()}`);
    console.log();

    console.log(`R1.equals(R3) : ${R1.equals(R3)}`);
    console.log(`R3.isWhole() : ${R3.isWhole()}`);
    console.log(`R3.isDecimal() : ${R3.isDecimal()}`);
    console.log();

    console.log(`R4 : ${R4.toString()}`);
    console.log(`R5 : ${R5.toString()}`);
};

main();

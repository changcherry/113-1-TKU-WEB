export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    // Normalize the rational number
    normalize(): Rational {
        const gcd = this.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    // toString method to print the rational number in "numerator/denominator" format
    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    // Private helper method to calculate the greatest common divisor
    private gcd(a: number, b: number): number {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    // Check if the rational number is equal to another rational number
    equals(other: Rational): boolean {
        const r1 = this.normalize();
        const r2 = other.normalize();
        return r1.numerator === r2.numerator && r1.denominator === r2.denominator;
    }
}

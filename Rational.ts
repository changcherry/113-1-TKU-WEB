export class Rational {
    private numerator: number;
    private denominator: number;

    // Constructor
    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    // Getter methods
    public getNumerator(): number {
        return this.numerator;
    }

    public getDenominator(): number {
        return this.denominator;
    }

    // Normalize the rational number
    public normalize(): Rational {
        const gcd = this.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    // Check if the rational number is a whole number
    public isWhole(): boolean {
        return this.numerator % this.denominator === 0;
    }

    // Check if the rational number has decimals
    public isDecimal(): boolean {
        return this.numerator % this.denominator !== 0;
    }

    // Check equality with another Rational object
    public equals(r: Rational): boolean {
        const thisNorm = this.normalize();
        const rNorm = r.normalize();
        return thisNorm.getNumerator() === rNorm.getNumerator() &&
               thisNorm.getDenominator() === rNorm.getDenominator();
    }

    // Static method to parse a string into a Rational object
    public static parseRational(str: string): Rational {
        const parts = str.split("/");
        const num = parseInt(parts[0], 10);
        const den = parseInt(parts[1], 10);
        return new Rational(num, den);
    }

    // Implement toString() method
    public toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    // Helper method to calculate the greatest common divisor (GCD)
    private gcd(a: number, b: number): number {
        if (b === 0) return a;
        return this.gcd(b, a % b);
    }
}

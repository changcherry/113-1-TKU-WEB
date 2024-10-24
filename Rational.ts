export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        if (denominator < 0) {
            numerator = -numerator;
            denominator = -denominator;
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    public getNumerator(): number {
        return this.numerator;
    }

    public getDenominator(): number {
        return this.denominator;
    }

    public normalize(): Rational {
        const gcd = this.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    public toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    private gcd(a: number, b: number): number {
        if (b === 0) return Math.abs(a);
        return this.gcd(b, a % b);
    }

    // 新增的方法來解析多個有理數
    public static parseMultipleRationals(numerators: string[], denominators: string[]): Rational[] {
        if (numerators.length !== denominators.length) {
            throw new Error("Numerators and denominators arrays must have the same length");
        }
        
        return numerators.map((num, index) => {
            const den = denominators[index];
            return new Rational(parseInt(num, 10), parseInt(den, 10));
        });
    }
}

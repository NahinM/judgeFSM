export class RandomStringGenerator {
    private maxLimit: number;
    private at: number;
    private stringLength: number;
    private symbols: string;
    constructor(symbols: string, maxLimit: number, stringLength: number) {
        this.symbols = symbols;
        this.maxLimit = maxLimit;
        this.at = 0;
        this.stringLength = stringLength;
    }

    getString(): string {
        if (this.isDone()) {
            throw new Error("No more strings to generate");
        }
        this.at++;
        return this.generate();
    }

    generate(): string {
        let result = "";
        for (let i = 0; i < this.stringLength; i++) {
            const randomIndex = Math.floor(Math.random() * this.symbols.length);
            result += this.symbols[randomIndex];
        }
        return result;
    }

    isDone(): boolean {
        return this.at >= this.maxLimit;
    }
}
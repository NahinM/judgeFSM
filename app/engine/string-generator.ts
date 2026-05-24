class PermutationGenerator {
    state: number[];
    base: number;
    length: number;
    overflow: boolean;
    constructor(base: number, length: number) {
        this.state = new Array(length).fill(0);
        this.base = base;
        this.length = length;
        this.overflow = false;
    }

    add(at: number) {
        if (at >= this.length) {
            return;
        }
        let value = this.state[at] + 1;
        let carry = Math.floor(value / this.base);
        this.state[at] = value % this.base;
        if (carry > 0) {
            this.add(at + 1);
        }
    }
    increment() {
        if (this.isMax()) {
            this.overflow = true;
        }
        this.add(0);
    }

    isMax() {
        for (let i = 0; i < this.length; i++) {
            if (this.state[i] !== this.base - 1) {
                return false;
            }
        }
        return true;
    }
}

export class StringGenerator {
    symbols: string;
    maxLength: number;
    permutation: PermutationGenerator | null;
    currentString: string;
    currentLength: number;
    constructor(symbols: string, maxLength: number) {
        this.symbols = symbols;
        this.maxLength = maxLength;
        this.permutation = null;
        this.currentString = "";
        this.currentLength = 0;
    }

    getString() {
        return this.currentString;
    }

    buildString(valueList: number[]) {
        let result = "";
        for (let i = 0; i < valueList.length; i++) {
            result = this.symbols[valueList[i]] + result;
        }
        return result;
    }

    next() {
        if (this.permutation === null || this.permutation.overflow) {
            this.currentLength += 1;
            this.permutation = new PermutationGenerator(
                this.symbols.length,
                this.currentLength,
            );
        }

        this.currentString = this.buildString(this.permutation.state);
        this.permutation.increment();
    }

    isDone() {
        return this.currentLength > this.maxLength;
    }
}
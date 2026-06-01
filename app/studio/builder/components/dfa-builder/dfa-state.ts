export class DFAState {
    name: string;
    symbols: string;
    nodes: number;
    table: number[][];
    constructor(name: string, symbols: string, nodes: number) {
        this.name = name;
        this.symbols = symbols;
        this.nodes = nodes;
        this.table = Array.from({ length: nodes }, () => Array(symbols.length).fill(0));
    }

    addTransition(from: number, symbol: string, to: number) {
        const symbolIndex = this.symbols.indexOf(symbol);
        if (symbolIndex < 0 || from >= this.nodes || to >= this.nodes) {
            window.alert("Invalid transition");
            return;
        }
        this.table[from][symbolIndex] = to;
    }

    fromString(input: string) {
        const lines = input.split("\n");
        for (let i = 0; i < lines.length; i++) {
            const [from, to, symbols] = lines[i].split(" ");
            for (const symbol of symbols.split(",")) {
                this.addTransition(parseInt(from), symbol, parseInt(to));
            }
        }
    }
}
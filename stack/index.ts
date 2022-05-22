export class Stack {
    stack: any[];
    size: number;
    N: number;

    constructor() {
        this.stack = Array(1);
        this.size = 1;
        this.N = 0;
    }

    resize(size: number): void {
        const oldArray = this.stack;
        const newArray = [];

        for (let i = 0; i < size; i++) {
            newArray.push(oldArray[i] || undefined);
        }

        this.stack = newArray;
        this.size = size;
    }

    push(elem: any): void {
        if (this.size === this.N) {
            this.resize(this.size * 2);
        }

        this.stack[this.N] = elem;
        this.N += 1;
    }

    pop(): any {
        if (this.N === 0) {
            const popValue = this.stack[this.N];
            this.stack[this.N] = undefined;
            return popValue;
        }

        this.N -= 1;
        const popValue = this.stack[this.N];

        if (this.N <= Math.round(this.size / 4)) {
            this.resize(Math.round(this.size / 2));
        }

        this.stack[this.N] = undefined;
        return popValue;
    }

    isEmpty(): boolean {
        return this.N === 0 && this.stack[this.N] === undefined;
    }
}

class Queue {
    queue: any[];

    head: number;
    tail: number;

    queueLength: number;
    elementsAmount: number;

    constructor() {
        this.queue = [];

        this.head = 0;
        this.tail = 0;

        this.queueLength = 1;
        this.elementsAmount = 0;
    }

    resize(size: number): void {
        const oldQueue = this.queue;
        let newQueue = [];

        const startPosition = this.head;
        const endPosition = this.tail;

        if (startPosition < endPosition) {
            for (let i = startPosition; i < endPosition; i++) {
                newQueue.push(oldQueue[i]);
            }

            const difference = size - newQueue.length;
            if (difference > 0) {
                for (let i = 0; i < difference; i++) {
                    newQueue.push(undefined);
                }
            }

            this.queueLength = size;
            this.queue = newQueue;

            return;
        }

        for (let i = startPosition; i < this.queueLength; i++) {
            newQueue.push(oldQueue[i]);
        }

        for (let i = 0; i < endPosition; i++) {
            newQueue.push(oldQueue[i]);
        }

        const difference = size - this.queueLength;

        for (let i = 0; i < difference; i++) {
            newQueue.push(undefined);
        }

        this.queueLength = size;
        this.queue = newQueue;
    }

    enqueue(elem: any): void {
        const isTailTheLastIndex = this.tail === this.queueLength;

        // перекинем хвост в начало, если удаляли из начала и там пусто, чтобы не удлиннять очередь
        if (isTailTheLastIndex && this.queue[0] === undefined) {
            this.tail = 0;
        }

        if (this.head === this.tail) {
            this.resize(this.queueLength * 2);
            this.head = 0;
            this.tail = this.elementsAmount;
        }

        if (this.elementsAmount + 1 > this.queueLength) {
            this.resize(this.queueLength * 2);
        }

        this.queue[this.tail] = elem;
        this.elementsAmount += 1;

        this.tail += 1;
    }

    dequeue(): any {
        const isHeadTheLastIndex = this.head === this.queueLength;
        if (isHeadTheLastIndex) {
            this.head = 0;
        }

        if (this.elementsAmount <= Math.round(this.queueLength / 4)) {
            this.resize(this.queueLength / 2);
            this.head = 0;
            this.tail = this.elementsAmount;
        }

        const dequeueValue = this.queue[this.head];

        if (dequeueValue === undefined) {
            return dequeueValue;
        }

        this.queue[this.head] = undefined;

        this.head += 1;
        this.elementsAmount -= 1;
        return dequeueValue;
    }
}

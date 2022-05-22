import {Stack} from '../stack/index';

const calPoints = function(ops: any) {
    const stack = new Stack();

    ops.forEach((elem: any) => {
        switch (elem) {
            case '+':
                let a = stack.pop();
                let b = stack.pop();
                let sum = a + b;
                stack.push(b);
                stack.push(a);
                stack.push(sum);
                break;
            case 'D':
                let c = stack.pop();
                let doubleC = c * 2;
                stack.push(c);
                stack.push(doubleC);
                break;
            case 'C':
                stack.pop();
                break;
            default:
                stack.push(+elem);
        }
    });

    let result = 0;
    stack.stack.forEach((elem: number|undefined) => {
        if (elem !== undefined) {
            result += elem;
        }
    });

    return result;
};
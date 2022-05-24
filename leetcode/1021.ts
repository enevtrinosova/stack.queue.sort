// https://leetcode.com/problems/remove-outermost-parentheses/
import {Stack} from '../stack/index';

const removeOuterParentheses = function(s) {
    const stack = new Stack();
    s.split('').forEach(symbol => stack.push(symbol));

    let result = [];
    let lefts = 0;
    let rights = 0;

    let currentArray = [];

    while (!stack.isEmpty()) {
        let currentElement = stack.pop();
        currentArray.push(currentElement);

        if (currentElement === ')') {
            rights += 1;
        }

        if (currentElement === '(') {
            lefts += 1;
        }

        if (rights === lefts) {
            currentArray = currentArray.slice(1, currentArray.length - 1);
            result.push(currentArray.reverse().join(''))

            rights = 0;
            lefts = 0;
            currentArray = [];
        }
    }

    return result.reverse().join('');
};

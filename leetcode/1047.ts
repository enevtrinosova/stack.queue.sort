// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
import {Stack} from '../stack/index';

const removeDuplicates = function(s) {
    const givenStack = new Stack();
    s.split('').forEach(symbol => givenStack.push(symbol));

    const resultStack = new Stack();

    while (!givenStack.isEmpty()) {
        let currentSymbol = givenStack.pop();
        let previousSymbol = resultStack.pop();

        if (currentSymbol !== previousSymbol) {
            resultStack.push(previousSymbol);
            resultStack.push(currentSymbol);
        }
    }

    return resultStack.stack.reverse().join('');
};

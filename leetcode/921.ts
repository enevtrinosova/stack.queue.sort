// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
import {Stack} from '../stack/index';

const minAddToMakeValid = function(s) {
    const stack = new Stack();
    s.split('').forEach(symbol => stack.push(symbol));

    let rightsAmount = 0;
    let leftsAmount = 0;
    while (!stack.isEmpty()) {
        let currentSymbol = stack.pop();

        if (currentSymbol === ')') {
            rightsAmount += 1;
        }

        if (currentSymbol === '(') {
            if (rightsAmount > 0) {
                rightsAmount -= 1;
            } else {
                leftsAmount += 1;
            }
        }
    }

    return rightsAmount + leftsAmount;
};

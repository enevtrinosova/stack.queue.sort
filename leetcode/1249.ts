// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
import {Stack} from '../stack/index';

const minRemoveToMakeValid = function(s) {
    const sArray = s.split('');

    const parenthesesStack = new Stack();
    sArray.forEach((symbol, index) => {
        if (symbol === ')' || symbol === '(') {
            parenthesesStack.push({
                symbol,
                index,
            });
        }
    });

    const removableSymbols = [];
    const rights = new Stack();

    while (!parenthesesStack.isEmpty()) {
        let currentSymbol = parenthesesStack.pop();

        if (currentSymbol.symbol === ')') {
            rights.push(currentSymbol);
        }

        if (currentSymbol.symbol === '(') {
            let right = rights.pop();
            if (right === undefined) {
                removableSymbols.push(currentSymbol.index);
            }
        }
    }

    while (!rights.isEmpty()) {
        let currentSymbol = rights.pop();
        removableSymbols.push(currentSymbol.index);
    }

    removableSymbols.forEach((symb) => {
        sArray[symb] = null;
    });

    return sArray.map((elem) => elem !== null ? elem : '').join('');
};

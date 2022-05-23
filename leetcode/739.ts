// https://leetcode.com/problems/daily-temperatures
import {Stack} from '../stack/index';

const minTemperature = 30;
const maxTemperature = 100;
const tempDifference = maxTemperature - minTemperature;

const dailyTemperatures = function(temperatures) {
    const stack = new Stack();
    temperatures.forEach(temp => stack.push(temp));

    const result = [];
    const positionsArray = [];

    for (let i = 0; i <= tempDifference; i++) {
        positionsArray.push(null);
    }

    let currentPosition = temperatures.length - 1;

    while (!stack.isEmpty()) {
        let currentTemperature = stack.pop();
        if (currentTemperature === undefined) {
            break;
        }

        let warmerPositions = [];
        for (let i = currentTemperature - minTemperature + 1; i <= tempDifference; i++) {
            if (positionsArray[i] !== null) {
                warmerPositions.push(positionsArray[i]);
            }
        }

        if (warmerPositions.length === 0) {
            result.push(0);
        } else {
            let min = warmerPositions[0];
            warmerPositions.forEach((elem) => {
                if (elem < min) {
                    min = elem;
                }
            });

            result.push(min - currentPosition);
        }

        positionsArray[currentTemperature - minTemperature] = currentPosition;
        currentPosition -= 1;
    }

    return result.reverse();
};

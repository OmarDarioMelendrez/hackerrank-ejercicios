// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000



const arr = [-4, 3, -9, 0, 4, 1]
// Complete the plusMinus function below.
function plusMinus(arr) {
    let result = "";
    let positive = 0;
    let neutral = 0;
    let negative = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else {
            neutral++
        }
    }
    let positiveRatio = parseFloat(positive / arr.length).toFixed(6);
    let negativeRatio = parseFloat(negative / arr.length).toFixed(6);
    let neutralRatio = parseFloat(neutral / arr.length).toFixed(6);

    result += `${positiveRatio} \n`;
    result += `${negativeRatio} \n`;
    result += `${neutralRatio} \n`;

    console.log(result);
}

plusMinus(arr);
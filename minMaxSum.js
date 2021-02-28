// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// const arr = [1,2,3,4,5];
// The minimum sum is  and the maximum sum is . The function prints

// 16 24

const arr = [1,2,3,4,5];

function miniMaxSum(arr) {
    arr.sort(function(a,b){return a - b;});
    
    let max = 0;
    let min = 0;
    for (let i = 0; i < (arr.length - 1); i++) {
        min += arr[i];
    }
    for (let i = 1; i < arr.length ; i++) {
        max += arr[i];
    }

    let result = `${min} ${max}`;
    console.log(result);

}

miniMaxSum(arr);
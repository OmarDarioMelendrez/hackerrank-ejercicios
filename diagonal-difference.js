// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

const arr = [[11 ,2 ,4],[4, 5, 6],[10, 8 ,-12]];

function diagonalDifference(arr) {
    const firstDiagonal= [];
    let secondCount = arr.length -1 ;
    const secondDiagonal = [];
    let resultado = 0;
    let firstSum = 0;
    let secondSum = 0;

    const sumArrays = (first, second) => {
        for (let i = 0; i < second.length; i++) {
            secondSum += second[i];
        }
        for (let i = 0; i < first.length; i++) {
            firstSum += first[i];
        }
        return 
    }
    
    for (let i = 0; i < arr.length; i++) {
        let agregarFirst = arr[i][i];
        firstDiagonal.push(agregarFirst);
        let agregarSecond = arr[i][secondCount];
        secondDiagonal.push(agregarSecond)
        secondCount = (secondCount - 1);
    }

    sumArrays(firstDiagonal,secondDiagonal);

    const difference = firstSum - secondSum;

    console.log(difference);
    return Math.abs(difference);
}

diagonalDifference(arr);

//me salioooooooo!!!!

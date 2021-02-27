// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

const arr = [[11 ,2 ,4],[4, 5, 6],[10, 8 ,-12]];

function diagonalDifference(arr) {
    // sumamos los valores diagonales de los arrays
    const firstDiagonal = arr[0][0] + arr[1][1] + arr[2][2];
    const secondDiagonal = arr[0][2] + arr[1][1] + arr[2][0];
    //restamos la segunda diagonal a la primera
    const difference = parseInt(firstDiagonal - secondDiagonal);
    //utilizamos Math.abs para obtener el número absoluto del resultado y lo retornamos
    console.log(Math.abs(difference));
    return Math.abs(difference);
}

diagonalDifference(arr);

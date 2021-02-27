//Realizar una función que reciba dos arrays con 3 numeros los cuales se compararán y el que sea mayor recibe 1 punto, en caso de ser iguales, ninguno lleva punto, devolver un array con los puntos obtenidos por cada persona.

const ana = [5,6,7];
const bob = [3,6,10];

function compareTriplets(a, b) {
    let aPoints = 0;
    let bPoints = 0;
    
    if (a[0] < b[0]) {
        bPoints++
    } else if(a[0] > b[0]) {
        aPoints++
    } 
    if (a[1] < b[1]) {
        bPoints++
    } else if(a[1] > b[1]) {
        aPoints++
    } 
    if (a[2] < b[2]) {
        bPoints++
    } else if(a[2] > b[2]) {
        aPoints++
    } 
    
    let result = [aPoints,bPoints];
    
    console.log(result)
    return result;

}

compareTriplets(ana,bob);

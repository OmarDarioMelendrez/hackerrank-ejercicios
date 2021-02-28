
const s = "01:05:45AM";

function timeConversion(s) {

    let result = '';

    if (s.includes("AM") && s.includes("12")) {
        let restTime = s.slice(2,-2);
        result = `00${restTime}`
    } else if(s.includes("PM") && s.includes("12")){
        result = s.slice(0,-2);
    } else if(s.includes("PM")){
        let hours = s.slice(0, 2);
        let restTime = s.slice(2,-2);
        result = `${parseInt(hours)+ 12}${restTime}`
    } else {
        result = s.slice(0,-2);
    }
    console.log(result);
}

timeConversion(s);
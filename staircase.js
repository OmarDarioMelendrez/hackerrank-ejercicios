
const n = 6;

function staircase(n) {
    let stair = "";
    let spaces = n - 1;
    let cats = 1;
    for (let i = 0; i < n; i++) {
        stair += `${" ".repeat(spaces)}${"#".repeat(cats)}\n`;
        spaces--;
        cats++
    }
    console.log(stair)
}

staircase(n);
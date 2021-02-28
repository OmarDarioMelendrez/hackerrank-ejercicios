const s = "javascriptloops";

function vowelsAndConsonants(s) {
    [...s].forEach(c => 'aeiou'.includes(c) ? console.log(c) : null);
    [...s].forEach(c => 'aeiou'.includes(c) ? null : console.log(c));
}

vowelsAndConsonants(s);
function letterCount(input) {
    "use strict";
    let str = String(input[0]);
    let letter = String(input[1]);
    let counter = str.split(letter);
    console.log(counter.length - 1);
}

letterCount(['baba bebe bibi', 'b']);
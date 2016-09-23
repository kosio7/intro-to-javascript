function stringOfNums(input) {
    "use strict";
    let str = '';
    let num = Number(input[0]);
    for (let i=1; i<=num; i++) str +=i;
    console.log(str);
}

stringOfNums(['11']);
function figureArea(input) {
    "use strict";
    let width1 = Number(input[0]);
    let height1 = Number(input[1]);
    let width2 = Number(input[2]);
    let height2 = Number(input[3]);

    /*Line 10 is the same code as the code block on lines 14 to 16.*/

    let [s1, s2, s3] = [width1*height1, width2*height2, Math.min(width1, width2) * Math.min(height1, height2)];
    console.log(s1 + s2 - s3);

    /*
    let s1 = width1*height1;
    let s2 = width2*height2;
    let s3 = Math.min(width1, width2) * Math.min(height1, height2);
    */
}

figureArea(['2', '4', '5', '3']);
/* Needs more work to cover all possible situations.*/

function filterByMinAge(arrInput) {
    "use strict";
    if (arrInput === undefined || arrInput.length === 0) {
        throw new Error('Invalid input data.');
    }

    let minAge = Number(arrInput[0]);

    let objPerson1 = {
        name: arrInput[1],
        age: Number(arrInput[2])
    };

    let objPerson2 = {
        name: arrInput[3],
        age: Number(arrInput[4])
    };

    if (objPerson1.age < minAge && objPerson2.age < minAge) {
        return;
    }

    if (objPerson1.age > minAge && objPerson2.age > minAge) {
        if (objPerson1.age > objPerson2.age) {
            return objPerson2;
        } else {
            return objPerson1;
        }
    }

    if (objPerson1.age >= minAge && objPerson2.age < minAge) {
        return objPerson1;
    } else if (objPerson1.age < minAge && objPerson2.age >= minAge) {
        return objPerson2;
    }
}

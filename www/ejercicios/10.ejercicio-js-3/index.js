'use strict';

let conversion = '';

function decimalBinary(number, type) {
    if (type === 10) {
        return (conversion = number.toString(2));
    } else if (type === 2) {
        const numberString = number.toString();
        const numberArray = numberString.split('');
        const valius = numberArray
            .map((val, i) => {
                return i;
            })
            .reverse();

        const elevarPotencia = numberArray.map((val, i) => {
            return (val = Math.pow(2, valius[i]));
        });
        let sumNumb = 0;
        for (let index = 0; index < numberArray.length; index++) {
            const product = numberArray[index] * elevarPotencia[index];
            sumNumb = sumNumb + product;
        }
        return (conversion = sumNumb);
    } else {
        return (conversion = 'Error');
    }
}

decimalBinary(11100110, 2);

console.log(conversion);

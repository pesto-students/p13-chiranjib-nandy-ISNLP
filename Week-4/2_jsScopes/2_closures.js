function counter() {
    let count = 0;
    return function countFunction () {
        count++;
        return count;
    };
}

const firstCounter = counter();
const secondCounter = counter();

const firstValues = [];
const secondValues = [];

// Call firstCounter five times and store the returned values in firstValues
for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
}

// Call secondCounter three times and store the returned values in secondValues
for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
}

console.log("firstValues array:", firstValues);
console.log("secondValues array:", secondValues);

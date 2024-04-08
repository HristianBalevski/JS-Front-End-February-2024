// const promise = new Promise((resolve, reject) => {
//     const term1 = 2;
//     const term2 = 2;
//     const expression = term1 + term2;
//     const answer = 4;
//     const expressionIsCorrect = expression === answer;
//
//     // 2 + 2 = 4, and 4 = 4, so this is true!
//     if (expressionIsCorrect) {
//         resolve('The promise was fulfilled!');
//     } else {
//         reject({
//             errorType: 'ArithmeticError',
//             message: "The expression didn't evaluate correctly.",
//             originalExpression: `${term1} + ${term2} === ${answer}`,
//         });
//     }
// });
//
// promise
//     .then((message) => {
//         console.log(`Success: ${message}`);
//     })
//     .catch((err) => {
//         console.log(
//             `${err.errorType}: ${err.message} \nOriginal Expression: ${err.originalExpression}`
//         );
//     })
//     .finally((message) => {
//         console.log('Operations finished');
//     });


// function myPromise() {
//     return new Promise((resolve) => {
//         resolve('Successful promise!');
//     });
// }
//
// function mySecondPromise() {
//     return new Promise((resolve) => {
//         resolve('Second successful promise!');
//     });
// }
//
// async function someAsyncAwaitFunction() {
//     try {
//         const promise = await myPromise();
//         const promiseTwo = await mySecondPromise();
//
//         console.log(promise);
//         console.log(promiseTwo);
//     } catch (error) {
//         console.log(`Error from async function: ${error}`);
//     }
// }
//
//
// someAsyncAwaitFunction();


// Call Back
// const array = [-1, 1, -2, 2, -3, 3]
// const positiveNumbers = removeNegativeNumbers(array, (x) => x >= 0);
//
// function removeNegativeNumbers(numbers, positiveNumbers) {
//     let filteredArray = [];
//     for (const x of array) {
//         if (positiveNumbers(x)) {
//             filteredArray.push(x)
//         }
//     }
//     console.log(filteredArray)
// }


// function myDisplayer(something) {
//     return `The result is ${something}`;
// }
//
//
// function sum(num1, num2, callback) {
//     let result = num1 + num2;
//     return callback(result);
// }
//
// console.log(sum(5, 5, myDisplayer))

// function test(a, b) {
//     if (a + b > 5) {
//         return `The result is bigger than 5`;
//     } else {
//         return `The result is smaller than 5`;
//     }
// }
//
// setTimeout(function() {
//     console.log(test(21, 2));
// }, 3000);


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('*');
//     }, 1000);
// });
//
// const twoStars = (star) => {
//     return (star + star);
// };
//
// const oneDot = (star) => {
//     return (star + '.');
// };
//
// const print = (val) => {
//     console.log(val);
// };
//
// // Chaining them all together
// promise.then(twoStars).then(oneDot).then(print);

let myArray = [1,2,3,4,5,6];

myArray.forEach(multiply)
myArray.forEach(convertToString);
myArray.forEach(display)


function multiply(element, index, array) {
    array[index] = element * array[index];

}

function display(element) {
    console.log(element);
}

function convertToString(element, index, array) {
    array[index] = element.toString() + array[index];
}





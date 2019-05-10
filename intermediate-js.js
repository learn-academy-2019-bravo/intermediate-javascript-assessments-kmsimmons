// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]


// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])
//
//
// // 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.
//
var ourString = "Hello Learn Students!"
//find the instances of 'l', will have to make ourString an array and set all letters to lowercase
const ourArr = ourString.toLowerCase().split('')
//Function called letterCounter using filter to get the instances of 'l' into separate array
const letterCounter = () =>{
//using ourArr, find the instances of 'l'
		const instanceOfL = ourArr.filter(value => value.includes('l'))
//return the length of new array with only 'l'
			return instanceOfL.length
}
//log function letterCounter
console.log(letterCounter());

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibArr = [1,2,3,4,5,6,7,8,9,10]

const getFib = () =>{
		var newFibb = fibArr.map(value => value)
			return newFibb

}
console.log(getFib());

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, 'true', "hey", 7, 199, -9, false, "hola"]

// var stringArr = fullArr.toString()
// // console.log(oddArr);
// const oddChecker = () =>{
// 	for(let i=0; i<fullArr.length; i++){
// 		if(stringArr[i] %2 === 1){
// 			return stringArr[i]
// 		}
// 	}
// }
// console.log(oddChecker()); //only logs 9 :(
	const oddChecker = () =>{
		const oddNums = fullArr.filter(value => Math.abs(value) %2 === 1)
	//return the length of new array with only 'l'
				return oddNums
	}
	//log function letterCounter
	console.log(oddChecker());

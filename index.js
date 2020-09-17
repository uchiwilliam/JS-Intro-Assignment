/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

// let votingAge = 29;

// if (votingAge > 18){

//     console.log("true");

// }

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

// let year = 2019;

// if (year === 2019){
//     year = 2020;
//     console.log(year);
// }

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

// var convert = parseInt("1999 1999");
// console.log(convert);

//Task d: Write a function to multiply a*b 
//  function multiply(a, b){
//     let result = a * b;
//     console.log(result);
//  }
//  multiply(6, 80);


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
// function ageInDogYears(age){
//     let humanYear = 365;
//     let dogYear = humanYear / 7;
//     let humanDogAge = dogYear * age;
//     console.log(humanDogAge);
//     return age;
// }
// ageInDogYears(28);


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function RPS(num) {
    for (let i = 0; i < num; i++) {
        let randomNumber = Math.floor(Math.random() * 3);

        let strings = ["rock", "paper", "scissors"]

        // console.log(randomNumber + " " + strings[randomNumber]);

        return randomNumber + " " + strings[randomNumber];
    }
}
// RPS(3);



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
    let converter = km / 1.6;

    // console.log(converter + " " + "miles");
    return converter + " " + "miles";
}
kmToMiles(40);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCm(feet) {
    let feetConverter = feet / 0.032808;

    // console.log(feetConverter + " " + "centimeters");
    return feetConverter + " " + "centimeters";
}
feetToCm(10);

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

let numOfBottles = 5;

function annoyingSong() {
    while (numOfBottles >= 1) {

        if (numOfBottles === 2) {
            console.log(numOfBottles + " " + "bottles of soda on the wall," + " " + numOfBottles + " " + "bottles of soda, take one down pass it around" + " " + (numOfBottles - 1) + " " + "left over" + " " + "bottle of soda on the wall");
        } else if (numOfBottles === 1) {
            console.log(numOfBottles + " " + "bottle of soda on the wall," + " " + numOfBottles + " " + "bottle of soda, take one down pass it around" + " " + (numOfBottles - 1) + " " + "left over" + " " + "bottle of soda on the wall");
        } else {
            console.log(numOfBottles + " " + "bottles of soda on the wall," + " " + numOfBottles + " " + "bottles of soda, take one down pass it around" + " " + (numOfBottles - 1) + " " + "left over" + " " + "bottles of soda on the wall");
        }
        numOfBottles--;
    }
}
// annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

let grade = Math.round(Math.random() * 100 + 1);
let letter = '';

function calcGrade(grade) {
    for (let i = 0; i <= grade; i++) {
        if (grade > 89) {
            letter = "A";
        } else if (grade > 79) {
            letter = "B";
        } else if (grade > 69) {
            letter = "C";
        } else if (grade > 59) {
            letter = "B"
        } else {
            letter = "F"
        }
        //console.log(`${grade} ${letter}`);
       return `${grade} ${letter}`;
    } 
}
let result = calcGrade(50);
console.log(result);


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object






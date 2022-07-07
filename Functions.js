
/*ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2)
  and calculates the area of the associated rectangle.
*/

console.log("\n------------------EXERCISE 1------------------");

function area(l1, l2){
    let answer = l1 * l2 / 2 
    console.log(answer)
}

area(10, 20)


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the 
 same then it should return their sum multiplied by 3.
*/

console.log("\n------------------EXERCISE 2------------------");

function crazySum(int1, int2 ){
    if (int1 === int2) {
      return (int1 + int2) * 3;}
    else{ return int1 + int2}
}
console.log(crazySum(3, 3))
        

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference
  between a given number and 19.
 It should return triple their absolute difference
  if the given number is greater than 19.
*/


console.log("\n------------------EXERCISE 3------------------");

function crazyDiff(num){
    if(num > 19){
    return (num - 19) * 3 }
}

console.log(crazyDiff(22))




/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n
  and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("\n------------------EXERCISE 4------------------");

function boundary(num1){
    if (num1 >= 20 & num1 <=100 ){
        return true}
    else if (num1 === 400){
        return true
    }
    else{
        return false
            }
    
    }
    console.log(boundary(400))
    

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("\n------------------EXERCISE 5------------------");

function strivify(str){
    let splitstr = str.split(" ")
    if(splitstr[0] === "Strive"){
        return str
    }
    else{
        return "Strive " + str
    }
}


console.log(strivify("Hello World"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/



console.log("\n------------------EXERCISE 6------------------");

function check3and7(num2){
    
    if(num2 >= 0 && num2 % 3 === 0 || num2 % 7 === 0){
        return true
    }
    else{
        return false
    }
    }
console.log(check3and7(15))
console.log(check3and7(13))
console.log(check3and7(21))
console.log(check3and7(11))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("\n------------------EXERCISE 7------------------");

function reverseString(string){
    let reverseString1 = string.split(" ");
    let reverseString2 = reverseString1.reverse().join("")
    return reverseString2

}
console.log(reverseString("hello world"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("\n------------------EXERCISE 8------------------");

function upperFirst(FCL){
    let fcl1 = FCL.split(" ");
    for (let i = 0; i < fcl1.length; i++) {
        fcl1[i] = fcl1[i].charAt(0).toUpperCase() + fcl1[i].substring(1);   
    }
    return fcl1.join(" ")
}
console.log(upperFirst("hello world"))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("\n------------------EXERCISE 9------------------");

function cutString(str1){
    let str2 = str1.split("");
    str2.shift();
    str2.pop();
    

    return str2.join("");
}
console.log(cutString("string"))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("\n------------------EXERCISE 10------------------");

function giveMeRandom(n){
    let n1 = []
    n1 = Math.floor(Math.random() * 10)

    return n1
   
}

console.log(giveMeRandom(4))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

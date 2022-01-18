// //Checks which numbers is the biggest of the four given. Can be changed via the variables at the top of the code.
function biggestNumber(n1, n2, n3, n4) {
    if (n1 > n2 && n1 > n3 && n1 > n4) {
        console.log("The first number is the biggest " + n1);
    } else {
        if (n2 > n1 && n2 > n3 && n2 > n4) {
            console.log("The second number is the biggest " + n2);
        } else {
            if (n3 > n1 && n3 > n2 && n3 > n4) {
                console.log("The third number is the biggest " + n3);
            } else {
                console.log("The fourth number is the biggest " + n4);
            }
        }
    }
}
biggestNumber(12, 43, 87, 23)


// // //Recieves 4 numbers but only logs the last one.
function logLastNumber(num1, num2, num3, num4) {
    console.log(num4);
}
logLastNumber(8, 9, 76, 29)

// // //This function takes two numbers and returns only the first one.
// // //Example: first number is equal to 3. After running this function the first number will change to 9. The second number remains unchanged.
function returnFirstNumber(first, second) {
    return (first * first)
}
returnFirstNumber(3, 5)

// // //Revieves two numbers and returns the biggest of the two. (Does not show in log.)
function returnBigNumber(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
returnBigNumber(153, 892)

// // //Recieves four numbers and logs the smallest one.
function smallestNumber(s1, s2, s3, s4) { //4 numbers
    if (s1 < s2 && s1 < s3 && s1 < s4) {
        console.log("The first number is smallest." + s1 + ", " + s2 + ", " + s3 + ", " + s4);//Check if first number is smaller than the rest. If so then log it.
    } if (s2 < s1 && s2 < s3 && s2 < s4) {
        console.log("The second number is smallest." + s1 + ", " + s2 + ", " + s3 + ", " + s4);//Check if second number is smaller than the rest. If so then log it.
    } if (s3 < s1 && s3 < s2 && s3 < s4) {
        console.log("The third number is smallest." + s1 + ", " + s2 + ", " + s3 + ", " + s4);//Check if third number is smaller than the rest. If so then log it.
    } if (s4 < s1 && s4 < s2 && s4 < s3) {
        console.log("The fourth number is smallest." + s1 + ", " + s2 + ", " + s3 + ", " + s4);//Check if third number is smaller than the rest. If so then log it.
    }
}

smallestNumber(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100))

// // //For loops
//Logs numbers 0-100 increments of 3
for (var i = 0; i <= 100; i += 3) {
    console.log(i);
}

console.log("--------");

// // //Logs numbers 100-0 decrements of 3
for (var a = 100; a > 0; a -= 3) {
    console.log(a);
}

console.log("--------");

// // //Loops through 1-100 logs only numbers smaller than 50
for (var b = 1; b < 100; b++) {
    if (b < 50) {
        console.log(b);
    }
}

console.log("---------");

// // //Loops through 1-100 logs only numbers smaller than 50 and are divisible by 2
for (var s = 1; s < 100; s++) {
    if (s < 50 && s % 2 == 0) {
        console.log(s);
    }
}

// // //Create a loop that prints your name 100 times
for (var name = 0; name < 100; name++) {
    console.log("Chen Harel");
}

// // //Create a loop the sums all the numbers between 200 and 300
for (var i = 200; i <= 300; i++) {
    console.log(i + 300);
}

// // //Function that recieves a number. If number is smaller then 5 then log your first name. If bigger than 5 then log your last name.
function printName() {
    var randNum = Math.floor(Math.random() * 11)
    if (randNum > 5) {
        console.log(randNum + " is bigger than 5: Chen");
    } else {
        console.log(randNum + " is smaller than 5: Harel");
    }
}
printName()

// // //Short version of 'if' statement above
let randomNumber = Math.floor(Math.random() * 100)
randomNumber > 5 && console.log(randomNumber + " Short way to Chen");
randomNumber < 5 && console.log(randomNumber + " Long way to Chen");

// // //Short version of 'if' statement to print biggest out of two numbers

// // //declare to variables to recieve random numbers
let numberOne = Math.floor(Math.random() * 100)
let numberTwo = Math.floor(Math.random() * 100)


// Check which number is bigger and log it.
numberOne > numberTwo && console.log("One " + numberOne);
numberTwo > numberOne && console.log("Two " + numberTwo);
numberOne == numberTwo && console.log("Both are the same");
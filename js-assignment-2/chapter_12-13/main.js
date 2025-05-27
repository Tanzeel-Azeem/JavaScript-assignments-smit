document.write(`<h3>Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal</h3>`)

var num1 = 205
var num2 = 204
document.write(`<h1>First integer: ${num1}</h1>`);
document.write(`<h1>Second integer: ${num2}</h1>`);
if (num1 > num2) {
    document.write(`<h1>The larger integer is: ${num1}</h1>`);
}else{
    document.write(`<h1>The larger integer is: ${num2}</h1>`);
}



document.write(`<br/><br/><h3>3. Write a program that takes input a number from user &state whether the number is positive, negative or zero.</h3>`)

var number = -5;
document.write(`<h1>The number is   ${number} </h1>`)
if (number > 0){
    document.write(`<h1>${number} is a positive number.</h1>`);
}else if (number < 0){
    document.write(`<h1>${number} is a negative number.</h1>`);
}else{
    document.write(`<h1>${number} is zero.</h1>`);
}

document.write(`<br/><br/><h3>4. Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise</h3>`)


var char = 'a';
document.write(`<h1>The character is: ${char}</h1>`);
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        document.write(`<h1>${char} is a vowel.</h1>`);
}else{

    document.write(`<h1>${char} is not a vowel.</h1>`);
}
var char = 'c'
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        document.write(`<h1>${char} is a vowel.</h1>`);
    }else{
        
        document.write(`<h1>${char} is not a vowel.</h1>`);
    }


document.write(`<br/><br/><h3>a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise</h3>`)

var real_pass = 12345
var user_pass = +prompt("Please enter your password (hint; 12345) :")

while (user_pass == ""){
    var user_pass = +prompt("Please enter your password (hint; 12345) :")
}
if (user_pass === real_pass){
    document.write(`<h1>Correct Passsword!</h1>`)
}else{
    document.write(`<h1>Wrong Passsword!</h1>`)


}
document.write(`<br/><br/><h3>6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}</h3>`)


document.write(`<h1>var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
}
else{
greeting = "Good evening";
}

The else was in the if block ...</h1>`)




document.write(`<br/><br/><h3>Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements</h3>`)


var time = "1900"
document.write(`<h1>The time is ${time}</h1>`)

if (time == "0000" && time < "1200"){
    document.write("<h1>Good morning</h1>")
}else if (time >= "1200" && time < "1700" ){
    document.write("<h1>Good Afternoon</h1>")
}else if (time >= "1700" && time < "2100"){
    document.write("<h1>Good Evening Honey</h1>")
}else if (time >= "2100" && time < "2400"){
    document.write("<h1>Good Night</h1>")
    
}else{
    document.write("<h1>Please enter a valid time</h1>")

}
var num1 = 5
var num2 = 10

document.write("<h1>Sum of " + num1 + " and " + num2 + " is: " + (num1 + num2) + "</h1>")
document.write("<h1>subtraction of " + num1 + " and " + num2 + " is: " + (num1 - num2) + "</h1>")
document.write("<h1>multiplication of " + num1 + " and " + num2 + " is: " + (num1 * num2) + "</h1>")
document.write("<h1>Division of " + num1 + " and " + num2 + " is: " + (num1 / num2) + "</h1>")
document.write(`=================================================================================`)

var num3 = 0

document.write("<h1>Value after variable declaration is: " + num3 + "</h1>")
num3 = 5
document.write("<h1>Value after variable initialization is: " + num3 + "</h1>")
num3++
document.write("<h1>Value after increment is: " + num3 + "</h1>")
num3 += 7
document.write("<h1>Value after adding 7  is: " + num3 + "</h1>")
num3 --
document.write("<h1>Value after decrement is: " + num3 + "</h1>")
num3 %=  3
document.write("<h1>Reminder is: " + num3 + "</h1>")



document.write("<h1>========== MOVIE TICKET PRICE ==========</h1>")
var price = 600
var ticket = 5

document.write(`<h1> the price of ${ticket} tickets is : ${price * ticket} PKR </h1>`)

document.write("<h1>========== Table of 4 ==========</h1>")

var table = 4
for (var i = 1; i <= 10; i++){
    document.write(`<h1> ${table} * ${i} = ${table*i} </h1>`)
}


document.write("<h1>========== TEMPRATURE CONVERTER  ==========</h1>")
var celcius = 25
var farhenheit = 25
document.write(`<h1> ${celcius}°C is ${(farhenheit - 32)* 5/9 }°F </h1>`)
document.write(`<h1> ${farhenheit}°F is ${(celcius * 9/5) + 32}°C </h1>`) 


document.write("<h1>========== Shopping Cart ==========</h1>")
var price_item1 = 500
var price_item2 = 300
var quantity_item1 = 2
var quantity_item2 = 3

document.write(`<h1> Price of item 1 is ${price_item1} PKR </h1>`)
document.write(`<h1> Quantity of item 1 is ${quantity_item1} PKR </h1>`)
document.write(`<h1> Price of item 2 is ${price_item2} PKR </h1>`)
document.write(`<h1> Quantity of item 2 is ${quantity_item2} PKR </h1>`)
document.write(`<h1> Total cost of your order is ${price_item1 * quantity_item1 + price_item2 * quantity_item2} PKR </h1>`)


document.write("<br/><h1>========== MarkSheet ==========</h1>")

var obtainedMarks = 750
var totalMarks = 1000

document.write(`<h1> Total marks are ${totalMarks} and Tanzeel obtained ${obtainedMarks}, his percentage is ${obtainedMarks/totalMarks *100}% </h1>`)



document.write("<br/><h1>========== Curreny Converter ==========</h1>")
var dollar_to_pkr = 282
var riyal_to_pkr = 75

document.write(`<h1>15 dollar is equal to ${dollar_to_pkr * 15} PKR  </h1>`)
document.write(`<h1>15 Riyal is equal to ${riyal_to_pkr * 15} PKR  </h1>`)


document.write("<br/><h1>========== Age Calculator ==========</h1>")
var current_year = 2025
var birth_year = 2007

document.write(`<h1> Current year is ${current_year} and birth year is ${birth_year}, so age is ${current_year - birth_year} years </h1>`)


document.write("<br/><h1>========== The Geometrizer ==========</h1>")
var radius = 24     
document.write(`<h1> The radius of a circle is ${radius} </h1>`)
document.write(`<h1> The circumference of a circle is ${2 * Math.PI * radius} </h1>`)
document.write(`<h1> The area of a circle is ${Math.PI * radius * radius} </h1>`)


document.write("<br/><h1>========== The Lifetime Supply Calculator ==========</h1>")
var fav_snack = "Lays"
var current_age = 18
var max_age = 70
var amounnt_per_day = 5
document.write(`<h1>your fav snack is ${fav_snack} </h1>`)
document.write(`<h1>your age is ${current_age} </h1>`)
document.write(`<h1>your maximun age is ${max_age} </h1>`)
document.write(`<h1>your amount per day is ${amounnt_per_day} </h1>`)
document.write(`<h1> You will need ${((max_age - current_age) * 365) * amounnt_per_day} ${fav_snack} to last you until the ripe old age of ${max_age} </h1>`)
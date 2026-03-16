console.log("My first JS file.")
console.error("This is an error.")

var ledog = "woof"
let cat = "meow"
const bird = "chirp"

var leledog = "woof"
{
    leledog = "meow"
}
console.log(leledog)

let dog = "woof"
{
    let dog = "woof"
    console.log("inside: " + dog)
}
dog = "meow"
console.log(dog)

let num = 12
let isMarried = true
console.log(typeof isMarried)

let name = prompt("What is your name?: ")
console.log(name)

let age = prompt("How old are you?: ")
// age = Number(age)
age = parseInt(age)
while ( isNaN(age) ) {
    age = prompt("Enter a valid age?: ")
}
console.log(age + " " + typeof age)

// falsey values
// false, null, undefined, "", 0
// truthy values
// true, 1

let count = 1
count ++
count += 1
++ count
count += count

let result = prompt("What is your favorite food?: ")
// let sentence = "i love " + result
let sentence = `I love ${result} and I am ${age} years old.`
console.log(sentence)

if ( age > 21 ) {
    console.log("Old man")
} else {
    console.log("Too young.")
}

age > 21 ? "Old man" : "Too young."

// DATES
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const date = new Date()
let dd = date.getUTCDate()
let month = date.getUTCMonth()
let year = date.getFullYear().slice(0, 5)
let hh = date.getHours()
let mm = date.getMinutes()
let ss = date.getSeconds()

console.log(`It is: ${dd} ${hh}${mm} ${shortMonths[month]}${year} `)

hour = date.getHours()

console.log()








let text = 'bananas' ;
console.log(text.length);

let string = "    Trim the outside whitespaces.             "
console.log(`${string.length} characters in this untrimmed.`)
string.trim()
console.log(`${string.length} characters in this untrimmed.`)


let sliceString = "Keno Deary"
let result = sliceString.slice(0,4)
console.log(result)

let indexOfString = "This is a long ass sentence."
let result2 = indexOfString.indexOf("ass")
console.log(result2)


// initial test
let examples = ['APPLE', 'Apple Cider', '   applesauce', 'apple pie', 'applepen']
let test1 = examples.filter(function(data) {
    return data === 'apple';
})
console.log(test1)

// normalize data
let test2 = examples.filter(function(data) {
    return data.trim().toLowerCase().substring(0,5) === 'apple';
})
console.log(test2)

{
    let animals = ['dog', 'cat', 'mouse']
    console.log(animals)
// append, prepend,
    animals.push("cat2")
    console.log(animals)
    animals.pop()
    console.log(animals)
    animals.unshift("cat2")
    console.log(animals)
    animals.shift()
    console.log(animals)
}

let animals = ['dog', 'cat', 'mouse']
let houses = ['doghouse', 'scratching post', 'bird cage']
let newArray = [...animals, ...houses]
console.log(newArray)


// forEach
newArray.forEach(function(data) {
    console.log(data+"'s")
})

// map
let colors = ['blue', 'red', 'grey']
let myresult = colors.map(function(data) {
    return data+"'s"
})
console.log(myresult)

// normal function

let square = function(num) {
    return num ** 2
}
console.log(square(5))

// fat arrow function

let fatArrowSquare = num => {
    return num ** 2
}
console.log(fatArrowSquare(6))

// fat arrow2
let fatArrowSquare2 = num => num ** 2
console.log(fatArrowSquare2(7))

let canYouDrink = (age = 20, favDrink = "Shiner") => {
    let result = (age >= 21)
    return `${result ? "Yes" : "No"}, You ${result ? "" : "don't "}like ${favDrink}.`
}
console.log(canYouDrink(21))
console.log(canYouDrink(20))
console.log(canYouDrink(24))
console.log(canYouDrink(25))

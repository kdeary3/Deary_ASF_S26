// I have a comment

let dog = "woof"
console.log(dog)

let num: number
let num2: number = 5

let isMarried: boolean = false

// function
// parameter data types and return values

const fullname = (fname: string, lname: string): string => {
    return `${fname} ${lname}`
}
console.log(fullname("lerrroyyyyyy", "jeennkkiinnssss"));
// console.log(fullname(5, "jeennkkiinnssss"));

// Arrays
let names: string[] = ["dick", "tom", "harry"]
let names2: Array<string> = ["dick", "tom", "harry"]
let nums: number[] = [1, 2, 3]
let nums2: Array<number> = [4, 5, 6]

import {area, perimeter} from "./helpers"

let area_result: number = area(4,5)
console.log(area_result)

let perimeter_result: number =perimeter(2,3)
console.log(perimeter_result)

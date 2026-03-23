let string = "hello"
console.log(string)

import { Monster } from "./models/monsterTypes"

let starmie: Monster = {
    firstname: "starmie",
    age: 20,
    type: "Undead",
    moreInfo: "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem."
}

let blobbo: Monster = {
    firstname: "blobbo",
    age: 3,
    type: "Blob",
    moreInfo: "Absorbs everything in sight, making it a fascinating yet unpredictable entity."
}

let aliceSmith: Monster = {
    firstname: "Alice",
    lastname: "Smith",
    age: 28,
    type: "Human",
    moreInfo: "With a keen intellect and a deep curiosity, she studies various creatures to better understand their behaviors and abilities."
}

console.log(starmie)
console.log(blobbo)
console.log(aliceSmith)
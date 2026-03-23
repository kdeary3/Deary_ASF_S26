export const area =
    (length: number, width: number): number => {
    return length * width
}

export const perimeter =
    (width: number, length: number): number => {
    return width + width + length + length
}

const data = "premium"

const foodData = [
    {category: "premium"},
    {category: "standard"},
    {category: "boba"},
]

// export const filteredCategories= foodData.filter(data) => {
//     let userChoice = "premium" ;
//     let {category} = data ;
//     category === userChoice ;
// }
//
// console.log(filteredCategories)
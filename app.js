
// Q1 directions below----------------------------------

// initialise and empty string

// loop through the rounded down rating
    //  add a star for every iteration
    // if its not the last iteration. add a space
    
    // if the number is not a integer
    // add a full stop
    
    // return it

// Q1 directions above----------------------------------


// Q1 below
// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings = ratings + "*"
//         if (i !== Math.floor(ratings) - 1) {
//             ratings = ratings + " "
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings = ratings + "."
//     }
//     return ratings;

// }

// console.log(showRating(0.5))

// Q1 above

// Q1 Cleaner code(+=) below

// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings += "*"
//         if (i !== Math.floor(ratings) - 1) {
//             ratings += " "
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings += "."
//     }
//     return ratings;
    
// }

// console.log(showRating(4.5))

// Q1 Cleaner code(+=) above


// Q2 below

// function shortLowTohigh(numbers) {
//     return numbers.sort((a,b) => a - b);
// }
// console.log(shortLowTohigh([5, 10, 20, 1, 2]))

// Q2 above


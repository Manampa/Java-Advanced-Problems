
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


// Q3 below

// function sortHighToLow(numbers){
//     return numbers.sort((a,b) => b.price - a.price);
// }
// console.log(sortHighToLow([
//     {id:1 , price: 50},
//     {id:2 , price: 0},
//     {id:3 , price: -500},

// ]));

// Q3 above 

// Q4. Promises below 24:50 
// async function postsByUser(userId) {
//     let promise = await fetch("https://jsonplaceholder.typicode.com/posts")
//     console.log(await promise.json())
// }
// postsByUser(4);

// Q4. Promises above
// Q5. Below

//  async function postsByUser(userId) {
    //      const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    //      const result = await promise.json()
    //      const posts = result.filter(element => element.userId === userId)
    //      console.log(posts)
    //  }
    //  postsByUser(4);
    
// Q5. Above
    
    
// Q6. First 6 incomplete Todos below
async function firstSixIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json()
    const incompleteTasks = result.filter(elem => !elem.completed).slice(0,6);
    console.log(incompleteTasks);

}
firstSixIncomplete(6);

// Q6. First 6 incomplete Todos above 29:35
    
    
    
    
    
    
    
    
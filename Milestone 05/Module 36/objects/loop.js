const numArr = [20, 10, 30, 40];

const laptop = {
    size: 14.3,
    color: 'silver',
    weight: 0.5,
    keyboard: 'butterfly',
    category: 'two in one',
    penSupport: true,
    touchScreen: true,
    lightWeight: true,
}

const loop = Object.keys(laptop)
// const values = Object.values(laptop) 

// for(let key of loop){
//     console.log(key, laptop[key]) // now we got value
// }


// now to turn for in loop 
// for(let key in laptop){
//     console.log(key, laptop[key])
// }

for (const [key, value] of Object.entries(laptop)) {
    console.log(key, value);
}
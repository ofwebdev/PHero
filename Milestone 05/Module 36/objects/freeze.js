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

// let property = Object.keys(laptop)
// let value = Object.values(laptop)
// let all = Object.entries(laptop)

// seal can not add new property [but modify property]
Object.seal(laptop)
laptop.price = 500;
laptop.videoType = '4k';


// freeze can not update existing property and can not add new property
Object.freeze(laptop)

// Here we modify size property 
laptop.size = 16;

console.log(laptop);
let btn = document.querySelector('.load-data');
let btn2 = document.querySelector('.load-data2');

btn.addEventListener('click', function () {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
        .then((res) => res.json())
        .then(json => console.log(json));
})

btn2.addEventListener('click', function() {
    const url = 'https://fakestoreapi.com/products';

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));


    
});




// let btn2 = document.querySelector('.load-user-data')
// btn2.addEventListener('click', function () {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => helperFunction(data))
// })


// function helperFunction(data) {
//     let showDate = document.querySelector('#show-data');
//     for(let i = 0 ; i < data.length; i++){
//         console.log(data[i])
//         showDate.innerHTML = data[i].name
//     }


//     for (let user of data) {
//         showDate.innerHTML = user.name
//         console.log(user.name)
//     }
// }

// let btn2 = document.querySelector('.load-user-data')
// btn2.addEventListener('click', function () {
//     getData();
// })

// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => helperFunction(data))
// }

// function helperFunction(data) {
//     let showDate = document.querySelector('#show-data');
//     showDate.innerHTML = ''; // Clear the previous data

//     // for (let i = 0; i < data.length; i++) {
//     //     console.log(data[i])
//     //     showDate.innerHTML += data[i].name + '<br>';
//     // }

//     // Alternatively, you can use a for...of loop to loop through the data
//     for (let user of data) {
//         // showDate.innerHTML += user.name + '<br>';
//         // console.log(user.name)

//         const li =  document.createElement('li');

//         li.innerHTML = user.name
//         showDate.appendChild(li)

//     }
// }

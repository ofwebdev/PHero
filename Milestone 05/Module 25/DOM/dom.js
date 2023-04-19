

// HTMLAllCollection 
// document.getElementsByTagName('li')
// HTMLCollection(6) [li, li, li, li, li, li]


// NODELIST
// document.querySelectorAll('li')
// NodeList(6) [li, li, li, li, li, li]




// The main difference between an HTMLCollection and a NodeList is that one is live and one is static. This means that when an element is appended to the DOM, a live node will recognize the new element while a static node will not.


// NodeLists have a defined forEach method as well as a few other methods including item, entries, keys, and values. 


const liCollection = document.querySelectorAll('li');
// if you use bellow any one you can't itareate 
// document.getElementsByTagName
// document.getElementsByClassName



for (let li of liCollection) {
    console.log(li.innerText);
}

const forEachEnabel = liCollection.forEach(element => {
    console.log(element);
});
// 🚫 Uncaught TypeError: liCollection.forEach is not a function



// Summarize
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// const input = document.getElementsByName('fname');
// The getElementsByName() returns a live NodeList of elements with a specified name.
// The NodeList is an array-like object, not an array object.

const idInput = document.getElementsByName('fname')
console.dir(idInput);

// For more details got to rate.html page :)


// Style ul 

// const ul = document.querySelector('.ul');
// ul.style.background = 'green';
// ul.style.color = 'white';
// ul.style.border = '16px solid violet';
// ul.style.borderRadius = '16px';
// ul.style.paddingTop = '50px';
// ul.style.paddingBottom = '50px'

// console.log(ul.style);


const uls = document.querySelectorAll('.ul');

for (const ul of uls) {
    ul.style.background = 'green';
    ul.style.color = 'white';
    ul.style.border = '16px solid violet';
    ul.style.borderRadius = '16px';
    ul.style.paddingTop = '50px';
    ul.style.paddingBottom = '50px'
}



// Add elements

const realUl = document.querySelector('.real-ul');
const li = document.createElement('li');
li.innerText = "MongoDB";

console.log(li)

console.log(realUl.appendChild(li));



function chunk() {
    const fragment = document.createDocumentFragment();
    const li = fragment
        .appendChild(document.createElement('section'))
        .appendChild(document.createElement('ul').classList.add('hi'))
        .appendChild(document.createElement('li'));
    li.textContent = 'hello world';

    document.body.appendChild(fragment);
}

chunk()

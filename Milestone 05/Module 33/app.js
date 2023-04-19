function loadPost(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url).then(res => res.json()).then(data => displayPost(data))
}

function displayPost(posts) {
    console.log(posts)
    const divContainer = document.querySelector('.container')
    for(let post of posts){
        const postDiv = document.createElement('div');

        postDiv.innerHTML= `
            <h2>${post.userId}</h2>
            <h4>${post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h4>
            <p>${post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
        `

        divContainer.appendChild(postDiv)
    }


}

loadPost()
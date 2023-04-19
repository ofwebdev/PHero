const loadQuote = () => {
    const url = 'https://api.kanye.rest/';
    fetch(url).then(res => res.json()).then(json => displayQuote(json))
}

const displayQuote = quote => {
    const blockQuote = document.querySelector('.quote');

    blockQuote.innerHTML = quote.quote;
}

loadQuote()

// async function loadQuote2() {
//     await
// }
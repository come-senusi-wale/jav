const quotes = [
    {
        name: 'wale saheed',
        quote: 'give and forget'
    },
    {
        name: 'Akinyemi Aburo',
        quote: 'go home test your faith'
    },
    {
        name: 'Sadiq Wale',
        quote: 'nothing good come easy'
    },
    {
        name: 'Ajao Omoakin',
        quote: 'go to ur family and test ur power'
    }
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');


quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
// Variables

const button = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Ganghi`
}, {
    quote: `"If you want to live a happy life, tie it to a globalThis, not to people or things."`,
    person: `Albert Einstein`
}, {
    quote: `"The only thing that feels better than winning is winning when nobody thought you could."`,
    person: `Hank Aaron`
}, {
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    pesron: `Winston Churchill`
}, {
    quote: `"If you can dream it, you can do it."`,
    person: `Walt Disney`
}, {
    quote: `"If you want something done, ask a busy person to do it."`,
    person: `Laura Ingalls Wilder`
}, {
    quote: `"If your actions inspire others to dream more, learn more, do more and become more, you are a leader."`,
    person: `John Quincy Adams`
}, {
    quote: `"The best way to find out if you can trust somebody is to trust them."`,
    person: `Ernest Hemingway`
}, {
    quote: `"The only Limit to our realization of tomorrow will be our doubts of today."`,
    person: `Franklin D. Roosevelt`
}, {
    quote: `"We may encounter many defeats but we must not be defeated."`,
    person: `Maya Angelou`
}, {
    quote: `"I'm not here to be perfect, I'm here to be real."`,
    person: `Lady Gaga`
}, {
    quote: `"The most important thing is to enjoy your life - to be happy - it's all that matters."`,
    person: `Steve Jobs`
}, {
    quote: `"Your time is limited, don't waste it living someone else's life."`,
    person: `Steve Jobs`
}, {
    quote: `"The best way to find out what you want in life is to try a lot of things."`,
    person: `Oprha Winfrey`
}, {
    quote: `"In order to be truly happy, you must pursue your dreams and goals."`,
    person: `Oprah Winfrey`
}, {
    quote: `"You can have anything you want if you are willing to give up everything you have."`,
    person: `Oprah Winfrey`
}, {
    quote: `"Don't let anyone tell you what you can't do. Follow your dreams and persist."`,
    person: `Barack Obama`
}, {
    quote: `"If you want something you've never had, you must be willing to do something you've never done."`,
    person: `Unknown`
}, {
    quote: `"Everything happens for a reason."`,
    person: `Unknown`
}, {
    quote: `"You only live once, but if you do it right, once is enough."`,
    person: `Mae West`
}, {
    quote: `"Life is what we make it and how we make it – whether we realize it or not."`,
    person: `Napoleon Hill`
}];

button.addEventListener("click", function() {
    const random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
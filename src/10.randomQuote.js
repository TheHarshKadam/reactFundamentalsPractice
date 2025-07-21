import React, { useState } from 'react'

const RandomQuote = () => {
    let quotes = ["I think, therefore I am. (Rene Descartes)",
        "I may disagree with what you say, but I will defend to death your right to say it. (Evelyn Beatrice Hall)",
        "If men were perfectly virtuous, they wouldn’t have friends. (Montesquieu)",
        "Ignorance is bliss.",
        "People do what they hate for money and use the money to do what they love. (Jimmy O. Yang’s dad?)",
        "Small things make perfection, but perfection is no small thing. (Sir Henry Royce)",
        "A masterpiece is born a masterpiece. (Hyouka)",
        "Who will guard the guardians?",
        "History will be kind to me, for I intend to write it. (Winston Churchill)",
        "No problem can be solved from the same level of consciousness that created it. We must see the world anew. (Albert Einstein)"]

        const [quote, setQuote] = useState('');

        function randomQuote(){
            const randIndex = Math.floor(Math.random()*quotes.length);
            setQuote(quotes[randIndex])
        }
    return (

        <div>
            <h1>Random Quotes</h1>
            <h3>{quote}</h3>
            <button onClick={randomQuote}>Generate Random Quote</button>
        </div>
    )
}

export default RandomQuote
/**
 * @return {Promise<Object>}
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    //console.log(data[0])
    return data[0];
} 



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = `Breaking Bad App`;
    element.innerHTML = 'Loading...'
    

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerHTML = 'Next Quote';

    const renderQuote = ( data ) => {
        //console.log(data)
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton );
    }

    fetchQuote()
        .then(renderQuote);

    nextQuoteButton.addEventListener('click', () => {
        nextQuoteButton.disabled = true;
        //element.innerHTML = 'Loading...'
        fetchQuote()
            .then(renderQuote)
            .then(() => {
                nextQuoteButton.disabled = false;
            })
    })


    
}



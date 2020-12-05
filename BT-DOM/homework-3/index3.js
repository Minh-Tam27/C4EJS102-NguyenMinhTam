const quote = document.getElementById('quote');
const reload = document.getElementById('reload');

reload.onclick = function() {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = randomQuote["quoteText"]+ '\n' +randomQuote["quoteAuthor"];
}
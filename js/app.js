

// Created a function to grab a random quote from the "quotes" array.

function getRandomQuote() {
     var randomNumber = Math.floor(Math.random() * quotes.length);
     return quotes[randomNumber];
}
console.log(getRandomQuote());



// Created a printQuote function to display quotes on screen.

function printQuote() {
  var quotes = getRandomQuote();
  var HTML = '';
  HTML += '<p class="quote">' + quotes.quote + '</p>';
  HTML += '<p class="source">' + quotes.source + '<span class="citation">' + quotes.citation + '</span>' + '<span class="year">' + quotes.year + '</span>' + '</p>';


  if (quotes.citation === true) {
    '<span class="citation">' + '</span>';

  } 

  if (quotes.year === true) {
    '<span class="year">' + '</span>';

  }

  var div = document.getElementById('quote-box');
  div.innerHTML = HTML;

}







/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
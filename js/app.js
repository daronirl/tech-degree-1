

// Created a function to grab a random quote from the "quotes" array.

function getRandomQuote() {
     var randomNumber = Math.floor(Math.random() * quotes.length);  // created variable to store the random number
     return quotes[randomNumber]; // returning the randomNumber variable
}
console.log(getRandomQuote());



// Created a printQuote function to display quotes on screen.

function printQuote() {
  var randomQuotes = getRandomQuote(); // created a randomQuote variable to hold the quotes.
  var HTML = ''; // empty string variable to print to the screen.
  HTML += '<p class="quote">' + randomQuotes.quote + '</p>';
  HTML += '<p class="source">' + randomQuotes.source;


  // Conditional Statement, if the citation property exist, print to page.
  if (randomQuotes.citation) {
      HTML += '<span class="citation">' + randomQuotes.citation + '</span>';

  }
  // Conditional Statement , if the year property exist, print to page.
  if (randomQuotes.year) {
      HTML += '<span class="year">' + randomQuotes.year + '</span>';
  }
  
  console.log(HTML);

  var div = document.getElementById('quote-box');
  div.innerHTML = HTML;


  // Color variables with the randomColor function to change Background when quote changes.
  var black = randomColor();
  var purple = randomColor();
  var blue = randomColor();
  var red = randomColor();
  var rgbColor = 'rgb(' + black + ',' + purple + ',' + blue + ',' + red + ')';

  document.body.style.backgroundColor = rgbColor;

  

}
// calling the printQuote so when page refreshes , it starts with a quote.
printQuote();





// Function that holds the random number function for colors.
function randomColor() {
  return Math.floor(Math.random() * 256);
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

let quotes=[];

async function getQuotes() {
  try{
    const response=await fetch("quotes.json");
    quotes=await response.json();
    getLocalQuote();
  }
  catch(error){
    quoteText.textContent="Error: "+error;
  }
  
}


function getLocalQuote() {
 const random = Math.floor(Math.random() * quotes.length);
 const quote = quotes[random];
 quoteText.textContent = '"'+quote.text+'"';
 authorText.textContent = '-'+quote.author;
}

newQuoteBtn.addEventListener("click", getLocalQuote);

getQuotes();

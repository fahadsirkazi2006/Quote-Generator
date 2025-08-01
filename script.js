const quoteText=document.getElementById("quote");
const authorText=document.getElementById("author");
const addquotebtn =document.getElementById("new-quote");

async function getQuote() {
    try{
        const response =await fetch("https://programming-quotes-api.vercel.app/api/random");
        const data= await response.json();
       
        quoteText.textContent='"'+data.content+'"';
        authorText.textContent='- '+data.author || "Unknown";

    }catch(error){
        console.log("fetch error:",error);
        quoteText.textContent="An error occurred while fetching the quote.";
        authorText.textContent="";
    }
    
    addquotebtn.addEventListener("click",getQuote);

    
}
getQuote();
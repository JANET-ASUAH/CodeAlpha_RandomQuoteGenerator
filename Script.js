
const quotes = [
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Success is the sum of small efforts repeated daily.",
        author: "Robert Collier"
    },
    {
        text: "Dream big, work hard, achieve more.",
        author: "Unknown"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Keep going, you're doing great!",
        author: "Unknown"
    }
];



let currentIndex = -1;



function showRandomQuote() {

    
    let randomIndex = Math.floor(Math.random() * quotes.length);

    
    while (randomIndex === currentIndex) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }

    
    currentIndex = randomIndex;

    
    const selectedQuote = quotes[randomIndex];

    
    document.getElementById("quote").textContent =
        '"' + selectedQuote.text + '"';

    document.getElementById("author").textContent =
        "- " + selectedQuote.author;
}



document.getElementById("new-quote").addEventListener("click", showRandomQuote);



showRandomQuote();
/*Description:
This javascript code generates a random Russian proverb when the user clicks a button.
It selects a quote from an array and displays it on the webpage.
 Nate Moore
 4/7/26
*/

function newQuote() {

    let quotes = [
        { text: "The first pancake is lumpy.", author: "Russian Proverb" },
        { text: "Work isn't a wolf—it won't run away into the forest.", author: "Russian Proverb" },
        { text: "A friend argues, an enemy agrees.", author: "Russian Proverb" },
        { text: "Live for a century, learn for a century.", author: "Russian Proverb" },
        { text: "A word is not a sparrow: once it flies out, you won't catch it.", author: "Russian Proverb" },
        { text: "The quieter you go, the further you'll get.", author: "Russian Proverb" },
        { text: "What's new to a goat is old news to a sheep.", author: "Russian Proverb" },
        { text: "Love is so cruel you could fall in love with a goat.", author: "Russian Proverb" },
        { text: "The forbidden fruit is sweet.", author: "Russian Proverb" },
        { text: "Love is like a boat—you can't sail away on one oar.", author: "Russian Proverb" },
        { text: "If you're scared of wolves, don't go in the woods", author: "Russian Proverb" },
        { text: "In a quiet lagoon, devils dwell.", author: "Russian Proverb" },
        { text: "Without effort, you won't even pull a fish out of a pond.", author: "Russian Proverb" },
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        quotes[randomIndex].text + " — " + quotes[randomIndex].author;
}
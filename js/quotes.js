const quotes=[
    {
    quote:"Anyone can be anything.",
    movie:"zootopia",
    },
    {
        quote:"At some point you've got to decide for yourself who you gonna be. Can't let nobody make that decision for you",
        movie:" Juan, Moonlight",
    },
    {
        quote:"Cowards never start.The weak never finish and the winners never quit.",
        movie:"Iron Man"

    },
    {
        quote:"Today’s special moments are tomorrow’s memories.",
        movie:"Aladdin",
    },
    {
        quote:"Venture outside your comfort zone.The rewards are worth it.",
        movie:"Rapunzel",
    },
    {
        quote:"If you keep on believing the dream that you wish will come true.",
        movie:"Cinderella",
    },
    {
        quote:"There comes a day when you’re gonna look around and realize happiness is where you are.",
        movie:"Moana",
    },
    {
        quote:"I know there is a hole in my life,and I need to fill it soon.",
        movie:"The Intern",
    },
    {
        quote:"Being genius is not enough, it takes courage to change people’s hearts.",
        movie:"green book",
    },
    {
        quote:"We accept the reality of the world with which we’re presented.",
        movie:"The Truman Show",
    },
    {
        quote:"I just try to live every day as if I’ve deliberately come back to this one day.",
        movie:"about time",
    }

];
const quote=document.querySelector("#quote span:first-child");
const movie=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
movie.innerText=todaysQuote.movie;